/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove static export for client-side routing to work
  // output: 'export',
  trailingSlash: true,
  // Remove basePath for now - add it back if needed for your deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/jon-carreer' : '',
}

export default nextConfig