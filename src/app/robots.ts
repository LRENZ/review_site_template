import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://branddragon.net'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
