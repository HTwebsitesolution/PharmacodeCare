import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pharmacode Care Limited - Supported Living, Outreach & Domiciliary Care',
  description:
    'In-house care and domiciliary support services for adults aged 18–65, helping people maintain independence, improve wellbeing, and remain safely in their own homes and communities.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Pharmacode Care Limited - Supported Living, Outreach & Domiciliary Care',
    description:
      'In-house care and domiciliary support services for adults aged 18–65, helping people maintain independence, improve wellbeing, and remain safely in their own homes and communities.',
    images: [
      {
        url: '/slider/Pharmacode hero image.png',
        width: 1200,
        height: 630,
        alt: 'Pharmacode Care Limited - Supported Living, Outreach & Domiciliary Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacode Care Limited - Supported Living, Outreach & Domiciliary Care',
    description:
      'In-house care and domiciliary support services for adults aged 18–65, helping people maintain independence, improve wellbeing, and remain safely in their own homes and communities.',
    images: ['/slider/Pharmacode hero image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
