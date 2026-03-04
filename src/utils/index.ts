import type { CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export function getReadingTime(content: string): string {
  const minutes = Math.ceil(readingTime(content).minutes);
  return `${minutes} min read`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getSortedPosts(posts: CollectionEntry<'blog'>[]) {
  return posts
    .filter(post => import.meta.env.DEV || !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tag: string) {
  return posts.filter(post =>
    post.data.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}
