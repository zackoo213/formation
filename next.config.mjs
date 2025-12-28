/** @type {import('next').NextConfig} */
const nextConfig = {
  // On garde tes tolérances aux erreurs pour que le build passe
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  // On retire 'output: export', 'basePath', et 'unoptimized' 
  // car Vercel gère tout ça bien mieux automatiquement.
};

export default nextConfig;
