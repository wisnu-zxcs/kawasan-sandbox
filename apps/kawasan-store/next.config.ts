import { type NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: [
    "@repo/server",
    "@repo/ui"
  ]
}

export default nextConfig