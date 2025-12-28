// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,

  // CRITICAL CHANGE: This moves the site to "/formation"
  basePath: '/formation', 

  // Pages can't run image optimization
  images: { unoptimized: true },

  // Keeping your existing tolerances (important so the build doesn't fail)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
