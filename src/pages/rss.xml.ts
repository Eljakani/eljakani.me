import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate } from '@/utils/blog';

export async function GET(context: { site?: URL }) {
  const posts = sortPostsByDate(await getCollection('blog'));

  return rss({
    title: 'Yassine El Jakani Blog',
    description: 'Personal articles about cybersecurity, DevSecOps, cloud security, and secure software engineering.',
    site: context.site ?? new URL('https://eljakani.me'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
