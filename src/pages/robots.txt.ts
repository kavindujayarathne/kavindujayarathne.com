import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `# robots.txt

User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  const robotsTxt = getRobotsTxt(sitemapURL);
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};