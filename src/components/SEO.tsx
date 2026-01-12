import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title, 
  description, 
  image = '/hero_banner.jpg', 
}: SEOProps) {
  const siteUrl = 'https://dailychoice.com'; // Placeholder
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Set Title
    document.title = `${title} | DailyChoice`;

    // Helper to set meta tags
    const setMetaTag = (selector: string, attribute: string, value: string, keyAttribute: string = 'name') => {
      let element = document.querySelector(`meta[${keyAttribute}="${selector}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(keyAttribute, selector);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Standard
    setMetaTag('description', 'content', description);

    // Open Graph
    setMetaTag('og:title', 'content', title, 'property');
    setMetaTag('og:description', 'content', description, 'property');
    setMetaTag('og:image', 'content', imageUrl, 'property');

    // Twitter
    setMetaTag('twitter:title', 'content', title, 'property');
    setMetaTag('twitter:description', 'content', description, 'property');
    setMetaTag('twitter:image', 'content', imageUrl, 'property');

  }, [title, description, imageUrl]);

  return null;
}
