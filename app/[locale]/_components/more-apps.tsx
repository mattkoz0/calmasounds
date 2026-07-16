import Image from "next/image";

export type MakerApp = {
  name: string;
  url: string;
  domain: string;
  icon: string; // local /public path
  category: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
};

// The other apps by the maker of Calma. Adding a new app is a one-object change
// (plus its localized copy below and an icon in /public).
export const makerApps: MakerApp[] = [
  {
    name: "PayClear",
    url: "https://www.pay-clear.com/",
    domain: "pay-clear.com",
    icon: "/PayClear_icon_512512.png",
    category: "Subscription tracker",
    description:
      "Track subscriptions, free trials and recurring bills privately. No bank login, no account — local reminders and a one-time lifetime unlock.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
  },
  {
    name: "Sereo",
    url: "https://sereo.cc/",
    domain: "sereo.cc",
    icon: "/sereo_ikona_512.png",
    category: "Trading journal",
    description:
      "A private trading journal for stocks and options with performance analytics and position-size calculators. No account, no subscription.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android, iOS",
  },
];

const moreAppsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "More apps from the maker of Calma",
  itemListElement: makerApps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      url: app.url,
      image: `https://www.calmasounds.com${app.icon}`,
      description: app.description,
      applicationCategory: app.applicationCategory,
      operatingSystem: app.operatingSystem,
    },
  })),
};

type AppCopy = { category: string; description: string };

type Copy = {
  eyebrow: string;
  title: string;
  subline: string;
  apps: Record<string, AppCopy>;
};

const copy: Record<string, Copy> = {
  en: {
    eyebrow: "From the maker of Calma",
    title: "More apps built the same way.",
    subline:
      "Private by design, useful offline and no extra subscription — the same philosophy behind Calma.",
    apps: {
      PayClear: {
        category: "Subscription tracker",
        description:
          "Track subscriptions, free trials and recurring bills privately. No bank login, no account — local reminders and a one-time lifetime unlock.",
      },
      Sereo: {
        category: "Trading journal",
        description:
          "A private trading journal for stocks and options with performance analytics and position-size calculators. No account, no subscription.",
      },
    },
  },
  pl: {
    eyebrow: "Od twórcy Calmy",
    title: "Więcej aplikacji zbudowanych tak samo.",
    subline:
      "Prywatność w standardzie, działanie offline i bez dodatkowej subskrypcji — ta sama filozofia, która stoi za Calmą.",
    apps: {
      PayClear: {
        category: "Menedżer subskrypcji",
        description:
          "Śledź subskrypcje, darmowe okresy próbne i cykliczne rachunki z zachowaniem prywatności. Bez logowania do banku i bez konta — lokalne przypomnienia i jednorazowe odblokowanie na zawsze.",
      },
      Sereo: {
        category: "Dziennik tradera",
        description:
          "Prywatny dziennik transakcji na akcjach i opcjach z analizą wyników i kalkulatorami wielkości pozycji. Bez konta i bez subskrypcji.",
      },
    },
  },
  es: {
    eyebrow: "Del creador de Calma",
    title: "Más apps creadas de la misma manera.",
    subline:
      "Privadas por diseño, útiles sin conexión y sin suscripción adicional: la misma filosofía detrás de Calma.",
    apps: {
      PayClear: {
        category: "Control de suscripciones",
        description:
          "Controla suscripciones, pruebas gratuitas y facturas recurrentes de forma privada. Sin acceso bancario ni cuenta: recordatorios locales y un desbloqueo único de por vida.",
      },
      Sereo: {
        category: "Diario de trading",
        description:
          "Un diario de trading privado para acciones y opciones con análisis de rendimiento y calculadoras de tamaño de posición. Sin cuenta y sin suscripción.",
      },
    },
  },
  de: {
    eyebrow: "Vom Entwickler von Calma",
    title: "Weitere Apps, gebaut nach derselben Idee.",
    subline:
      "Privat by Design, offline nutzbar und ohne zusätzliches Abo — dieselbe Philosophie wie hinter Calma.",
    apps: {
      PayClear: {
        category: "Abo-Tracker",
        description:
          "Verwalte Abos, Gratis-Testphasen und wiederkehrende Rechnungen privat. Kein Bank-Login, kein Konto — lokale Erinnerungen und eine einmalige Lifetime-Freischaltung.",
      },
      Sereo: {
        category: "Trading-Tagebuch",
        description:
          "Ein privates Trading-Tagebuch für Aktien und Optionen mit Performance-Analysen und Rechnern für Positionsgrößen. Kein Konto, kein Abo.",
      },
    },
  },
  fr: {
    eyebrow: "Du créateur de Calma",
    title: "D'autres apps conçues de la même façon.",
    subline:
      "Privées par conception, utiles hors ligne et sans abonnement supplémentaire — la même philosophie que Calma.",
    apps: {
      PayClear: {
        category: "Suivi d'abonnements",
        description:
          "Suivez vos abonnements, essais gratuits et factures récurrentes en toute confidentialité. Sans connexion bancaire ni compte — rappels locaux et déblocage unique à vie.",
      },
      Sereo: {
        category: "Journal de trading",
        description:
          "Un journal de trading privé pour actions et options avec analyses de performance et calculateurs de taille de position. Sans compte, sans abonnement.",
      },
    },
  },
  ko: {
    eyebrow: "Calma 개발자의 다른 앱",
    title: "같은 철학으로 만든 앱들",
    subline:
      "설계부터 지키는 프라이버시, 오프라인 사용, 추가 구독 없음 — Calma와 같은 철학으로 만들었습니다.",
    apps: {
      PayClear: {
        category: "구독 관리",
        description:
          "구독, 무료 체험, 반복 청구를 프라이버시를 지키며 관리하세요. 은행 로그인과 계정이 필요 없으며, 로컬 알림과 일회성 평생 잠금 해제를 제공합니다.",
      },
      Sereo: {
        category: "매매 일지",
        description:
          "주식과 옵션을 위한 프라이빗 매매 일지로, 성과 분석과 포지션 크기 계산기를 제공합니다. 계정도 구독도 필요 없습니다.",
      },
    },
  },
  ja: {
    eyebrow: "Calmaの開発者によるアプリ",
    title: "同じ考え方で作られたアプリ",
    subline:
      "プライバシー重視の設計、オフラインで使える、追加のサブスクなし — Calmaと同じ哲学で作られています。",
    apps: {
      PayClear: {
        category: "サブスク管理",
        description:
          "サブスク、無料トライアル、定期的な支払いをプライベートに管理。銀行連携もアカウントも不要 — ローカル通知と買い切りの永久アンロック。",
      },
      Sereo: {
        category: "トレード日誌",
        description:
          "株式とオプションのためのプライベートなトレード日誌。パフォーマンス分析とポジションサイズ計算機を搭載。アカウント不要、サブスクなし。",
      },
    },
  },
  "pt-BR": {
    eyebrow: "Do criador do Calma",
    title: "Mais apps criados do mesmo jeito.",
    subline:
      "Privados por padrão, úteis offline e sem assinatura extra — a mesma filosofia por trás do Calma.",
    apps: {
      PayClear: {
        category: "Controle de assinaturas",
        description:
          "Acompanhe assinaturas, testes grátis e contas recorrentes com privacidade. Sem login bancário e sem conta — lembretes locais e um desbloqueio vitalício único.",
      },
      Sereo: {
        category: "Diário de trading",
        description:
          "Um diário de trading privado para ações e opções com análises de desempenho e calculadoras de tamanho de posição. Sem conta, sem assinatura.",
      },
    },
  },
};

function AppCard({ app, appCopy }: { app: MakerApp; appCopy: AppCopy }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener"
      className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <Image
        src={app.icon}
        alt={`${app.name} app icon`}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-2xl shadow-lg shadow-black/30"
      />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-white">{app.name}</h3>
          <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/70">
            {appCopy.category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">{appCopy.description}</p>
        <p className="mt-3 text-xs font-bold text-white/80">
          {app.domain}
          <span
            aria-hidden
            className="ml-1 inline-block transition group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </p>
      </div>
    </a>
  );
}

export default function MoreApps({
  locale,
  variant = "full",
}: {
  locale: string;
  variant?: "full" | "compact";
}) {
  const text = copy[locale] ?? copy.en;
  const jsonLdScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(moreAppsJsonLd) }}
    />
  );
  const cards = (
    <div className="grid gap-6 md:grid-cols-2">
      {makerApps.map((app) => (
        <AppCard key={app.url} app={app} appCopy={text.apps[app.name]} />
      ))}
    </div>
  );

  if (variant === "compact") {
    return (
      <section
        id="more-apps"
        className="bg-slate-950 px-6 pb-20 text-white"
        aria-labelledby="more-apps-title"
      >
        {jsonLdScript}
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            {text.eyebrow}
          </p>
          <h2 id="more-apps-title" className="mt-3 text-2xl font-semibold sm:text-3xl">
            {text.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/70">{text.subline}</p>
          <div className="mt-8">{cards}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="more-apps" className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="more-apps-title">
      {jsonLdScript}
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">{text.eyebrow}</p>
        <h2 id="more-apps-title" className="mt-4 text-3xl font-semibold sm:text-4xl">
          {text.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">{text.subline}</p>
      </div>
      {cards}
    </section>
  );
}
