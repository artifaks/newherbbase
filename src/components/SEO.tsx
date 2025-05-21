
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  noIndex?: boolean;
  languageAlternates?: {
    hrefLang: string;
    href: string;
  }[];
  breadcrumbs?: {
    name: string;
    url: string;
  }[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Herbal Wisdom - Medicinal Herbs & Natural Remedies',
  description = 'Your comprehensive resource for medicinal herbs, natural remedies, and herbal wellness products. Discover the healing power of herbs.',
  imageUrl = 'https://herbalwisdom.com/og-image.png',
  url = 'https://herbalwisdom.com',
  type = 'website',
  keywords = ['herbs', 'medicinal herbs', 'herbal remedies', 'natural remedies', 'herbal teas', 'herbalism', 'herbal wisdom'],
  author = 'Herbal Wisdom',
  publishedTime,
  modifiedTime,
  canonical,
  noIndex = false,
  languageAlternates = [],
  breadcrumbs = []
}) => {
  // Format the title to ensure it has the brand name
  const formattedTitle = title.includes('Herbal Wisdom') ? title : `${title} | Herbal Wisdom`;

  // Create structured data for better search engine understanding
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : type === 'product' ? 'Product' : 'WebSite',
    name: formattedTitle,
    headline: formattedTitle,
    description: description,
    url: canonical || url,
    image: imageUrl,
    ...(type === 'article' && {
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        '@type': 'Person',
        name: author
      }
    }),
    publisher: {
      '@type': 'Organization',
      name: 'Herbal Wisdom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://herbalwisdom.com/logo.png'
      }
    }
  };

  // Create breadcrumb structured data if breadcrumbs are provided
  const breadcrumbsStructuredData = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots directives */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* OpenGraph meta tags for social sharing */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical || url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Herbal Wisdom" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@herbalwisdom" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url} />
      
      {/* Language alternates for multilingual sites */}
      {languageAlternates.map((alternate) => (
        <link 
          key={alternate.hrefLang}
          rel="alternate" 
          hrefLang={alternate.hrefLang} 
          href={alternate.href} 
        />
      ))}
      
      {/* Structured data for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Breadcrumbs structured data */}
      {breadcrumbsStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsStructuredData)}
        </script>
      )}
      
      {/* Favicon */}
      <link rel="icon" href="/lovable-uploads/a9ee8983-8edf-4672-8c04-7ee7bb04c52f.png" />
    </Helmet>
  );
};

export default SEO;
