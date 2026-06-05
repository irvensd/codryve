import { BRAND } from '@/lib/brand';

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(input: string): string {
  return escapeHtml(input).replace(/\n/g, '<br>');
}

type EmailField = { label: string; value: string; multiline?: boolean };

function buildFieldsHtml(fields: EmailField[]): string {
  return fields
    .map((field) => {
      const value = field.multiline
        ? `<p style="margin:6px 0 0;color:#3f3f46;white-space:pre-wrap;">${nl2br(field.value)}</p>`
        : `<p style="margin:6px 0 0;color:#18181b;font-weight:500;">${escapeHtml(field.value)}</p>`;
      return `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;vertical-align:top;width:140px;">
            <span style="font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#71717a;">${escapeHtml(field.label)}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;">${value}</td>
        </tr>`;
    })
    .join('');
}

function buildFieldsText(fields: EmailField[]): string {
  return fields.map((field) => `${field.label}: ${field.value}`).join('\n');
}

export function buildContactEmail(params: {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
}) {
  const fields: EmailField[] = [
    { label: 'Name', value: params.name },
    { label: 'Email', value: params.email },
  ];
  if (params.phone) fields.push({ label: 'Phone', value: params.phone });
  if (params.company) fields.push({ label: 'Company', value: params.company });
  if (params.serviceInterest) fields.push({ label: 'Service interest', value: params.serviceInterest });
  fields.push({ label: 'Message', value: params.message, multiline: true });

  const subject = params.serviceInterest
    ? `New inquiry: ${params.serviceInterest} — ${params.name}`
    : `New contact from ${params.name}`;

  const text = [`${BRAND.name} — new contact form submission`, '', buildFieldsText(fields)].join('\n');

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;padding:24px;background:#f5f5f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;">
      <tr>
        <td style="background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;padding:28px 32px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#2563eb;">${escapeHtml(BRAND.name)}</p>
          <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;color:#09090b;letter-spacing:-0.02em;">New contact form submission</h1>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:15px;line-height:1.5;">
            ${buildFieldsHtml(fields)}
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#71717a;">Reply directly to this person using the Reply button in your mail client.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  return { subject, text, html };
}

export function buildProjectEmail(params: {
  name: string;
  email: string;
  serviceType: string;
  projectDescription: string;
  company?: string;
  budget?: string;
  timeline?: string;
  additionalInfo?: string;
}) {
  const fields: EmailField[] = [
    { label: 'Name', value: params.name },
    { label: 'Email', value: params.email },
    { label: 'Service', value: params.serviceType },
  ];
  if (params.company) fields.push({ label: 'Company', value: params.company });
  fields.push({ label: 'Project description', value: params.projectDescription, multiline: true });
  if (params.budget) fields.push({ label: 'Budget', value: params.budget });
  if (params.timeline) fields.push({ label: 'Timeline', value: params.timeline });
  if (params.additionalInfo) fields.push({ label: 'Additional info', value: params.additionalInfo, multiline: true });

  const subject = `Project request (${params.serviceType}): ${params.name}`;
  const text = [`${BRAND.name} — new project request`, '', buildFieldsText(fields)].join('\n');

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;padding:24px;background:#f5f5f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;">
      <tr>
        <td style="background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;padding:28px 32px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#2563eb;">${escapeHtml(BRAND.name)}</p>
          <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;color:#09090b;letter-spacing:-0.02em;">New project request</h1>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:15px;line-height:1.5;">
            ${buildFieldsHtml(fields)}
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#71717a;">Reply directly to this person using the Reply button in your mail client.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  return { subject, text, html };
}
