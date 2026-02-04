'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6 text-sm">
              <a href="tel:07930180481" className="hover:text-primary-200 transition flex items-center gap-2">
                <span>📞</span>
                <span>07930 180481</span>
              </a>
              <span className="text-primary-200">|</span>
              <span>Mon-Fri: 9am-6pm</span>
              <span className="text-primary-200">|</span>
              <span>📍 Croydon, CR0 3AA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm border border-gray-200" />
                <div className="relative p-2">
                  <Image
                    src="/media/Pharmacode%20Logo%20-updated.png"
                    alt="PharmacodeCare logo"
                    width={73}
                    height={73}
                    priority
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 block group-hover:text-primary-600 transition">
                  PharmacodeCare
                </span>
                <p className="text-sm text-gray-600 italic mt-1">You are Supported</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/areas-we-cover', label: 'Areas' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-flex items-center rounded-full border border-transparent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/areas-we-cover', label: 'Areas' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl border border-primary-100 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="block rounded-xl bg-primary-500 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-600"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
