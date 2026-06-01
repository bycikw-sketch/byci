import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

export const SITE_URL = 'https://byciedu.com';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'course';
  imageUrl?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEO = ({
  title,
  description,
  canonicalUrl = SITE_URL,
  type = 'website',
  imageUrl = `${SITE_URL}/logo.png`,
  jsonLd,
}: SEOProps) => {
  const { lang, isRTL } = useLanguage();

  const siteName = 'BYCI - Build Your Career Institute';
  const fullTitle = `${title} | ${siteName}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Build Your Career Institute',
    alternateName: ['BYCI', 'Build Your Career Institute Kuwait'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Professional development programs, certifications, and corporate training across Kuwait, GCC, and India.',
    email: 'info@byciedu.com',
    telephone: '+965 41103254',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuwait City',
      addressCountry: 'KW',
    },
    areaServed: ['KW', 'SA', 'AE', 'QA', 'BH', 'OM', 'IN'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: siteName,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: ['en-KW', 'ar-KW'],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: fullTitle,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: lang === 'en' ? 'en-KW' : 'ar-KW',
  };

  const structuredData = [
    orgSchema,
    websiteSchema,
    pageSchema,
    ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
  ];

  return (
    <Helmet htmlAttributes={{ lang, dir: isRTL ? 'rtl' : 'ltr' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <link rel="alternate" hrefLang="en-KW" href={`${canonicalUrl}?lang=en`} />
      <link rel="alternate" hrefLang="ar-KW" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="ar-SA" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="ar-AE" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
