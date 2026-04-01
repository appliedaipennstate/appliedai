import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/',
          destination: '/workspace/',
          permanent: false,
        },
      ]
    }
    return []
  },
}

export default nextConfig
