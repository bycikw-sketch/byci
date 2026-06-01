// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export const ALL_PROGRAMS_QUERY = `
  *[_type == "program"] | order(order asc) {
    "id": id.current,
    titleEn, titleAr,
    descriptionEn, descriptionAr,
    category, level,
    duration, durationAr,
    format, formatAr,
    overviewEn, overviewAr,
    outcomesEn, outcomesAr,
    "modulesEn": modulesEn[]{ "title": titleEn, topics },
    "modulesAr": modulesAr[]{ "title": titleAr, topics },
    "instructorEn": instructorEn{ name, bio },
    "instructorAr": instructorAr{ name, bio },
    certificationEn, certificationAr,
    "faqEn": faqEn[]{ "q": qEn, "a": aEn },
    "faqAr": faqAr[]{ "q": qAr, "a": aAr },
    icon
  }
`;

export const PROGRAM_BY_ID_QUERY = `
  *[_type == "program" && id.current == $id][0] {
    "id": id.current,
    titleEn, titleAr,
    descriptionEn, descriptionAr,
    category, level,
    duration, durationAr,
    format, formatAr,
    overviewEn, overviewAr,
    outcomesEn, outcomesAr,
    "modulesEn": modulesEn[]{ "title": titleEn, topics },
    "modulesAr": modulesAr[]{ "title": titleAr, topics },
    "instructorEn": instructorEn{ name, bio },
    "instructorAr": instructorAr{ name, bio },
    certificationEn, certificationAr,
    "faqEn": faqEn[]{ "q": qEn, "a": aEn },
    "faqAr": faqAr[]{ "q": qAr, "a": aAr },
    icon
  }
`;

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export const ALL_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(date desc) {
    "id": id.current,
    titleEn, titleAr,
    excerptEn, excerptAr,
    contentEn, contentAr,
    category, author,
    authorRoleEn, authorRoleAr,
    date, readTimeEn, readTimeAr,
    icon
  }
`;

export const BLOG_POST_BY_ID_QUERY = `
  *[_type == "blogPost" && id.current == $id][0] {
    "id": id.current,
    titleEn, titleAr,
    excerptEn, excerptAr,
    contentEn, contentAr,
    category, author,
    authorRoleEn, authorRoleAr,
    date, readTimeEn, readTimeAr,
    icon
  }
`;

// ---------------------------------------------------------------------------
// Homepage Settings
// ---------------------------------------------------------------------------

export const HOMEPAGE_SETTINGS_QUERY = `
  *[_type == "homepageSettings" && _id == "homepageSettings"][0] {
    heroSlides[]{
      headlineEn, headlineAr,
      subheadlineEn, subheadlineAr,
      ctaEn, ctaAr,
      secondaryCtaEn, secondaryCtaAr
    },
    stats[]{ value, labelEn, labelAr },
    focusAreas[]{ titleEn, titleAr, descriptionEn, descriptionAr },
    whyPillars[]{ titleEn, titleAr, descriptionEn, descriptionAr },
    testimonials[]{ nameEn, nameAr, roleEn, roleAr, textEn, textAr }
  }
`;

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    phone, email,
    addressEn, addressAr,
    whatsappUrl,
    linkedinUrl, twitterUrl, instagramUrl,
    footerTaglineEn, footerTaglineAr
  }
`;
