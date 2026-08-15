import { MetadataRoute } from 'next'
import { BASE_PATH, SITE_URL } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: `${BASE_PATH}/`,
      disallow: [
        `${BASE_PATH}/api/`,
        `${BASE_PATH}/private/`,
        `${BASE_PATH}/_next/`,
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
