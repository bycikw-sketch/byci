import { defineType, defineField } from 'sanity';

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'object',
  fields: [
    defineField({ name: 'headlineEn', type: 'string', title: 'Headline (EN)', validation: (R) => R.required() }),
    defineField({ name: 'headlineAr', type: 'string', title: 'Headline (AR)', validation: (R) => R.required() }),
    defineField({ name: 'subheadlineEn', type: 'text', title: 'Subheadline (EN)', rows: 2 }),
    defineField({ name: 'subheadlineAr', type: 'text', title: 'Subheadline (AR)', rows: 2 }),
    defineField({ name: 'ctaEn', type: 'string', title: 'Primary CTA (EN)' }),
    defineField({ name: 'ctaAr', type: 'string', title: 'Primary CTA (AR)' }),
    defineField({ name: 'secondaryCtaEn', type: 'string', title: 'Secondary CTA (EN)' }),
    defineField({ name: 'secondaryCtaAr', type: 'string', title: 'Secondary CTA (AR)' }),
  ],
  preview: { select: { title: 'headlineEn' } },
});
