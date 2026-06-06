import type { Metadata } from "next";

export function getLocalizedMetadata(
  locale: string,
  path: string,
  baseMetadata: Metadata
): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = (p: string) => `https://www.calmasounds.com${p}`;

  const alternates = {
    canonical: url(locale === "en" ? cleanPath : `/${locale}${cleanPath}`),
    languages: {
      "x-default": url(cleanPath),
      en: url(cleanPath),
      es: url(`/es${cleanPath}`),
      pl: url(`/pl${cleanPath}`),
      de: url(`/de${cleanPath}`),
      fr: url(`/fr${cleanPath}`),
      ko: url(`/ko${cleanPath}`),
      ja: url(`/ja${cleanPath}`),
      "pt-BR": url(`/pt-BR${cleanPath}`),
    },
  };

  return {
    ...baseMetadata,
    alternates,
  };
}
