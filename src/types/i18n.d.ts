import { Translation } from '@/i18n/consts';

export type TFunction = (key: keyof Translation) => string;

export type TKey = Parameters<App.Locals['t']>[0];
