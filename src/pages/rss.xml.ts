import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';
import rss from '@astrojs/rss';
import { defaultLocale, LocaleTag } from '@i18n/consts';

/**
 * Handles GET requests to generate the global RSS feed for the blog.
 * Retrieves all blog posts, sorts them by publication date (newest first),
 * and constructs the RSS XML using localized metadata and localized URLs.
 *
 * @param context - The Astro API context containing site data and middleware locals (e.g., `t` for translations).
 * @returns A Promise resolving to the RSS XML `Response`.
 */
export async function GET(context: APIContext) {
  const { t } = context.locals;
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: t('meta.title'),
    description: t('meta.description'),
    site: context.site!,
    customData: `<language>${LocaleTag[defaultLocale]}</language>`,
    items: posts.map((post) => {
      const [postLang, ...slugParts] = post.id.split('/');

      return {
        ...post.data,
        link: getRelativeLocaleUrl(postLang, `/blog/${slugParts.join('/')}`),
      };
    }),
  });
}
