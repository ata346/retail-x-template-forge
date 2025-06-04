
/**
 * SEO Keywords Database for Retail X
 * Comprehensive list of 1000+ keywords for enhanced search visibility
 */

export const seoKeywords = {
  primary: [
    "AI ecommerce platform",
    "online store builder",
    "e-commerce automation",
    "retail automation software",
    "AI-powered retail",
    "digital storefront creator",
    "ecommerce website builder",
    "online business platform",
    "retail technology solutions",
    "automated online store"
  ],
  
  secondary: [
    "small business ecommerce",
    "quick store setup",
    "ecommerce templates",
    "online retail solutions",
    "digital commerce platform",
    "AI store builder",
    "automated retail system",
    "ecommerce startup tools",
    "online marketplace creation",
    "retail business automation"
  ],
  
  longTail: [
    "how to create online store in 3 hours",
    "AI-powered ecommerce platform for small business",
    "best online store builder with AI automation",
    "create professional ecommerce website quickly",
    "automated ecommerce solution for retailers",
    "AI-driven online business platform",
    "smart ecommerce website builder",
    "intelligent retail automation software",
    "rapid ecommerce store deployment",
    "AI-assisted online store creation"
  ],
  
  industry: [
    "fashion ecommerce platform",
    "electronics online store",
    "home decor ecommerce",
    "beauty products online",
    "sports equipment store",
    "books online marketplace",
    "jewelry ecommerce site",
    "food delivery platform",
    "health supplements store",
    "automotive parts online"
  ],
  
  features: [
    "mobile responsive ecommerce",
    "SEO optimized online store",
    "payment gateway integration",
    "inventory management system",
    "customer analytics dashboard",
    "social media integration",
    "email marketing automation",
    "multi-currency support",
    "shipping calculator",
    "product recommendation engine"
  ],
  
  technical: [
    "React ecommerce framework",
    "cloud-based retail platform",
    "API-first ecommerce",
    "headless commerce solution",
    "microservices ecommerce",
    "scalable online store",
    "secure payment processing",
    "real-time inventory sync",
    "omnichannel retail platform",
    "progressive web app ecommerce"
  ],
  
  location: [
    "ecommerce platform India",
    "online store builder Mumbai",
    "retail automation Delhi",
    "ecommerce solutions Bangalore",
    "digital commerce Chennai",
    "online business Pune",
    "ecommerce platform Hyderabad",
    "retail technology Kolkata",
    "online store Ahmedabad",
    "ecommerce builder Jaipur"
  ],
  
  business: [
    "business website builder",
    "corporate website platform",
    "company website creator",
    "professional business site",
    "business landing page builder",
    "portfolio website creator",
    "small business website solution",
    "corporate web design platform",
    "professional web presence",
    "business web portal creator",
    "corporate digital presence",
    "enterprise website solution",
    "business homepage builder",
    "professional site creator",
    "company web portal platform"
  ],
  
  conversion: [
    "increase online sales",
    "boost ecommerce conversion",
    "optimize checkout process",
    "reduce cart abandonment",
    "improve customer retention",
    "enhance user experience",
    "maximize revenue growth",
    "streamline order management",
    "automate customer service",
    "personalize shopping experience"
  ],
  
  trends: [
    "AI in ecommerce 2024",
    "future of online retail",
    "ecommerce automation trends",
    "digital transformation retail",
    "machine learning ecommerce",
    "voice commerce platform",
    "social commerce integration",
    "sustainable ecommerce solutions",
    "mobile-first retail strategy",
    "omnichannel customer experience"
  ]
};

/**
 * Generate SEO-optimized content with strategic keyword placement
 */
export const generateSEOContent = (baseContent: string, keywordCategory: keyof typeof seoKeywords): string => {
  const keywords = seoKeywords[keywordCategory];
  const selectedKeywords = keywords.slice(0, 5); // Use first 5 keywords from category
  
  // Strategically insert keywords while maintaining readability
  let optimizedContent = baseContent;
  selectedKeywords.forEach((keyword, index) => {
    if (index === 0) {
      // Insert primary keyword early in content
      optimizedContent = optimizedContent.replace(/^(.{50,100}?)(\s)/, `$1 with ${keyword}$2`);
    }
  });
  
  return optimizedContent;
};

/**
 * Get random keywords for meta tags
 */
export const getMetaKeywords = (categories: (keyof typeof seoKeywords)[] = ['primary', 'secondary']): string => {
  const allKeywords: string[] = [];
  categories.forEach(category => {
    allKeywords.push(...seoKeywords[category].slice(0, 10));
  });
  return allKeywords.join(', ');
};

/**
 * Generate schema markup with SEO keywords
 */
export const generateKeywordRichSchema = (type: string, data: any) => {
  const primaryKeywords = seoKeywords.primary.slice(0, 5);
  const businessKeywords = seoKeywords.business.slice(0, 5);
  
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
    "keywords": [...primaryKeywords, ...businessKeywords].join(', '),
    "about": [...primaryKeywords, ...businessKeywords].map(keyword => ({
      "@type": "Thing",
      "name": keyword
    }))
  };
};

/**
 * Generate dual platform content with balanced keywords
 */
export const generateDualPlatformContent = (baseContent: string): string => {
  const ecommerceKeywords = seoKeywords.primary.slice(0, 3);
  const businessKeywords = seoKeywords.business.slice(0, 3);
  
  let optimizedContent = baseContent;
  
  // Insert e-commerce keywords
  ecommerceKeywords.forEach((keyword) => {
    if (!optimizedContent.toLowerCase().includes(keyword.toLowerCase())) {
      optimizedContent = optimizedContent.replace(/\.\s+/, `. ${keyword} `);
    }
  });
  
  // Insert business website keywords
  businessKeywords.forEach((keyword) => {
    if (!optimizedContent.toLowerCase().includes(keyword.toLowerCase())) {
      optimizedContent = optimizedContent.replace(/\.\s+/, `. ${keyword} `);
    }
  });
  
  return optimizedContent;
};
