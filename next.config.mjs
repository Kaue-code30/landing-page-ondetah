/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['blog.uxgroup.com.br'],
    }
  }
  
  export default nextConfig
  