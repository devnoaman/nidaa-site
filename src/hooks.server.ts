import type { Handle } from '@sveltejs/kit';
export const handle: Handle = ({ event, resolve }) => {
  const en = event.url.pathname === '/en' || event.url.pathname.startsWith('/en/');
  return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', en ? 'en' : 'ar').replace('%dir%', en ? 'ltr' : 'rtl') });
};
