import type { CollectionEntry } from 'astro:content';

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 220;
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_`~[\]()>-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const words = cleanContent ? cleanContent.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getRelatedPosts(
  currentPost: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit = 3
): CollectionEntry<'blog'>[] {
  const currentTags = currentPost.data.tags;

  return allPosts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag) => currentTags.includes(tag)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf();
    })
    .slice(0, limit)
    .map(({ post }) => post);
}

export function generateArticleSchema(post: CollectionEntry<'blog'>, url: string) {
  const image = post.data.image ? new URL(post.data.image, 'https://eljakani.me').toString() : 'https://eljakani.me/og-image.jpg';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.data.title,
    description: post.data.description,
    image,
    datePublished: post.data.pubDate.toISOString(),
    dateModified: post.data.updatedDate?.toISOString() ?? post.data.pubDate.toISOString(),
    author: {
      '@type': 'Person',
      name: post.data.author,
      url: 'https://eljakani.me',
    },
    publisher: {
      '@type': 'Person',
      name: 'Yassine El Jakani',
      url: 'https://eljakani.me',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: [...post.data.tags, ...post.data.keywords].join(', '),
  };
}
