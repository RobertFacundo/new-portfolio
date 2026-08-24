'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  success: boolean
  error?: string
}

export const sendContactEmail = async (
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> => {
  const name = formData.get('name')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''
  const subject = formData.get('subject')?.toString() ?? ''
  const message = formData.get('message')?.toString() ?? ''

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['robertf.coder@gmail.com'],
      replyTo: email,
      subject,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    if (error) {
      return {
        success: false,
        error: error.message
      }
    }

    return {
      success: true
    }
  } catch {
    return {
      success: false,
      error: 'Something went wrong. Please try again.'
    }
  }
}
