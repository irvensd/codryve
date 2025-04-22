import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, projectDescription, budget, timeline, additionalInfo, serviceType } = body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: 'support@codryve.com',
      subject: `New Project Request: ${serviceType} Development`,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Service Type:</strong> ${serviceType} Development</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not provided'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not provided'}</p>
        <p><strong>Additional Information:</strong> ${additionalInfo || 'Not provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Project request submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit project request. Please try again.' },
      { status: 500 }
    );
  }
} 