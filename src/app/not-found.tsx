import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-32 px-6">
      <div className="text-center">
        <h1 className="font-display text-navy text-7xl font-bold">404</h1>
        <p className="text-text-muted mt-4 text-lg">Page not found.</p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-4 bg-beaver-blue text-white rounded-xl font-medium hover:bg-navy transition-colors text-sm"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
