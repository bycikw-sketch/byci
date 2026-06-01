import { defineType, defineField, defineArrayMember } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'slug',
      title: 'ID / Slug',
      description: 'URL-safe identifier, e.g. ai-transforming-gcc-workforce',
      options: { source: 'titleEn' },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'titleEn', type: 'string', title: 'Title (EN)', validation: (R) => R.required() }),
    defineField({ name: 'titleAr', type: 'string', title: 'Title (AR)', validation: (R) => R.required() }),
    defineField({ name: 'excerptEn', type: 'text', title: 'Excerpt (EN)', rows: 2 }),
    defineField({ name: 'excerptAr', type: 'text', title: 'Excerpt (AR)', rows: 2 }),
    defineField({
      name: 'contentEn',
      type: 'array',
      title: 'Content Paragraphs (EN)',
      description: 'Each item is one paragraph',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({
      name: 'contentAr',
      type: 'array',
      title: 'Content Paragraphs (AR)',
      description: 'Each item is one paragraph',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: ['ai', 'leadership', 'certifications', 'career', 'corporate'],
        layout: 'radio',
      },
    }),
    defineField({ name: 'author', type: 'string', title: 'Author Name' }),
    defineField({ name: 'authorRoleEn', type: 'string', title: 'Author Role (EN)' }),
    defineField({ name: 'authorRoleAr', type: 'string', title: 'Author Role (AR)' }),
    defineField({ name: 'date', type: 'date', title: 'Publication Date', validation: (R) => R.required() }),
    defineField({ name: 'readTimeEn', type: 'string', title: 'Read Time (EN)', description: 'e.g. 6 min read' }),
    defineField({ name: 'readTimeAr', type: 'string', title: 'Read Time (AR)', description: 'e.g. 6 دقائق للقراءة' }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Lucide icon name: Brain, Award, Users, BarChart3, Shield, Cloud',
    }),
  ],
  orderings: [
    { title: 'Newest First', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'titleEn', subtitle: 'date' },
  },
});
