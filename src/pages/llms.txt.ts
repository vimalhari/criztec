import { getCollection } from 'astro:content';
import { getPermalink } from '../utils/permalinks';

export const GET = async () => {
  const posts = await getCollection('post');
  const caseStudies = await getCollection('case-studies');

  const siteUrl = 'https://criztec.com';

  let content = '# Criztec Technologies\n\n';
  content +=
    'Professional web & software development experts specializing in Astro, Ruby on Rails, Django, and business automation.\n\n';

  content += '## Main Pages\n';
  content += `- [Home](${siteUrl})\n`;
  content += `- [About](${siteUrl}/about)\n`;
  content += `- [Services](${siteUrl}/services)\n`;
  content += `- [Contact](${siteUrl}/contact)\n`;
  content += `- [Pricing](${siteUrl}/pricing)\n\n`;

  content += '## Services\n';
  content += `- [Web Design](${siteUrl}/web-design)\n`;
  content += `- [Website Development](${siteUrl}/website-development)\n`;
  content += `- [Web App Development](${siteUrl}/web-app-development)\n`;
  content += `- [Mobile App Development](${siteUrl}/mobile-app)\n`;
  content += `- [Django Development](${siteUrl}/django-development)\n`;
  content += `- [Ruby on Rails Development](${siteUrl}/ruby-on-rails-development)\n`;
  content += `- [Digital Marketing](${siteUrl}/digital-marketing)\n`;
  content += `- [SEO Services](${siteUrl}/seo)\n`;
  content += `- [IT Support](${siteUrl}/it-support)\n`;
  content += `- [Business Automation](${siteUrl}/business-automation)\n\n`;

  content += '## Case Studies\n';
  caseStudies.forEach((study) => {
    content += `- [${study.data.title}](${siteUrl}/case-studies/${study.id})\n`;
  });

  content += '\n## Blog Posts\n';
  posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishDate || '').getTime() - new Date(a.data.publishDate || '').getTime())
    .forEach((post) => {
      const permalink = getPermalink(post.data.permalink || post.id, 'post');
      content += `- [${post.data.title}](${siteUrl}${permalink})\n`;
    });

  return new Response(content, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
};
