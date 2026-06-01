import { program } from './program';
import { blogPost } from './blogPost';
import { homepageSettings } from './homepageSettings';
import { siteSettings } from './siteSettings';
import { bilingualModule } from './objects/bilingualModule';
import { bilingualFaq } from './objects/bilingualFaq';
import { bilingualInstructor } from './objects/bilingualInstructor';
import { heroSlide } from './objects/heroSlide';
import { testimonialItem } from './objects/testimonialItem';
import { focusArea } from './objects/focusArea';
import { whyPillar } from './objects/whyPillar';
import { statItem } from './objects/statItem';

export const schemaTypes = [
  // Documents
  program,
  blogPost,
  homepageSettings,
  siteSettings,
  // Object types
  bilingualModule,
  bilingualFaq,
  bilingualInstructor,
  heroSlide,
  testimonialItem,
  focusArea,
  whyPillar,
  statItem,
];
