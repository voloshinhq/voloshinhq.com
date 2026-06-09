import { getCollection } from 'astro:content';
import { publishedPosts, slugFromPost } from '../data/utils';

const siteUrl = 'https://voloshinhq.com';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

const urlEntry = (path: string, lastmod?: Date) => {
  const lastmodTag = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
  return `<url><loc>${escapeXml(new URL(path, siteUrl).toString())}</loc>${lastmodTag}</url>`;
};

export async function GET() {
  const posts = await getCollection('blog');
  const enPosts = publishedPosts(posts, 'en');
  const ruPosts = publishedPosts(posts, 'ru');
  const urls = [
    urlEntry('/'),
    urlEntry('/ru'),
    urlEntry('/blog'),
    urlEntry('/ru/blog'),
    ...enPosts.map((post) => urlEntry(`/blog/${slugFromPost(post)}`, post.data.date)),
    ...ruPosts.map((post) => urlEntry(`/ru/blog/${slugFromPost(post)}`, post.data.date))
  ];

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
