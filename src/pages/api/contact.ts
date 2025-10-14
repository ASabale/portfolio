import { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Here you would typically:
    // 1. Send an email to yourself using a service like SendGrid, Nodemailer, etc.
    // 2. Save the message to a database
    // 3. Send a confirmation email to the sender
    
    // For now, we'll just log the message and return success
    console.log('New contact message received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   from: email,
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    // });

    // TODO: Implement database storage
    // Example with a database:
    // await db.contactMessages.create({
    //   data: { name, email, subject, message, createdAt: new Date() }
    // });

    res.status(200).json({ 
      message: 'Message sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      success: false 
    });
  }
}

