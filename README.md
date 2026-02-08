# PharmacodeCare Website

A modern, responsive website for PharmacodeCare - a quality healthcare solutions provider.

## Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **SEO Friendly**: Optimized for search engines
- **Fast Performance**: Built with Next.js for optimal performance
- **Accessible**: Follows web accessibility best practices

## Pages

- **Home**: Welcome page with hero slider, services overview, and key information
- **About**: Detailed information about the organization, mission, and team
- **Services**: Comprehensive list of healthcare services offered
- **Contact Us**: Contact form and contact information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your Resend API key
# Get your API key from https://resend.com/api-keys
```

Required environment variables:
- `RESEND_API_KEY` - Your Resend API key for sending emails
- `CONTACT_EMAIL` - Email address where contact form submissions will be sent
  - **Important**: Resend's free tier only allows sending to verified email addresses
  - For testing: Use your Resend account email (e.g., htwebsitesolution@gmail.com)
  - For production: Verify your domain at https://resend.com/domains, then use your domain email (e.g., admin@pharmacodecare.co.uk)
- `SEND_CONFIRMATION_EMAIL` - Set to "true" to send confirmation emails to users (optional, default: false)

### Resend Domain Verification (For Production)

To send emails to any recipient (not just verified emails), you need to:

1. Go to https://resend.com/domains
2. Add and verify your domain (e.g., pharmacodecare.co.uk)
3. Add DNS records provided by Resend to your domain's DNS settings
4. Once verified, update `app/api/contact/route.ts`:
   - Change `from: 'PharmacodeCare Contact <onboarding@resend.dev>'` 
   - To: `from: 'PharmacodeCare Contact <noreply@pharmacodecare.co.uk>'`
5. Update `CONTACT_EMAIL` in `.env.local` to your production email

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Contact Information

Edit the following files to update contact information:

- `components/Header.tsx` - Top bar contact info
- `components/Footer.tsx` - Footer contact info
- `app/contact-us/page.tsx` - Contact page details

### Update Colors

Edit `tailwind.config.js` to customize the color scheme.

### Add Your Content

Replace placeholder content in:

- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services page content

## Technology Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## License

Copyright 2025 © PharmacodeCare. All Rights Reserved.
