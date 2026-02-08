'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Critical Error</h1>
              <p className="text-lg text-gray-600 mb-8">
                A critical error occurred. Please refresh the page or contact support if the problem persists.
              </p>
            </div>

            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-600"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
