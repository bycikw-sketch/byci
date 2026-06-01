import { useQuery } from '@tanstack/react-query';
import { sanityClient } from './client';
import {
  ALL_PROGRAMS_QUERY,
  PROGRAM_BY_ID_QUERY,
  ALL_BLOG_POSTS_QUERY,
  BLOG_POST_BY_ID_QUERY,
  HOMEPAGE_SETTINGS_QUERY,
  SITE_SETTINGS_QUERY,
} from './queries';
import type { Program } from '@/data/programs';
import type { BlogArticle } from '@/data/blog';

const FIVE_MIN = 1000 * 60 * 5;
const THIRTY_MIN = 1000 * 60 * 30;

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export function usePrograms() {
  return useQuery<Program[]>({
    queryKey: ['programs'],
    queryFn: () => sanityClient.fetch(ALL_PROGRAMS_QUERY),
    staleTime: FIVE_MIN,
  });
}

export function useProgram(id: string | undefined) {
  return useQuery<Program | null>({
    queryKey: ['program', id],
    queryFn: () => sanityClient.fetch(PROGRAM_BY_ID_QUERY, { id }),
    enabled: !!id,
    staleTime: FIVE_MIN,
  });
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export function useBlogPosts() {
  return useQuery<BlogArticle[]>({
    queryKey: ['blogPosts'],
    queryFn: () => sanityClient.fetch(ALL_BLOG_POSTS_QUERY),
    staleTime: FIVE_MIN,
  });
}

export function useBlogPost(id: string | undefined) {
  return useQuery<BlogArticle | null>({
    queryKey: ['blogPost', id],
    queryFn: () => sanityClient.fetch(BLOG_POST_BY_ID_QUERY, { id }),
    enabled: !!id,
    staleTime: FIVE_MIN,
  });
}

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

export interface HomepageSettings {
  heroSlides: Array<{
    headlineEn: string; headlineAr: string;
    subheadlineEn: string; subheadlineAr: string;
    ctaEn: string; ctaAr: string;
    secondaryCtaEn: string; secondaryCtaAr: string;
  }>;
  stats: Array<{ value: string; labelEn: string; labelAr: string }>;
  focusAreas: Array<{ titleEn: string; titleAr: string; descriptionEn: string; descriptionAr: string }>;
  whyPillars: Array<{ titleEn: string; titleAr: string; descriptionEn: string; descriptionAr: string }>;
  testimonials: Array<{ nameEn: string; nameAr: string; roleEn: string; roleAr: string; textEn: string; textAr: string }>;
}

export function useHomepageSettings() {
  return useQuery<HomepageSettings | null>({
    queryKey: ['homepageSettings'],
    queryFn: () => sanityClient.fetch(HOMEPAGE_SETTINGS_QUERY),
    staleTime: FIVE_MIN,
  });
}

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export interface SiteSettings {
  phone: string;
  email: string;
  addressEn: string;
  addressAr: string;
  whatsappUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  footerTaglineEn: string;
  footerTaglineAr: string;
}

export function useSiteSettings() {
  return useQuery<SiteSettings | null>({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch(SITE_SETTINGS_QUERY),
    staleTime: THIRTY_MIN,
  });
}
