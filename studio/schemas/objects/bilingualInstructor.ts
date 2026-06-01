import { defineType, defineField } from 'sanity';

export const bilingualInstructor = defineType({
  name: 'bilingualInstructor',
  title: 'Instructor',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (R) => R.required() }),
    defineField({ name: 'bio', type: 'text', title: 'Bio', rows: 3 }),
  ],
  preview: { select: { title: 'name' } },
});
