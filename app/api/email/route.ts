import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // const { name, email, service, message, subject, toEmail } =
    //   await req.json();
    const formData = await req.json();

    const formattedData = Object.entries(formData)
      .map(([key, value]) => {
        const cleanKey = key.trim().replace(/\s+/g, " ").replace(/\*/g, ""); // Remove extra spaces & asterisks

        return `<p><strong>${cleanKey}:</strong> ${value}</p>`;
      })
      .join("");

    const emailKey = Object.keys(formData).find((key) =>
      key.toLowerCase().includes("email"),
    );

    const userEmail = emailKey ? formData[emailKey] : null;

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_USRE_PW,
      },
    });

    // const mailOptions = {
    //   from: process.env.NEXT_PUBLIC_SMTP_USER,
    //   to: `${email}, ${toEmail}`,
    //   subject: subject || "New Inquiry from Contact Form",
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Service:</strong> ${service}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // };
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: userEmail,
      subject: "New Inquiry from Contact Form",
      html: `<h2>Contact Form Submission</h2>${formattedData}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    throw new Error((error as Error).message || "Error sending email");
  }
}
