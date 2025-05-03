
/**
 * SEO Utilities for Retail X
 * Helper functions to manage and optimize SEO across the platform
 */

/**
 * Sets the page title with proper formatting for SEO
 * @param title - The page-specific title
 * @param includeTagline - Whether to include the tagline
 */
export const setPageTitle = (title: string, includeTagline = true): void => {
  document.title = includeTagline 
    ? `${title} | Retail X - AI-Powered E-commerce Platform` 
    : title;
};

/**
 * Updates meta description tag content
 * @param description - The page-specific description
 */
export const setMetaDescription = (description: string): void => {
  const metaDescription = document.querySelector('meta[name="description"]');
  
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
};

/**
 * Creates and injects structured data for various page types
 * @param data - The structured data object to inject
 */
export const injectStructuredData = (data: object): void => {
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
 * Generates common structured data types
 */
export const structuredData = {
  /**
   * Creates Organization structured data
   */
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Retail X",
    "url": "https://retailx.io",
    "logo": "https://retailx.io/lovable-uploads/714d8f7b-2ee5-4ed2-9762-740270cbb8d4.png",
    "sameAs": [
      "https://twitter.com/retail_x",
      "https://www.linkedin.com/company/retail-x"
    ]
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
    "image": imageUrl
  }),
  
  /**
   * Creates Software Application structured data
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
    "description": "AI-Powered E-commerce Platform that helps businesses launch online stores in 3 hours",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    }
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
    }))
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
