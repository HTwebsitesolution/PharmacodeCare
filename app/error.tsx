'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
          <p className="text-lg text-gray-600 mb-4">
            We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
          </p>
          {error.message && (
            <p className="text-sm text-gray-500 mb-8 font-mono bg-gray-100 p-4 rounded-lg">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-600"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-500 px-8 py-3 text-lg font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="text-sm text-gray-600">
          <p>If the problem persists, please</p>
          <Link href="/contact-us" className="text-primary-600 hover:text-primary-700 font-semibold underline">
            contact our support team
          </Link>
        </div>
      </div>
    </div>
  )
}
