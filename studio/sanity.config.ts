import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  title: 'BYCI CMS',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('program').title('Programs'),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.divider(),
            S.listItem()
              .title('Homepage Settings')
              .child(
                S.document()
                  .schemaType('homepageSettings')
                  .documentId('homepageSettings')
              ),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
