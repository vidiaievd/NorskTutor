export const fallbackLng = 'en';
export const languages: string[] = [fallbackLng, 'uk'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

interface I18nOptions {
  supportedLangs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string | string[];
}

export function getOptions(lng: string = fallbackLng, ns: string | string[] = defaultNS): I18nOptions {
  return {
    // debug: true,
    supportedLangs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}
