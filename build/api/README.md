# Warlox Contact Form API Setup

## Environment Variables

You need to configure the following environment variables for the email functionality:

### Local Development
Copy `local.settings.json.example` to `local.settings.json` and fill in your SMTP credentials:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SMTP_HOST": "smtp.gmail.com",
    "SMTP_PORT": "587",
    "SMTP_USER": "your-email@gmail.com",
    "SMTP_PASS": "your-app-password"
  }
}
```

### Azure Production
In the Azure Portal, go to your Static Web App > Configuration and add these Application Settings:

- `SMTP_HOST`: smtp.gmail.com (or your SMTP server)
- `SMTP_PORT`: 587
- `SMTP_USER`: Your email address
- `SMTP_PASS`: Your email password or app-specific password

### Gmail Setup
If using Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS`

## Install Dependencies

```bash
cd api
npm install
```

## Test Locally

```bash
cd ..
swa start
```

The API will be available at `http://localhost:4280/api/contact`
