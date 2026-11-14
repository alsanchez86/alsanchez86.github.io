import { Translation } from '@/i18n/consts';

export type TFunction = (key: keyof Translation) => string;
