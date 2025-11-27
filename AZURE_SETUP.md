# Azure Configuration Required

Before the contact form will work in production, you need to add these environment variables in Azure:

## Steps:

1. Go to Azure Portal: https://portal.azure.com
2. Navigate to your Static Web App (blue-sea-055db1a0f)
3. Click on "Configuration" in the left menu
4. Under "Application settings", click "+ Add"
5. Add these four settings one by one:

### Settings to Add:

| Name | Value |
|------|-------|
| SMTP_HOST | smtp.gmail.com |
| SMTP_PORT | 587 |
| SMTP_USER | your-email@gmail.com |
| SMTP_PASS | your-gmail-app-password |

### Getting Gmail App Password:

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)"
5. Enter "Warlox Contact Form"
6. Click "Generate"
7. Copy the 16-character password (without spaces)
8. Use this as your SMTP_PASS value

### Alternative: Use a Different Email Service

If you prefer to use a different email service (like SendGrid, AWS SES, etc.), update the SMTP settings accordingly.

## After Configuration:

Once the environment variables are set in Azure, deploy the site:

```bash
swa deploy --env production
```

The contact form will then send emails to chad@warlox.org when users submit the form.
