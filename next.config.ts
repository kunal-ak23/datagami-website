import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"],
  webpack: (config, { isServer }) => {
    // Handle node: protocol imports used by Prisma 7 generated files
    config.plugins = config.plugins || []
    config.plugins.push({
      apply(compiler: any) {
        compiler.hooks.normalModuleFactory.tap('NodeProtocolPlugin', (nmf: any) => {
          nmf.hooks.beforeResolve.tap('NodeProtocolPlugin', (result: any) => {
            if (result.request && result.request.startsWith('node:')) {
              result.request = result.request.slice(5)
            }
          })
        })
      },
    })

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        perf_hooks: false,
        os: false,
        path: false,
        crypto: false,
      }
    }

    return config
  },
};

export default nextConfig;
