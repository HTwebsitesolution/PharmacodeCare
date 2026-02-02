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

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

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
