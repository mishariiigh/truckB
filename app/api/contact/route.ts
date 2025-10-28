import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, phone, date, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'mishariiigh@hotmail.com',
        pass: process.env.EMAIL_PASSWORD, // App password
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'mishariiigh@hotmail.com',
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Event Date: ${date || 'Not specified'}
Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
