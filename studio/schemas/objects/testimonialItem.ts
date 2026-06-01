import { defineType, defineField } from 'sanity';

export const testimonialItem = defineType({
  name: 'testimonialItem',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({ name: 'nameEn', type: 'string', title: 'Name (EN)', validation: (R) => R.required() }),
    defineField({ name: 'nameAr', type: 'string', title: 'Name (AR)' }),
    defineField({ name: 'roleEn', type: 'string', title: 'Role (EN)' }),
    defineField({ name: 'roleAr', type: 'string', title: 'Role (AR)' }),
    defineField({ name: 'textEn', type: 'text', title: 'Quote (EN)', rows: 3, validation: (R) => R.required() }),
    defineField({ name: 'textAr', type: 'text', title: 'Quote (AR)', rows: 3 }),
  ],
  preview: { select: { title: 'nameEn', subtitle: 'roleEn' } },
});
