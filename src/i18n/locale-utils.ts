import {routing, type Locale} from './routing';

const OG_LOCALE_MAP: Record<Locale, string> = {
    en: 'en_US',
    de: 'de_DE',
    ar: 'ar_SA',
    fr: 'fr_FR',
    es: 'es_ES',
};

const INTL_LOCALE_MAP: Record<Locale, string> = {
    en: 'en-US',
    de: 'de-DE',
    ar: 'ar-SA',
    fr: 'fr-FR',
    es: 'es-ES',
};

export function toOgLocale(locale: string): string {
    return OG_LOCALE_MAP[locale as Locale] || 'en_US';
}

export function toIntlLocale(locale: string): string {
    return INTL_LOCALE_MAP[locale as Locale] || 'en-US';
}

export function getLocaleDirection(locale: string): 'ltr' | 'rtl' {
    return locale === 'ar' ? 'rtl' : 'ltr';
}
