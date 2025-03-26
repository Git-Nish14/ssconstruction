import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: `New Contact Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <header style="background-color: #1a1a1a; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">📩 New Contact Message</h2>
        </header>
  
        <section style="padding: 20px;">
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">${message}</p>
        </section>
  
        <footer style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">This message was sent via your website contact form</p>
          <p style="margin: 5px 0 0;">&copy; ${new Date().getFullYear()} Sindhwai Construction. All rights reserved.</p>
        </footer>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
