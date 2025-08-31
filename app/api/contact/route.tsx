import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Must be a verified domain in Resend
      to: ["penaflor.lance11@gmail.com"], // Your email address
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      // Optional: Add a reply-to header so you can reply directly to the sender
      replyTo: email,
    })

    if (error) {
      console.error("[Resend] Error sending email:", error)
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    console.log("[Resend] Email sent successfully:", data)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("[API] Error processing request:", error)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}