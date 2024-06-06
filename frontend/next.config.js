/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    // API: "http://localhost:8000",
    // RESUME_URL:"https://res.cloudinary.com/dtxxylneb/raw/upload"
    API: process.env.API || "http://localhost:8000",
    RESUME_URL: process.env.RESUME_URL || 'https://res.cloudinary.com/dtxxylneb/raw/upload'
  }
}

module.exports = nextConfig
