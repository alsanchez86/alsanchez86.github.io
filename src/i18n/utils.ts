import { Locale, defaultLocale, Translation } from '@/i18n/consts';
import type { TFunction } from '@/types/i18n';

/**
 * Type guard that checks whether a string is a supported locale.
 *
 * @param value - The string value to validate.
 * @returns `true` if the value matches a supported {@link Locale}; otherwise `false`.
 */
export const isLocale = (value?: string): value is Locale =>
  Object.values(Locale).includes(value as Locale);

/**
 * Resolves a locale string to a valid {@link Locale}, falling back to {@link defaultLocale}.
 *
 * @param currentLocale - The raw locale identifier (e.g., from `Astro.currentLocale`).
 * @returns A valid supported {@link Locale}.
 */
export const getLocale = (currentLocale?: string): Locale =>
  isLocale(currentLocale) ? currentLocale : defaultLocale;

/**
 * Returns a translation function bound to the specified locale, falling back to {@link defaultLocale} if a key is missing.
 *
 * @param locale - The target locale for translations. Defaults to {@link defaultLocale}.
 * @returns A {@link TFunction} that resolves translation keys to localized strings.
 */
export const useTranslations =
  (locale: Locale = defaultLocale): TFunction =>
  (key) =>
    Translation[locale][key] ?? Translation[defaultLocale][key];

/**
 * Converts a {@link Locale} into the route parameter expected by `[...locale]`.
 * Maps {@link defaultLocale} to `undefined` so it resolves at the root path (`/`).
 *
 * @param locale - The locale to convert.
 * @returns The locale string, or `undefined` if it is the default locale.
 */
export const toLocaleParam = (locale: Locale): Locale | undefined =>
  locale === defaultLocale ? undefined : locale;

/**
 * Generates static path parameters for Astro's `[...locale]` dynamic routes.
 *
 * @returns An array of route parameter objects for all supported locales.
 */
export const getStaticPaths = () =>
  Object.values(Locale).map((locale) => ({
    params: { locale: toLocaleParam(locale) },
  }));

/**
 * Removes the locale prefix from a given URL pathname.
 * Example: `/es/blog/` becomes `/blog/`, and `/es` becomes `/`.
 *
 * @param pathname - The current URL pathname to clean.
 * @returns The pathname without the locale prefix.
 */
export const getCleanPath = (pathname: string): string => {
  const localeRegex = new RegExp(
    `^\\/(${Object.values(Locale).join('|')})(\\/|$)`,
  );

  return pathname.replace(localeRegex, '/');
};
