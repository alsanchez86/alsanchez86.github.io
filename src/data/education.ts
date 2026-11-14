import type { TKey } from '@/types/i18n';

export interface Education {
  date: string;
  name: TKey;
  location: TKey;
  city: TKey;
}

export const educations = [
  {
    date: '2008 - 2009',
    name: 'educationName0',
    location: 'educationLocation0',
    city: 'sevilla',
  },
  {
    date: '2007 - 2008',
    name: 'educationName1',
    location: 'educationLocation1',
    city: 'sevilla',
  },
  {
    date: '2005 - 2007',
    name: 'educationName2',
    location: 'educationLocation2',
    city: 'sevilla',
  },
] satisfies Array<Education>;
