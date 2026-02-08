export const runtime = 'nodejs';

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, interest } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Suran Farming Website" <${process.env.EMAIL_USER}>`,
      to: 'bkagroexporters@gmail.com',
      subject: `New Contact Form | ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Interest:</b> ${interest}</p>
        <p><b>Message:</b><br/>${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('EMAIL ERROR:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
