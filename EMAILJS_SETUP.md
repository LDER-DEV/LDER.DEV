# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## 📧 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 🔧 Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Click **Create Service**
6. Copy your **Service ID** (looks like: `service_xxxxxxx`)

## 📝 Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   To: Your Email
   Subject: New Portfolio Contact from {{from_name}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```
4. Click **Save**
5. Copy your **Template ID** (looks like: `template_xxxxxxx`)

## 🔑 Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxx`)
3. Copy it

## 💻 Step 5: Update Your Environment Variables

1. Your credentials are already in `.env.local` file
2. To update them, edit `.env.local` and change:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx     # Your Service ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx   # Your Template ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx        # Your Public Key
```

**Note:** The `.env.local` file is automatically ignored by git (safe for your credentials)

## ✅ Step 6: Restart and Test

1. **Stop your dev server** (if running) with `Ctrl+C`
2. **Restart it** with: `npm run dev`
   - This loads the new environment variables
3. Fill out the contact form on your site
4. Click "Send Message"
5. Check your email inbox!

## 🎯 Features Included

- ✅ Form validation
- ✅ Loading state with spinner
- ✅ Success message (green)
- ✅ Error message (red)
- ✅ Form reset after successful submission
- ✅ Disabled inputs during submission
- ✅ Beautiful animations

## 📊 Free Tier Limits

EmailJS free tier includes:
- **200 emails/month**
- **2 email services**
- **2 email templates**

This is perfect for a portfolio site!

## 🆘 Troubleshooting

**Issue**: Emails not sending
- ✅ Check that all IDs are correct
- ✅ Verify email service is connected
- ✅ Check browser console for errors
- ✅ Make sure your EmailJS account is verified

**Issue**: Emails going to spam
- ✅ Configure SPF/DKIM records (EmailJS provides instructions)
- ✅ Use a professional email address
- ✅ Ask recipients to whitelist your email

## 🔒 Security Note

Your EmailJS Public Key is safe to expose in client-side code - it's designed for this purpose!

---

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)

