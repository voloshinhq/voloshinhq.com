import type { CollectionEntry } from 'astro:content';
import type { Lang } from './site';
import { socialLinks } from './site';

const siteUrl = 'https://voloshinhq.com';
const authorName = 'Yaroslav Voloshin';

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export const personSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: authorName,
  url: siteUrl,
  image: absoluteUrl('/avatar.jpg'),
  sameAs: socialLinks(lang).filter((item) => item.href.startsWith('https://')).map((item) => item.href)
});

export const websiteSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: authorName,
  url: siteUrl,
  inLanguage: lang
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const blogPostingSchema = (post: CollectionEntry<'blog'>, lang: Lang, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  description: post.data.description,
  datePublished: post.data.date.toISOString(),
  dateModified: post.data.date.toISOString(),
  inLanguage: lang,
  url: absoluteUrl(path),
  mainEntityOfPage: absoluteUrl(path),
  author: {
    '@type': 'Person',
    name: authorName,
    url: siteUrl
  },
  publisher: {
    '@type': 'Person',
    name: authorName,
    url: siteUrl
  }
});
