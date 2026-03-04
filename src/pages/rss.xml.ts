import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { getSortedPosts } from '../utils';

export async function GET(context: { site: string }) {
  const blog = await getCollection('blog');
  const posts = getSortedPosts(blog);
  return rss({
    title: `${SITE.title} | Blog`,
    description: SITE.blogDescription,
    site: context.site,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.data.externalUrl || `/blogs/${post.id}/`,
      categories: post.data.tags,
      customData: post.data.modDate
        ? `<atom:updated>${post.data.modDate.toISOString()}</atom:updated>`
        : undefined,
    })),
    customData: `<language>en-us</language>`,
  });
}
