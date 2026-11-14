import { defineMiddleware } from 'astro:middleware';
import { getLocale, useTranslations } from '@i18n/utils';

/**
 * Astro middleware that resolves the active locale for each request
 * and injects `locale` and the bound translation function `t` into `context.locals`.
 *
 * @param context - The Astro request context containing locale and locals state.
 * @param next - Callback to invoke the next middleware or render the target route.
 * @returns A promise resolving to the rendered `Response`.
 */
export const onRequest = defineMiddleware((context, next) => {
  const locale = getLocale(context.currentLocale);

  context.locals.locale = locale;
  context.locals.t = useTranslations(locale);

  return next();
});
