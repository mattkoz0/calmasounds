import type { Metadata } from "next";

export const pathnamesMapping: Record<string, Record<string, string>> = {
  '/blog/benefits-of-nature-sounds-for-relaxation': {
    en: '/blog/benefits-of-nature-sounds-for-relaxation',
    pl: '/blog/korzysci-z-dzwiekow-natury-dla-relaksu',
    de: '/blog/vorteile-von-naturgeraeuschen-zur-entspannung',
    es: '/blog/beneficios-de-los-sonidos-de-la-naturaleza-para-relajarse',
    fr: '/blog/bienfaits-des-sons-de-la-nature-pour-la-relaxation',
    "pt-BR": '/blog/beneficios-dos-sons-da-natureza-para-relaxar',
    ko: '/blog/benefits-of-nature-sounds-for-relaxation',
    ja: '/blog/benefits-of-nature-sounds-for-relaxation',
  },
  '/blog/best-sounds-for-sleep': {
    en: '/blog/best-sounds-for-sleep',
    pl: '/blog/najlepsze-dzwieki-do-snu',
    de: '/blog/beste-geraeusche-zum-einschlafen',
    es: '/blog/mejores-sonidos-para-dormir',
    fr: '/blog/meilleurs-sons-pour-dormir',
    "pt-BR": '/blog/melhores-sons-para-dormir',
    ko: '/blog/best-sounds-for-sleep',
    ja: '/blog/best-sounds-for-sleep',
  },
  '/blog/best-sounds-for-studying': {
    en: '/blog/best-sounds-for-studying',
    pl: '/blog/najlepsze-dzwieki-do-nauki',
    de: '/blog/beste-geraeusche-zum-lernen',
    es: '/blog/mejores-sonidos-para-estudiar',
    fr: '/blog/meilleurs-sons-pour-etudier',
    "pt-BR": '/blog/melhores-sons-para-estudar',
    ko: '/blog/best-sounds-for-studying',
    ja: '/blog/best-sounds-for-studying',
  },
  '/blog/white-noise-for-sleep': {
    en: '/blog/white-noise-for-sleep',
    pl: '/blog/bialy-szum-do-snu',
    de: '/blog/weisses-rauschen-zum-schlafen',
    es: '/blog/ruido-blanco-para-dormir',
    fr: '/blog/bruit-blanc-pour-dormir',
    "pt-BR": '/blog/ruido-branco-para-dormir',
    ko: '/blog/white-noise-for-sleep',
    ja: '/blog/white-noise-for-sleep',
  },
  '/blog/rain-sounds-vs-white-noise': {
    en: '/blog/rain-sounds-vs-white-noise',
    pl: '/blog/dzwieki-deszczu-vs-bialy-szum',
    de: '/blog/regengeraeusche-vs-weisses-rauschen',
    es: '/blog/sonido-de-lluvia-vs-ruido-blanco',
    fr: '/blog/bruit-de-pluie-vs-bruit-blanc',
    "pt-BR": '/blog/sons-de-chuva-vs-ruido-branco',
    ko: '/blog/rain-sounds-vs-white-noise',
    ja: '/blog/rain-sounds-vs-white-noise',
  },
  '/blog/brown-noise-vs-white-noise-vs-pink-noise': {
    en: '/blog/brown-noise-vs-white-noise-vs-pink-noise',
    pl: '/blog/szum-brazowy-vs-bialy-vs-rozowy',
    de: '/blog/braunes-vs-weisses-vs-rosa-rauschen',
    es: '/blog/ruido-marron-vs-blanco-vs-rosa',
    fr: '/blog/bruit-marron-vs-blanc-vs-rose',
    "pt-BR": '/blog/ruido-marrom-vs-branco-vs-rosa',
    ko: '/blog/brown-noise-vs-white-noise-vs-pink-noise',
    ja: '/blog/brown-noise-vs-white-noise-vs-pink-noise',
  },
  '/blog/best-free-white-noise-app': {
    en: '/blog/best-free-white-noise-app',
    pl: '/blog/best-free-white-noise-app',
    de: '/blog/best-free-white-noise-app',
    es: '/blog/best-free-white-noise-app',
    fr: '/blog/best-free-white-noise-app',
    "pt-BR": '/blog/best-free-white-noise-app',
    ko: '/blog/best-free-white-noise-app',
    ja: '/blog/best-free-white-noise-app',
  },
  '/blog/best-color-noise-for-adhd': {
    en: '/blog/best-color-noise-for-adhd',
    pl: '/blog/best-color-noise-for-adhd',
    de: '/blog/best-color-noise-for-adhd',
    es: '/blog/best-color-noise-for-adhd',
    fr: '/blog/best-color-noise-for-adhd',
    "pt-BR": '/blog/best-color-noise-for-adhd',
    ko: '/blog/best-color-noise-for-adhd',
    ja: '/blog/best-color-noise-for-adhd',
  },
  '/blog/sounds-for-tinnitus-relief': {
    en: '/blog/sounds-for-tinnitus-relief',
    pl: '/blog/sounds-for-tinnitus-relief',
    de: '/blog/sounds-for-tinnitus-relief',
    es: '/blog/sounds-for-tinnitus-relief',
    fr: '/blog/sounds-for-tinnitus-relief',
    "pt-BR": '/blog/sounds-for-tinnitus-relief',
    ko: '/blog/sounds-for-tinnitus-relief',
    ja: '/blog/sounds-for-tinnitus-relief',
  },
  '/blog/green-noise-for-sleep': {
    en: '/blog/green-noise-for-sleep',
    pl: '/blog/green-noise-for-sleep',
    de: '/blog/green-noise-for-sleep',
    es: '/blog/green-noise-for-sleep',
    fr: '/blog/green-noise-for-sleep',
    "pt-BR": '/blog/green-noise-for-sleep',
    ko: '/blog/green-noise-for-sleep',
    ja: '/blog/green-noise-for-sleep',
  },
  '/blog/rain-sounds-for-better-sleep-and-focus': {
    en: '/blog/rain-sounds-for-better-sleep-and-focus',
    pl: '/blog/rain-sounds-for-better-sleep-and-focus',
    de: '/blog/rain-sounds-for-better-sleep-and-focus',
    es: '/blog/rain-sounds-for-better-sleep-and-focus',
    fr: '/blog/rain-sounds-for-better-sleep-and-focus',
    "pt-BR": '/blog/rain-sounds-for-better-sleep-and-focus',
    ko: '/blog/rain-sounds-for-better-sleep-and-focus',
    ja: '/blog/rain-sounds-for-better-sleep-and-focus',
  },
};

export function getLocalizedMetadata(
  locale: string,
  path: string,
  baseMetadata: Metadata
): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = (p: string) => `https://www.calmasounds.com${p}`;

  const getPathForLocale = (loc: string) => {
    const mapping = pathnamesMapping[cleanPath];
    if (mapping && mapping[loc]) {
      return mapping[loc];
    }
    return cleanPath;
  };

  const alternates = {
    canonical: url(locale === "en" ? getPathForLocale(locale) : `/${locale}${getPathForLocale(locale)}`),
    languages: {
      "x-default": url(getPathForLocale("en")),
      en: url(getPathForLocale("en")),
      es: url(`/es${getPathForLocale("es")}`),
      pl: url(`/pl${getPathForLocale("pl")}`),
      de: url(`/de${getPathForLocale("de")}`),
      fr: url(`/fr${getPathForLocale("fr")}`),
      ko: url(`/ko${getPathForLocale("ko")}`),
      ja: url(`/ja${getPathForLocale("ja")}`),
      "pt-BR": url(`/pt-BR${getPathForLocale("pt-BR")}`),
    },
  };

  return {
    ...baseMetadata,
    alternates,
  };
}
