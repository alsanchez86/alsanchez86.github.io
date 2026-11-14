/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    locale: import('@/i18n/consts').Locale;
    t: ReturnType<typeof import('@/i18n/utils').useTranslations>;
  }
}
