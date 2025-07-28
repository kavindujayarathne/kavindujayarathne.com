import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Kavindu Jayarathne | Blog',
    description:
      'Articles about computer science, programming, and technology by Kavindu Jayarathne.',
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: post.data.externalUrl || `/blogs/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
