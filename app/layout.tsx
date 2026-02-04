import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PharmacodeCare - Quality Healthcare Solutions',
  description: 'PharmacodeCare - You are Supported. Residential care and domiciliary support services enabling individuals to maintain independence, improve wellbeing, and remain safely in their own homes.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'PharmacodeCare - Quality Healthcare Solutions',
    description: 'PharmacodeCare - You are Supported. Residential care and domiciliary support services enabling individuals to maintain independence, improve wellbeing, and remain safely in their own homes.',
    images: [
      {
        url: '/slider/Pharmacode hero image.png',
        width: 1200,
        height: 630,
        alt: 'PharmacodeCare - Quality Healthcare Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PharmacodeCare - Quality Healthcare Solutions',
    description: 'PharmacodeCare - You are Supported. Residential care and domiciliary support services enabling individuals to maintain independence, improve wellbeing, and remain safely in their own homes.',
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
