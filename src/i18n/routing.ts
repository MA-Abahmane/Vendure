import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'de', 'ar', 'fr', 'es'],
    defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    ar: 'العربية',
    fr: 'Français',
    es: 'Español',
};
