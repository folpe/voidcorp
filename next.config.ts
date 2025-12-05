import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

import { env } from "./env.mjs"

const withNextIntl = createNextIntlPlugin("./i18n.ts")

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  rewrites: async () => ({
    beforeFiles: [
      // PostHog proxy rewrites - must be in beforeFiles to work correctly
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ],
    afterFiles: [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ],
    fallback: [],
  }),
}

export default withNextIntl(env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config)
