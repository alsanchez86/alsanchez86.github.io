// src/types/global.d.ts
/// <reference types="astro/client" />

type ValuesFromConst<T> = T[keyof T];

declare namespace App {
  interface Locals {
    locale: import('@/i18n/consts').Locale;
    t: ReturnType<typeof import('@/i18n/utils').useTranslations>;
  }
}
