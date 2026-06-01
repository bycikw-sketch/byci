import { defineType, defineField } from 'sanity';

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({ name: 'value', type: 'string', title: 'Value', description: 'e.g. 500+', validation: (R) => R.required() }),
    defineField({ name: 'labelEn', type: 'string', title: 'Label (EN)', validation: (R) => R.required() }),
    defineField({ name: 'labelAr', type: 'string', title: 'Label (AR)', validation: (R) => R.required() }),
  ],
  preview: { select: { title: 'value', subtitle: 'labelEn' } },
});
