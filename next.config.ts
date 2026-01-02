import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smlfgzlvazykfcgepumc.supabase.co',
        pathname: '/storage/v1/**',
      },
    ],
  },
}

export default withPayload(nextConfig)
