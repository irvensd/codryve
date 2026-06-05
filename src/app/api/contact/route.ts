import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmail, buildProjectEmail } from '@/lib/contact-email';
import { getClientIp, takeContactRateLimit } from '@/lib/contact-rate-limit';

const MAX_BODY_BYTES = 24 * 1024;

const LIMITS = {
  name: 200,
  email: 254,
  phone: 40,
  message: 12_000,
  company: 200,
  serviceInterest: 300,
  projectDescription: 12_000,
  budget: 80,
  timeline: 80,
  additionalInfo: 8000,
  serviceType: 40,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    return NextResponse.json({ error: 'Request too large' }, { status: 400 });
  }

  let text: string;
  try {
    text = await req.text();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(text) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const fax = body.fax;
  if (typeof fax === 'string' && fax.trim() !== '') {
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  }

  const name = str(body, 'name', LIMITS.name);
  const email = str(body, 'email', LIMITS.email);
  const phone = str(body, 'phone', LIMITS.phone);
  const message = str(body, 'message', LIMITS.message);
  const company = str(body, 'company', LIMITS.company);
  const serviceInterest = str(body, 'serviceInterest', LIMITS.serviceInterest);
  const projectDescription = str(body, 'projectDescription', LIMITS.projectDescription);
  const budget = str(body, 'budget', LIMITS.budget);
  const timeline = str(body, 'timeline', LIMITS.timeline);
  const additionalInfo = str(body, 'additionalInfo', LIMITS.additionalInfo);
  const serviceType = str(body, 'serviceType', LIMITS.serviceType);

  if (
    name === null ||
    email === null ||
    phone === null ||
    message === null ||
    company === null ||
    serviceInterest === null ||
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
    return NextResponse.json({ error: 'Name and a valid email are required' }, { status: 400 });
  }

  const isProjectRequest = projectDescription.trim().length > 0;

  if (!isProjectRequest && !message.trim()) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact API: missing Resend environment variables');
    return NextResponse.json(
      { error: 'Email is not configured. Please try again later or email us directly.' },
      { status: 503 }
    );
  }

  const emailContent = isProjectRequest
    ? buildProjectEmail({
        name: nameT,
        email: emailT,
        serviceType: serviceType.trim() || 'unspecified',
        projectDescription: projectDescription.trim(),
        company: company.trim() || undefined,
        budget: budget.trim() || undefined,
        timeline: timeline.trim() || undefined,
        additionalInfo: additionalInfo.trim() || undefined,
      })
    : buildContactEmail({
        name: nameT,
        email: emailT,
        message: message.trim(),
        phone: phone.trim() || undefined,
        company: company.trim() || undefined,
        serviceInterest: serviceInterest.trim() || undefined,
      });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: emailT,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'We could not send your message. Please try again or email us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
