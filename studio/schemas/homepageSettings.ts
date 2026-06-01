import { defineType, defineField, defineArrayMember } from 'sanity';

export const homepageSettings = defineType({
  name: 'homepageSettings',
  title: 'Homepage Settings',
  type: 'document',
  // Prevent creating or deleting — singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroSlides',
      type: 'array',
      title: 'Hero Slides',
      of: [defineArrayMember({ type: 'heroSlide' })],
      validation: (R) => R.min(1).max(6),
    }),
    defineField({
      name: 'stats',
      type: 'array',
      title: 'Stats Bar',
      description: 'Key metrics shown below the hero (e.g. 500+ Graduates)',
      of: [defineArrayMember({ type: 'statItem' })],
    }),
    defineField({
      name: 'focusAreas',
      type: 'array',
      title: 'Focus Areas',
      of: [defineArrayMember({ type: 'focusArea' })],
      validation: (R) => R.length(4),
    }),
    defineField({
      name: 'whyPillars',
      type: 'array',
      title: 'Why BYCI Pillars',
      of: [defineArrayMember({ type: 'whyPillar' })],
      validation: (R) => R.length(4),
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [defineArrayMember({ type: 'testimonialItem' })],
    }),
  ],
  preview: { prepare: () => ({ title: 'Homepage Settings' }) },
});
