import { defineType, defineField } from 'sanity';

export const focusArea = defineType({
  name: 'focusArea',
  title: 'Focus Area',
  type: 'object',
  fields: [
    defineField({ name: 'titleEn', type: 'string', title: 'Title (EN)', validation: (R) => R.required() }),
    defineField({ name: 'titleAr', type: 'string', title: 'Title (AR)', validation: (R) => R.required() }),
    defineField({ name: 'descriptionEn', type: 'text', title: 'Description (EN)', rows: 2 }),
    defineField({ name: 'descriptionAr', type: 'text', title: 'Description (AR)', rows: 2 }),
  ],
  preview: { select: { title: 'titleEn' } },
});
