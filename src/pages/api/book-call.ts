import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, preferredDate, notes } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Call Booking Request",
      text: `
        Name: ${name}
        Email: ${email}
        Preferred Date: ${preferredDate}
        Notes: ${notes || "N/A"}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Booking submitted successfully." });
  } catch (error) {
    console.error("Error sending booking:", error);
    return res.status(500).json({ error: "Failed to send booking." });
  }
}
