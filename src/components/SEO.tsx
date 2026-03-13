import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'course';
  imageUrl?: string;
}

export const SEO = ({
  title,
  description,
  canonicalUrl = 'https://byci.com',
  type = 'website',
  imageUrl = 'https://storage.googleapis.com/gpt-engineer-file-uploads/YDUYK04gFrXftEN08NfumoXnF3H2/uploads/1770803537672-Untitled_(160_x_160_px).png',
}: SEOProps) => {
  const { lang, isRTL } = useLanguage();

  const siteName = lang === 'en' ? 'BYCI – Build Your Career Institute' : 'معهد بناء مسيرتك المهنية';
  const fullTitle = `${title} | ${siteName}`;

  // Organization Schema for AIO & Knowledge Panels
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Build Your Career Institute (BYCI)',
    alternateName: 'معهد بناء مسيرتك المهنية',
    url: 'https://byci.com',
    logo: imageUrl,
    description: 'Professional development programs, certifications, and corporate training across Kuwait, GCC & India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuwait City',
      addressCountry: 'KW',
    },
    areaServed: ['KW', 'SA', 'AE', 'QA', 'BH', 'OM', 'IN']
  };

  return (
    <Helmet htmlAttributes={{ lang, dir: isRTL ? 'rtl' : 'ltr' }}>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* GEO Hreflang - Crucial for regional targeting */}
      <link rel="alternate" hrefLang="en-KW" href={`${canonicalUrl}?lang=en`} />
      <link rel="alternate" hrefLang="ar-KW" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="ar-SA" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="ar-AE" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* OpenGraph / Social Media */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Component */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) for AIO */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
    </Helmet>
  );
};
