import { getCollection } from 'astro:content';
import { getPermalink } from '../utils/permalinks';

export const GET = async () => {
  const posts = await getCollection('post');
  const caseStudies = await getCollection('case-studies');

  const siteUrl = 'https://criztec.com';

  let content = '# Criztec Technologies - Full Content\n\n';
  content += 'This file contains the full content for AI agents to consume the entire website depth.\n\n';

  content += '## Case Studies\n\n';
  for (const study of caseStudies) {
    content += `### ${study.data.title}\n`;
    content += `URL: ${siteUrl}/case-studies/${study.id}\n\n`;
    content += `${study.data.description}\n\n`;
    content += '---\n\n';
  }

  content += '## Blog Posts\n\n';
  const sortedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishDate || '').getTime() - new Date(a.data.publishDate || '').getTime());

  for (const post of sortedPosts) {
    const permalink = getPermalink(post.data.permalink || post.id, 'post');
    content += `### ${post.data.title}\n`;
    content += `URL: ${siteUrl}${permalink}\n`;
    content += `Date: ${new Date(post.data.publishDate || '').toLocaleDateString()}\n\n`;
    content += `${post.data.excerpt || ''}\n\n`;
    content += `Body:\n${post.body}\n\n`;
    content += '---\n\n';
  }

  return new Response(content, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
};
