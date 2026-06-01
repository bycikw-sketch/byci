import { defineType, defineField } from 'sanity';

export const bilingualFaq = defineType({
  name: 'bilingualFaq',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({ name: 'qEn', type: 'string', title: 'Question (EN)', validation: (R) => R.required() }),
    defineField({ name: 'qAr', type: 'string', title: 'Question (AR)', validation: (R) => R.required() }),
    defineField({ name: 'aEn', type: 'text', title: 'Answer (EN)', rows: 3, validation: (R) => R.required() }),
    defineField({ name: 'aAr', type: 'text', title: 'Answer (AR)', rows: 3, validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'qEn' } },
});
