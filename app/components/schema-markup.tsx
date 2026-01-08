import React from 'react';

interface SchemaMarkupProps {
  type: 'website' | 'organization' | 'product' | 'faq' | 'breadcrumb';
  data: any;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name,
          url: data.url,
          description: data.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${data.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name,
          url: data.url,
          logo: data.logo,
          description: data.description,
          sameAs: data.sameAs || [],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.phone,
            contactType: 'customer service',
            areaServed: 'NL',
            availableLanguage: ['English', 'Dutch'],
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'NL',
            addressRegion: data.region || 'Netherlands',
          },
        };

      case 'product':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.name,
          description: data.description,
          url: data.url,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          offers: {
            '@type': 'Offer',
            price: data.price || '0',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Hounder',
            },
          },
          aggregateRating: data.rating ? {
            '@type': 'AggregateRating',
            ratingValue: data.rating.value,
            reviewCount: data.rating.count,
          } : undefined,
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}

// Default schemas for common pages
export const defaultWebsiteSchema = {
  name: 'Hounder - AI-Powered Home Search Agent',
  url: 'https://hounder.ai',
  description: 'Hounder scans rental platforms 24/7 and automatically applies for viewings so you never miss the perfect apartment.',
};

export const defaultOrganizationSchema = {
  name: 'Hounder',
  url: 'https://hounder.ai',
  logo: 'https://hounder.ai/logo.png',
  description: 'AI-powered home search agent that monitors rental platforms and automatically applies for viewings.',
  phone: '+31-20-1234567',
  region: 'Netherlands',
  sameAs: [
    'https://www.facebook.com/hounderai',
    'https://www.twitter.com/hounderai',
    'https://www.linkedin.com/company/hounderai',
    'https://www.instagram.com/hounderai',
  ],
};

export const defaultProductSchema = {
  name: 'Hounder AI Home Search',
  description: 'AI-powered rental property search and application automation service',
  url: 'https://hounder.ai',
  price: '0',
  rating: {
    value: '4.8',
    count: '1250',
  },
};