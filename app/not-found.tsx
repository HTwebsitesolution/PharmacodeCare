import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-600"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-500 px-8 py-3 text-lg font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            Contact Us
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary-600 transition">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary-600 transition">
            About
          </Link>
          <Link href="/contact-us" className="text-gray-600 hover:text-primary-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
