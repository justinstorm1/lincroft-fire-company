import type { NextConfig } from "next"

// Old lfc10.org paths, so existing links and bookmarks keep working.
const legacyPaths: Record<string, string> = {
  "/lfc-history": "/history",
  "/aparatus": "/history#apparatus",
  "/memory-lane": "/history",
  "/make-donation": "/donate",
  "/contact-us": "/contact",
  "/event": "/",
}

const nextConfig: NextConfig = {
  redirects() {
    return Object.entries(legacyPaths).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

export default nextConfig
