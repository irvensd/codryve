import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getClientIp, takeContactRateLimit } from '@/lib/contact-rate-limit';

const MAX_BODY_BYTES = 24 * 1024;

const LIMITS = {
  name: 200,
  email: 254,
  subject: 300,
  message: 12_000,
  company: 200,
  projectDescription: 12_000,
  budget: 80,
  timeline: 80,
  additionalInfo: 8000,
  serviceType: 40,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function str(body: Record<string, unknown>, key: string, max: number): string | null {
  const v = body[key];
  if (v === undefined || v === null) return '';
  if (typeof v !== 'string') return null;
  if (v.length > max) return null;
  return v;
}

export async function POST(req: Request) {
  const ip = getClientIp(req.headers);
  const limited = takeContactRateLimit(ip);
  if (!limited.ok) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      {
        status: 429,
        headers: { 'Retry-After': String(limited.retryAfterSec) },
      }
    );
  }

  const contentLength = req.headers.get('content-length');
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  let text: string;
  try {
    text = await req.text();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(text) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const fax = body.fax;
  if (typeof fax === 'string' && fax.trim() !== '') {
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  }

  const name = str(body, 'name', LIMITS.name);
  const email = str(body, 'email', LIMITS.email);
  const subject = str(body, 'subject', LIMITS.subject);
  const message = str(body, 'message', LIMITS.message);
  const company = str(body, 'company', LIMITS.company);
  const projectDescription = str(body, 'projectDescription', LIMITS.projectDescription);
  const budget = str(body, 'budget', LIMITS.budget);
  const timeline = str(body, 'timeline', LIMITS.timeline);
  const additionalInfo = str(body, 'additionalInfo', LIMITS.additionalInfo);
  const serviceType = str(body, 'serviceType', LIMITS.serviceType);

  if (
    name === null ||
    email === null ||
    subject === null ||
    message === null ||
    company === null ||
    projectDescription === null ||
    budget === null ||
    timeline === null ||
    additionalInfo === null ||
    serviceType === null
  ) {
    return NextResponse.json({ error: 'Invalid field values' }, { status: 400 });
  }

  const nameT = name.trim();
  const emailT = email.trim();
  if (!nameT || !emailT || !EMAIL_RE.test(emailT)) {
    return NextResponse.json({ error: 'Name and valid email are required' }, { status: 400 });
  }

  const isProjectRequest = projectDescription.trim().length > 0;

  if (!isProjectRequest) {
    const subj = subject.trim();
    const msg = message.trim();
    if (!subj || !msg) {
      return NextResponse.json(
        { error: 'Subject and message are required' },
        { status: 400 }
      );
    }
  }

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASSWORD ||
    !process.env.SMTP_FROM_EMAIL
  ) {
    console.error('Contact API: missing SMTP environment variables');
    return NextResponse.json({ error: 'Email is not configured' }, { status: 503 });
  }

  let mailSubject: string;
  let textBody: string;
  let htmlBody: string;

  if (isProjectRequest) {
    const desc = projectDescription.trim();
    const svc = serviceType.trim() || 'unspecified';
    mailSubject = `Project request (${svc}): ${nameT}`;
    const lines = [
      `Name: ${nameT}`,
      `Email: ${emailT}`,
      `Service: ${svc}`,
      company.trim() ? `Company: ${company.trim()}` : null,
      `Project description:\n${desc}`,
      budget.trim() ? `Budget: ${budget.trim()}` : null,
      timeline.trim() ? `Timeline: ${timeline.trim()}` : null,
      additionalInfo.trim() ? `Additional:\n${additionalInfo.trim()}` : null,
    ].filter(Boolean);
    textBody = lines.join('\n\n');
    htmlBody = `
        <h3>New project request</h3>
        <p><strong>Name:</strong> ${escapeHtml(nameT)}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailT)}</p>
        <p><strong>Service:</strong> ${escapeHtml(svc)}</p>
        ${company.trim() ? `<p><strong>Company:</strong> ${escapeHtml(company.trim())}</p>` : ''}
        <p><strong>Project description:</strong></p>
        <p>${escapeHtml(desc).replace(/\n/g, '<br>')}</p>
        ${budget.trim() ? `<p><strong>Budget:</strong> ${escapeHtml(budget.trim())}</p>` : ''}
        ${timeline.trim() ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline.trim())}</p>` : ''}
        ${
          additionalInfo.trim()
            ? `<p><strong>Additional:</strong></p><p>${escapeHtml(additionalInfo.trim()).replace(/\n/g, '<br>')}</p>`
            : ''
        }
      `;
  } else {
    const subj = subject.trim();
    const msg = message.trim();
    mailSubject = `Contact form: ${subj}`;
    textBody = `Name: ${nameT}\nEmail: ${emailT}\nSubject: ${subj}\n\nMessage:\n${msg}`;
    htmlBody = `
        <h3>Contact form</h3>
        <p><strong>Name:</strong> ${escapeHtml(nameT)}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailT)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subj)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(msg).replace(/\n/g, '<br>')}</p>
      `;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL ?? 'hello@workloomstudio.com',
      replyTo: emailT,
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
