import { en } from '@/i18n/en';
import { es } from '@/i18n/es';

export const Locale = {
  En: 'en',
  Es: 'es',
} as const;

export type Locale = ValuesFromConst<typeof Locale>;

export const LocaleTag = {
  [Locale.En]: 'en-US',
  [Locale.Es]: 'es-ES',
} as const satisfies Record<Locale, string>;

export type LocaleTag = ValuesFromConst<typeof LocaleTag>;

export const Translation = {
  [Locale.En]: en,
  [Locale.Es]: es,
} as const satisfies Record<Locale, Record<keyof typeof en, string>>;

export type Translation = ValuesFromConst<typeof Translation>;

export const defaultLocale: Locale = Locale.En;
