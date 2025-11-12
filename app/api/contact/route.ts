import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, phone, date, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: 'Missing required fields (name, email, message).' }, { status: 400 });
  }

  // Ensure the App Password environment variable is available
  if (!process.env.EMAIL_PASSWORD) {
    console.error('Configuration Error: EMAIL_PASSWORD environment variable is not set.');
    return NextResponse.json({ 
      ok: false, 
      message: 'Server configuration error: Email password missing.' 
    }, { status: 500 });
  }

  // Define the sending and receiving email address
  // This must match the Gmail account that generated the App Password.
  const senderEmail = 'mishari.gh96@gmail.com'; 

  try {
    // Nodemailer transporter configuration
    // Use 'gmail' service and the App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: senderEmail, 
        pass: process.env.EMAIL_PASSWORD, // The App Password: "cxme wagq ouxq wmdi"
      },
    });

    // Email content
    const mailOptions = {
      // Set 'from' to the sender email with a friendly display name for better clarity.
      from: `"Ottawa Cool treat" <${senderEmail}>`, 
      // The destination email (where you receive the inquiries)
      to: senderEmail, 
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Event Date: ${date || 'Not specified'}
Message:
${message}
      `,
      // Set 'replyTo' to the client's email so you can reply directly to them.
      replyTo: email, 
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Nodemailer Error:', err);
    
    // Provide a helpful error message if authentication fails
    const errorMessage = (err as Error).message.includes('Authentication failed') 
                         ? 'Authentication failed. Please check your App Password and ensure 2FA is enabled.' 
                         : 'Internal Server Error during email transmission.';
                         
    return NextResponse.json({ 
      ok: false, 
      message: errorMessage,
      error: (err as Error).message
    }, { status: 500 });
  }
}