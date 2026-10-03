import { productCopy } from "./product-copy";

export const PRODUCT = {
  name: "Calma",
  url: "https://www.calmasounds.com",
  appId: "https://www.calmasounds.com/#app",
  organizationId: "https://www.calmasounds.com/#organization",
  websiteId: "https://www.calmasounds.com/#website",
  logo: "https://www.calmasounds.com/logo.png",
  stores: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
  ],
} as const;

const definitions: Record<string, { title: string; description: string }> = {
  en: { title: "What is Calma?", description: "Calma is a sleep sounds, relaxation and focus app for Android and iOS. Mix rain, nature sounds, white noise and brown noise into your own soundscapes. It has a free version and an optional one-time PRO unlock, with no recurring subscription." },
  pl: { title: "Co to jest Calma?", description: "Calma to aplikacja z dźwiękami do snu, relaksu i koncentracji na Androida i iOS. Łącz deszcz, dźwięki natury, biały i brązowy szum we własne miksy. Aplikacja ma darmową wersję i opcjonalne jednorazowe odblokowanie PRO, bez cyklicznej subskrypcji." },
  es: { title: "¿Qué es Calma?", description: "Calma es una app de sonidos para dormir, relajarse y concentrarse en Android e iOS. Mezcla lluvia, sonidos de la naturaleza, ruido blanco y marrón para crear tus propios ambientes. Ofrece una versión gratuita y un desbloqueo PRO opcional de pago único, sin suscripción recurrente." },
  de: { title: "Was ist Calma?", description: "Calma ist eine App für Schlafgeräusche, Entspannung und Konzentration auf Android und iOS. Mische Regen, Naturgeräusche, weißes und braunes Rauschen zu eigenen Klangwelten. Es gibt eine kostenlose Version und eine optionale einmalige PRO-Freischaltung ohne laufendes Abonnement." },
  fr: { title: "Qu’est-ce que Calma ?", description: "Calma est une application de sons pour le sommeil, la relaxation et la concentration sur Android et iOS. Mélangez pluie, sons de la nature, bruit blanc et brun pour créer vos ambiances. Elle propose une version gratuite et un déblocage PRO facultatif à paiement unique, sans abonnement récurrent." },
  ko: { title: "Calma란 무엇인가요?", description: "Calma는 Android와 iOS용 수면, 휴식, 집중 사운드 앱입니다. 빗소리, 자연의 소리, 백색소음, 브라운 노이즈를 섞어 나만의 사운드스케이프를 만드세요. 무료 버전과 선택 가능한 일회성 PRO 업그레이드를 제공하며 정기 구독은 필요하지 않습니다." },
  ja: { title: "Calmaとは何ですか？", description: "CalmaはAndroidとiOS向けの睡眠、リラクゼーション、集中用サウンドアプリです。雨音、自然音、ホワイトノイズ、ブラウンノイズを組み合わせて自分だけの音環境を作れます。無料版と任意の買い切りPROがあり、継続サブスクリプションは不要です。" },
  "pt-BR": { title: "O que é o Calma?", description: "Calma é um app de sons para dormir, relaxar e focar no Android e iOS. Misture chuva, sons da natureza, ruído branco e marrom para criar seus próprios ambientes. Há uma versão gratuita e um desbloqueio PRO opcional com pagamento único, sem assinatura recorrente." },
};

export function getProductDefinition(locale: string) {
  return definitions[locale] ?? definitions.en;
}

export function getSoftwareApplicationSchema(locale: string, applicationCategory = "HealthApplication") {
  const text = productCopy[locale] ?? productCopy.en;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": PRODUCT.appId,
    name: PRODUCT.name,
    description: getProductDefinition(locale).description,
    applicationCategory,
    operatingSystem: "Android, iOS",
    url: locale === "en" ? PRODUCT.url : `${PRODUCT.url}/${locale}`,
    image: PRODUCT.logo,
    sameAs: [...PRODUCT.stores],
    downloadUrl: [...PRODUCT.stores],
    publisher: {
      "@type": "Organization",
      "@id": PRODUCT.organizationId,
      name: PRODUCT.name,
      url: PRODUCT.url,
    },
    featureList: [text.soundsText, text.mixerText, text.offlineText, text.note],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
