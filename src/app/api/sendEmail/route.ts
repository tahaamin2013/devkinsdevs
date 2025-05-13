import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, industry, budget, message } = await req.json()

    // Check for required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Enhanced email template with all form fields
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request From ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <header style="background-color: #282c45; padding: 20px; text-align: center;">
          <h1 style="font-size: 24px; color: #ffffff; margin: 0;">New Contact Request</h1>
        </header>
        <div style="padding: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Industry:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${industry || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || "Not specified"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h2 style="font-size: 18px; color: #333; margin-bottom: 10px;">Message:</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #333;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        <footer style="background-color: #f5f5f5; padding: 15px; text-align: center;">
          <p style="font-size: 14px; color: #999; margin: 0;">&copy; ${new Date().getFullYear()} Geniusee. All rights reserved.</p>
        </footer>
      </div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      return NextResponse.json(
        {
          success: true,
          message: "Email sent successfully",
        },
        { status: 200 },
      )
    } catch (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (e) {
    console.error("Unexpected error:", e)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 },
    )
  }
}
