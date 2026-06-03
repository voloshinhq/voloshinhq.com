import type { CollectionEntry } from 'astro:content';
import type { Lang } from './site';

export const readingTime = (text: string) => {
  const words = (text.trim().match(/[A-Za-zА-Яа-я0-9@']+/g) || []).length;
  return Math.max(1, Math.ceil(words / 180));
};

export const formatDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);

export const publishedPosts = (posts: CollectionEntry<'blog'>[], lang: Lang) =>
  posts
    .filter((post) => post.data.lang === lang && !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const slugFromPost = (post: CollectionEntry<'blog'>) =>
  post.id.replace(/^en\//, '').replace(/^ru\//, '').replace(/\.mdx?$/, '');
