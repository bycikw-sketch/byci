import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Prevent creating or deleting — singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'phone', type: 'string', title: 'Phone Number', description: 'e.g. +965 41103254' }),
    defineField({ name: 'email', type: 'string', title: 'Email Address' }),
    defineField({ name: 'addressEn', type: 'string', title: 'Address (EN)' }),
    defineField({ name: 'addressAr', type: 'string', title: 'Address (AR)' }),
    defineField({ name: 'whatsappUrl', type: 'url', title: 'WhatsApp URL', description: 'e.g. https://wa.me/96541103254' }),
    defineField({ name: 'linkedinUrl', type: 'url', title: 'LinkedIn URL' }),
    defineField({ name: 'twitterUrl', type: 'url', title: 'X / Twitter URL' }),
    defineField({ name: 'instagramUrl', type: 'url', title: 'Instagram URL' }),
    defineField({ name: 'footerTaglineEn', type: 'string', title: 'Footer Tagline (EN)' }),
    defineField({ name: 'footerTaglineAr', type: 'string', title: 'Footer Tagline (AR)' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
