import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check for spam (basic check)
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message is too short' },
        { status: 400 }
      )
    }

    // Send email to admin
    // Note: Resend free tier only allows sending to verified email addresses
    // For testing: use the account owner's email (htwebsitesolution@gmail.com)
    // For production: verify your domain at resend.com/domains
    const recipientEmail = process.env.CONTACT_EMAIL || 'htwebsitesolution@gmail.com'
    
    console.log('Attempting to send email...')
    console.log('API Key present:', !!process.env.RESEND_API_KEY)
    console.log('To email:', recipientEmail)
    console.log('Note: Using verified email for testing. For production, verify your domain at resend.com/domains')
    
    const { data, error } = await resend.emails.send({
      from: 'PharmacodeCare Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0e8e9d;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the PharmacodeCare website contact form.</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      // Return more detailed error in development
      const errorMessage = process.env.NODE_ENV === 'development' 
        ? `Failed to send email: ${error.message || JSON.stringify(error)}`
        : 'Failed to send email. Please try again later.'
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      )
    }

    // Send confirmation email to user (optional)
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await resend.emails.send({
        from: 'PharmacodeCare <onboarding@resend.dev>', // Update this with your verified domain
        to: [email],
        subject: 'Thank you for contacting PharmacodeCare',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0e8e9d;">Thank you for contacting PharmacodeCare</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>If you have an urgent enquiry, please call us on <strong>07930 180481</strong> (Mon-Fri: 9am-6pm).</p>
            <p>Best regards,<br>The PharmacodeCare Team</p>
          </div>
        `,
      })
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
