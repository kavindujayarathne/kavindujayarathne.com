import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const title = process.argv[2];

if (!title) {
  console.error('Usage: node scripts/new-post.js "My Post Title"');
  process.exit(1);
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function today() {
  return new Date().toISOString().split('T')[0];
}

const slug = slugify(title);
const filename = `${slug}.md`;
const blogDir = join(__dirname, '../src/data/blog');
const filePath = join(blogDir, filename);

if (existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const frontmatter = `---
title: "${title}"
description: ""
pubDate: '${today()}'
tags: []
# modDate: ''
# ogImage: ""
# externalUrl: ""
# canonicalURL: ""
# draft: true
---

`;

if (!existsSync(blogDir)) {
  mkdirSync(blogDir, { recursive: true });
}

writeFileSync(filePath, frontmatter);

console.log(`Created: src/data/blog/${filename}`);
