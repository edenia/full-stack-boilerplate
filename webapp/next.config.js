/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  webpack: config => {
    config.resolve.fallback = { fs: false }

    return config
  },
  transpilePackages: ['@mui/system', '@mui/material', '@mui/icons-material'],
  modularizeImports: {
    '@mui/material/?(((\\w*)?/?)*)': {
      transform: '@mui/material/{{ matches.[1] }}/{{member}}'
    },
    '@mui/icons-material/?(((\\w*)?/?)*)': {
      transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    }
  }
}

module.exports = nextConfig
