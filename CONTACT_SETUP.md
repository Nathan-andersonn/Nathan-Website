# Contact Form Setup Instructions

Your contact form is now set up to work with EmailJS, a free service that allows you to send emails directly from your website without a backend server.

## Setup Steps:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Set Up Email Service
1. After logging in, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this)

### 3. Create an Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}} - New message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)
3. Copy it

### 5. Update Your Contact Component
Open `src/components/Contact.jsx` and replace these values around line 32:

```javascript
service_id: 'YOUR_SERVICE_ID',     // Replace with your Service ID
template_id: 'YOUR_TEMPLATE_ID',   // Replace with your Template ID
user_id: 'YOUR_PUBLIC_KEY',        // Replace with your Public Key
```

### 6. Test Your Form
1. Save the file
2. Fill out the contact form on your website
3. Click "Send Message"
4. Check your email inbox for the message

## Features Added:
✅ Async email sending with EmailJS
✅ Loading state while sending
✅ Success notification
✅ Error handling
✅ Form reset after successful submission
✅ Disabled button during submission
✅ Auto-dismissing notifications (5 seconds)

## EmailJS Free Tier Limits:
- 200 emails per month
- Rate limit: 50 emails per day

## Alternative: Direct Email Link
If you prefer a simpler approach without EmailJS setup, you can use a mailto link instead. Let me know if you want this simpler option!

## Troubleshooting:
- Make sure all three IDs (Service ID, Template ID, Public Key) are correct
- Check the EmailJS dashboard for any email delivery issues
- Verify your email service is properly connected
- Check browser console for error messages
