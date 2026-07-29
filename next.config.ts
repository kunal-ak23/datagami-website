import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      // Consolidate every route on the canonical www host. Keep the equivalent
      // Vercel domain setting on a permanent redirect as the edge-level source
      // of truth.
      {
        source: "/:path*",
        has: [{ type: "host", value: "datagami.in" }],
        destination: "https://www.datagami.in/:path*",
        permanent: true,
      },

      // Preserve authority and user journeys from the previous site structure.
      {
        source: "/ibm-ice",
        destination: "/services/education/ibm-ice",
        permanent: true,
      },
      {
        source: "/programs/ibm-ice",
        destination: "/services/education/ibm-ice",
        permanent: true,
      },
      {
        source: "/programs/finlearn",
        destination: "/services/education/finlearn",
        permanent: true,
      },
      {
        source: "/services/software/total-erp",
        destination: "/services/products/total-erp",
        permanent: true,
      },
      {
        source: "/services/software/sineap-lms",
        destination: "/services/products/edudron-lms",
        permanent: true,
      },
      {
        source: "/services/software/sineapp-lms",
        destination: "/services/products/edudron-lms",
        permanent: true,
      },
      {
        source: "/services/products/sineap-lms",
        destination: "/services/products/edudron-lms",
        permanent: true,
      },
      {
        source: "/services/products/sineapp-lms",
        destination: "/services/products/edudron-lms",
        permanent: true,
      },
      {
        source: "/services/it-hiring",
        destination: "/services/hiring/talent-acquisition",
        permanent: true,
      },
      {
        source: "/course/technical-support-engineer",
        destination: "/services/hiring/talent-acquisition",
        permanent: true,
      },
      {
        source: "/services/it",
        destination: "/services/software/enterprise-solutions",
        permanent: true,
      },
      {
        source: "/services/noc",
        destination: "/services/software/enterprise-solutions",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source:
          "/blog/leveraging-ai-in-higher-education-ethical-considerations-and-best-practices",
        destination: "/blog/leveraging-ai-higher-education-ethics",
        permanent: true,
      },
      {
        source:
          "/blog/bridging-the-gap-fostering-industry-academia-partnerships",
        destination: "/blog/bridging-gap-industry-academia-partnerships",
        permanent: true,
      },
      {
        source:
          "/blog/boosting-student-employability-the-role-of-industry-collaboration",
        destination:
          "/blog/boosting-student-employability-industry-collaboration",
        permanent: true,
      },
    ]
  },
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
