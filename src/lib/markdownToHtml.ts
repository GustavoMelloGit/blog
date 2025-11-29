'use server';
import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const content = result.toString();
  return addTargetBlank(content);
}

function addTargetBlank(html: string) {
  return html.replace(/<a /g, '<a target="_blank" rel="noreferrer" ');
}
