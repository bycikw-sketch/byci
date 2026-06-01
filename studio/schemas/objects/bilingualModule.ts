import { defineType, defineField, defineArrayMember } from 'sanity';

export const bilingualModule = defineType({
  name: 'bilingualModule',
  title: 'Module',
  type: 'object',
  fields: [
    defineField({ name: 'titleEn', type: 'string', title: 'Title (EN)', validation: (R) => R.required() }),
    defineField({ name: 'titleAr', type: 'string', title: 'Title (AR)', validation: (R) => R.required() }),
    defineField({
      name: 'topics',
      type: 'array',
      title: 'Topics',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: { select: { title: 'titleEn' } },
});
