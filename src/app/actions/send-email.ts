'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(_: unknown, formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!email) return { success: false, error: 'Email is required' };

  const html = ` <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
            background-color: #f8fafc;
            color: #334155;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 640px;
            margin: 40px auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            margin-bottom: 32px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f1f5f9;
        }
        .header h2 {
            margin: 0;
            color: #7c3aed;
            font-size: 24px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }
        .logo {
            color: #7c3aed;
            font-size: 28px;
        }
        .content {
            background-color: #f9fafb;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 32px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: 600;
            color: #475569;
            display: block;
            margin-bottom: 6px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            color: #1e293b;
            font-size: 16px;
            padding: 10px 12px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
        }
        .message {
            background-color: white;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #7c3aed;
            font-size: 15px;
            line-height: 1.7;
            color: #334155;
            margin-top: 8px;
        }
        .footer {
            text-align: center;
            font-size: 13px;
            color: #64748b;
            padding-top: 24px;
            border-top: 1px solid #f1f5f9;
        }
        .highlight {
            color: #7c3aed;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2><span class="logo">✉️</span> New Contact Submission</h2>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">Name</span>
                <div class="value">${name}</div>
            </div>
            
            <div class="field">
                <span class="label">Email</span>
                <div class="value">${email}</div>
            </div>
            
            <div class="field">
                <span class="label">Message</span>
                <div class="message">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            This message was sent via the <span class="highlight">BRDIGITECH x BLOQEN</span> contact form.
            <div style="margin-top: 8px;">⏱️ ${new Date().toLocaleString()}</div>
        </div>
    </div>
</body>
</html>`;

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tayyaba.khalil@gmail.com',
      subject: 'BRDIGITECH x BLOQEN',
      html,
    });

    await fetch(
      'https://script.google.com/macros/s/AKfycbzi4sGj8KdJZRsBxkAbIOiqU2iaQOHhjuMBjZnkgTBG9kAP9fRcgG2T5zVdnE6qSly_aw/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      }
    );

    return { success: true, id: response.data?.id };
  } catch {
    return { success: false, error: 'Email failed to send' };
  }
}
