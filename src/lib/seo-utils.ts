
/**
 * SEO Utilities for Retail X
 * Helper functions to manage and optimize SEO across the platform
 */

import { seoKeywords, getMetaKeywords } from './seo-keywords';

// Official Retail X social media and website links
export const officialLinks = {
  website: "https://www.retailx.site/",
  instagram: "https://www.instagram.com/retailx.site/",
  linkedin: "http://linkedin.com/company/retailx-site/",
  twitter: "https://twitter.com/retail_x",
  community: "https://www.facebook.com/share/g/12LSEquUXL7/"
};

/**
 * Sets the page title with proper formatting for SEO
 * @param title - The page-specific title
 * @param includeTagline - Whether to include the tagline
 */
export const setPageTitle = (title: string, includeTagline = true): void => {
  document.title = includeTagline 
    ? `${title} | Retail X - AI-Powered Website & E-commerce Platform` 
    : title;
};

/**
 * Updates meta description tag content with SEO keywords
 * @param description - The page-specific description
 * @param keywordCategory - Category of keywords to integrate
 */
export const setMetaDescription = (description: string, keywordCategory?: keyof typeof seoKeywords): void => {
  let optimizedDescription = description;
  
  if (keywordCategory) {
    const keywords = seoKeywords[keywordCategory].slice(0, 2);
    optimizedDescription = `${description} ${keywords.join(', ')} - Enhanced with AI technology.`;
  }
  
  const metaDescription = document.querySelector('meta[name="description"]');
  
  if (metaDescription) {
    metaDescription.setAttribute('content', optimizedDescription);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = optimizedDescription;
    document.head.appendChild(meta);
  }
};

/**
 * Adds meta keywords tag with SEO optimization
 */
export const setMetaKeywords = (categories: (keyof typeof seoKeywords)[] = ['primary', 'secondary']): void => {
  const keywords = getMetaKeywords(categories);
  
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = keywords;
    document.head.appendChild(meta);
  }
};

/**
 * Creates and injects structured data for various page types
 * @param data - The structured data object to inject
 */
export const injectStructuredData = (data: any): void => {
  // Remove any existing structured data with the same ID if present
  const existingScript = document.querySelector(`script[data-structured-id="${data['@type']}"]`);
  if (existingScript) {
    existingScript.remove();
  }
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  script.dataset.structuredId = data['@type'];
  document.head.appendChild(script);
};

/**
 * Generates common structured data types with SEO keywords
 */
export const structuredData = {
  /**
   * Creates Organization structured data with backlinks
   */
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Retail X",
    "url": officialLinks.website,
    "logo": "https://retailx.io/lovable-uploads/714d8f7b-2ee5-4ed2-9762-740270cbb8d4.png",
    "sameAs": [
      officialLinks.instagram,
      officialLinks.linkedin,
      officialLinks.twitter,
      officialLinks.community
    ],
    "keywords": [...seoKeywords.primary, ...seoKeywords.business].slice(0, 15).join(', '),
    "description": "AI-Powered Website Platform for creating business websites and e-commerce stores in 3 hours"
  }),
  
  /**
   * Creates Product structured data for a specific product
   */
  product: (name: string, description: string, price: string, imageUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "image": imageUrl,
    "keywords": [...seoKeywords.features, ...seoKeywords.business].slice(0, 15).join(', ')
  }),
  
  /**
   * Creates Software Application structured data with enhanced SEO
   */
  softwareApplication: () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Retail X",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "INR"
    },
    "description": "AI-Powered Website Platform that helps businesses create professional business websites and e-commerce stores in 3 hours",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "keywords": [...seoKeywords.primary, ...seoKeywords.technical, ...seoKeywords.business].slice(0, 20).join(', '),
    "sameAs": [
      officialLinks.website,
      officialLinks.instagram,
      officialLinks.linkedin,
      officialLinks.community
    ],
    "applicationSubCategory": ["E-commerce Platform", "Business Website Builder"]
  }),
  
  /**
   * Creates FAQ structured data
   */
  faq: (questions: Array<{question: string, answer: string}>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    })),
    "keywords": [...seoKeywords.longTail, ...seoKeywords.business].slice(0, 15).join(', ')
  }),

  /**
   * Creates WebSite structured data with search functionality
   */
  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Retail X",
    "url": officialLinks.website,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${officialLinks.website}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      officialLinks.instagram,
      officialLinks.linkedin,
      officialLinks.twitter,
      officialLinks.community
    ],
    "keywords": [...seoKeywords.primary, ...seoKeywords.business].slice(0, 15).join(', '),
    "description": "Create professional business websites and e-commerce stores with AI-powered automation"
  }),
  
  /**
   * Creates WebPage structured data for business website pages
   */
  webPage: (title: string, description: string, url: string, imageUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": imageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Retail X",
      "url": officialLinks.website
    },
    "keywords": [...seoKeywords.primary, ...seoKeywords.business].slice(0, 15).join(', ')
  }),
  
  /**
   * Creates Service structured data for business services
   */
  service: (name: string, description: string, provider: string = "Retail X") => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": officialLinks.website
    },
    "serviceType": "Website Development",
    "keywords": [...seoKeywords.business, ...seoKeywords.features].slice(0, 10).join(', ')
  })
};

/**
 * Creates canonical URL tag
 * @param url - The canonical URL to set
 */
export const setCanonicalUrl = (url: string): void => {
  // Remove any existing canonical tags
  const existing = document.querySelector('link[rel="canonical"]');
  if (existing) {
    existing.remove();
  }
  
  const link = document.createElement('link');
  link.rel = 'canonical';
  link.href = url;
  document.head.appendChild(link);
};

/**
 * Enhanced social media meta tags with community link
 */
export const setSocialMetaTags = (title: string, description: string, imageUrl: string, url: string): void => {
  const socialTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:site', content: '@retail_x' },
    // Add community-specific meta tags
    { property: 'article:author', content: 'Retail X Community' },
    { property: 'og:community', content: officialLinks.community }
  ];

  socialTags.forEach(tag => {
    let existingTag;
    if (tag.property) {
      existingTag = document.querySelector(`meta[property="${tag.property}"]`);
    } else {
      existingTag = document.querySelector(`meta[name="${tag.name}"]`);
    }

    if (existingTag) {
      existingTag.setAttribute('content', tag.content);
    } else {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name!);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    }
  });
};

/**
 * Optimize specific page for business website SEO
 */
export const optimizeForBusinessWebsite = (pageTitle: string, pageDescription: string): void => {
  setPageTitle(pageTitle);
  setMetaDescription(pageDescription, 'business');
  setMetaKeywords(['business', 'primary', 'features']);
};

/**
 * Optimize specific page for e-commerce website SEO
 */
export const optimizeForEcommerceWebsite = (pageTitle: string, pageDescription: string): void => {
  setPageTitle(pageTitle);
  setMetaDescription(pageDescription, 'primary');
  setMetaKeywords(['primary', 'features', 'conversion']);
};
