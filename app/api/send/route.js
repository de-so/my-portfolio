// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from:  'Souvik D.<portfolio.'+fromEmail+'>',
      to: ['souvik1103@gmail.com'],
      subject: subject,
      react: (
            <>
                <h1>Subject: {subject}</h1>
                <p>New message submitted by: {email}</p>
                <h2>Message:</h2>
                <p>{message}</p>
            </>
        ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
