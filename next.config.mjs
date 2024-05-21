/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
        NEXT_APP_URL: process.env.NEXT_APP_URL,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
