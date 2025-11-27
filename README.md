# Warlox Static Website

A minimalistic, professional static website for warlox.org - a cybersecurity focused tech startup.

## Design

- **Theme**: Minimalistic white background with black and red accents
- **Style**: Professional tech startup / cybersecurity focused
- **Responsive**: Mobile-first design that works on all devices

## Pages

- **Home** (`index.html`) - Main landing page with hero, features, and stats
- **About** (`about.html`) - Company mission, values, and team
- **Services** (`services.html`) - Cybersecurity service offerings
- **Contact** (`contact.html`) - Contact form and information

## Tech Stack

- Pure HTML5, CSS3, and JavaScript
- No build process required
- Optimized for Azure Static Web Apps

## Deployment to Azure Static Web Apps

### Option 1: GitHub Actions (Recommended)

1. Create an Azure Static Web Apps resource in the Azure Portal
2. Connect to this GitHub repository
3. Azure will automatically create a GitHub Actions workflow
4. The site will deploy on every push to main

### Option 2: Manual Deployment

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Login to Azure
az login

# Deploy
swa deploy --deployment-token <YOUR_DEPLOYMENT_TOKEN>
```

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8080
```

## Project Structure

```
warlox_static/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── staticwebapp.config.json # Azure Static Web Apps config
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── images/                 # Image assets (add your own)
```

## Customization

- **Colors**: Edit CSS variables in `css/style.css`
- **Content**: Edit HTML files directly
- **Logo**: Replace "WARLOX" text in navbar with your logo image

## License

© 2024 Warlox. All rights reserved.
