import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import AiDefinition from "./_components/ai-definition";
import DesktopDownloadQr from "./_components/desktop-download-qr";
import MoreApps from "./_components/more-apps";

export const metadata: Metadata = {
  title: "Calma | Sons pour dormir, Bruit blanc, Relaxation et Concentration",
  description:
    "Calma est une application de sons pour dormir, de bruit blanc et de relaxation. Créez des paysages sonores personnalisés pour un meilleur sommeil et une concentration profonde.",
  alternates: {
    canonical: "https://www.calmasounds.com/fr",
  },
  openGraph: {
    title: "Calma | Sons pour dormir, Bruit blanc, Relaxation et Concentration",
    description:
      "Calma est une application de sons pour dormir, de bruit blanc et de relaxation. Créez des paysages sonores personnalisés pour un meilleur sommeil et une concentration profonde.",
    url: "https://www.calmasounds.com/fr",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Sons pour dormir, Bruit blanc, Relaxation et Concentration",
    description:
      "Calma est une application de sons pour dormir, de bruit blanc et de relaxation. Créez des paysages sonores personnalisés pour un meilleur sommeil et une concentration profonde.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/fr",
  description:
    "Calma est une application de sons pour dormir, de bruit blanc et de relaxation. Créez des paysages sonores personnalisés pour un meilleur sommeil et une concentration profonde.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma App",
  sameAs: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.youtube.com/@CalmaApp",
    "https://www.tiktok.com/@.calma.app",
    "https://www.instagram.com/calma.app.official",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ],
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/fr",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "Sons pour le sommeil, bruit blanc, relaxation et concentration avec des paysages sonores personnalisés.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/fr",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: "French"
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que Calma ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma est une application de mixage sonore conçue pour vous aider à mieux dormir, à vous détendre plus facilement et à rester concentré grâce à des mélanges audio personnalisés.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adresse Calma ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma s'adresse à tous ceux qui souhaitent une routine de coucher plus calme, une pause paisible après le travail ou un fond sonore favorisant l'étude et le travail profond.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je créer mon propre mélange sonore ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Calma repose sur l'idée de créer votre propre environnement sonore relaxant au lieu d'écouter une seule piste fixe.",
      },
    },
    {
      "@type": "Question",
      name: "Calma est-elle disponible maintenant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma est disponible sur Android et iOS (App Store), avec d'autres améliorations prévues au fil du temps.",
      },
    },
    {
      "@type": "Question",
      name: "Calma est-elle gratuite ou nécessite-t-elle un abonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma propose une version gratuite et un déverrouillage premium à vie avec un paiement unique. Aucun abonnement mensuel ou annuel n'est requis.",
      },
    },
    {
      "@type": "Question",
      name: "Calma fonctionne-t-elle hors ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma fonctionne complètement hors ligne. Vous pouvez mélanger et écouter vos sons sans être connecté à Internet.",
      },
    },
    {
      "@type": "Question",
      name: "Calma inclut-elle le bruit blanc, le bruit brun et le bruit rose ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma inclut un bruit blanc, brun, rose et vert de haute qualité, que vous pouvez mélanger avec des sons de pluie, d'océan, de ventilateur et de nature.",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Démo de l'application Calma",
  description: "Découvrez Calma en action, du mixage sonore immersif aux fonctionnalités bien-être premium conçues pour le sommeil, la relaxation et la concentration.",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2026-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.calmasounds.com/fr"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />

      <AiDefinition 
        title="Qu'est-ce que Calma ?" 
        description="Calma est une application de sons pour le sommeil et la relaxation qui permet aux utilisateurs de créer des paysages sonores personnalisés en mélangeant la pluie, l'océan, le bruit blanc, le bruit brun, les sons de la nature et l'ambiance. Parfaite pour dormir, se détendre, se concentrer et pour les routines nocturnes. Calma offre un accès à vie via un paiement unique sans avoir besoin d'abonnement." 
      />

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:grid lg:grid-cols-12 lg:gap-12 lg:text-left lg:items-center">
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
          <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
            Calma • Sons pour dormir & Relax
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Dormez mieux, relaxez-vous profondément et concentrez-vous
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Calma is a beautifully simple sleep sounds and relaxation app that helps
            you create personalized audio mixes for better sleep, calmer evenings and
            deeper focus.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start w-full">
            <Link
              href="/download"
              data-cta-location="home_hero"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              Commencer ma routine
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Découvrir les fonctionnalités
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Mélanges personnalisés
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Sommeil • Détente • Concentration
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Sans abonnement forcé
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/google-play-badge.png"
                alt="Disponible sur Google Play"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="Télécharger dans l'App Store"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
          <DesktopDownloadQr />
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 text-center">
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Meilleur Sommeil
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sons de pluie et ambiances personnalisées</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Créez vos propres mélanges avec des sons de pluie, des textures d'ambiance et des couches
              apaisantes pour vous endormir naturellement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Détente Profonde
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sons de la nature pour un repos total</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Utilisez des paysages sonores calmes pour apaiser votre esprit, réduire le bruit environnant
              et instaurer une routine du soir plus douce.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              TDAH & FOCUS
            </p>
            <h2 className="mt-3 text-xl font-semibold">Bruit Brun et concentration pour TDAH</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Créez votre propre fond sonore pour l'étude, la lecture et le travail profond
              sans distractions visuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Vidéo démo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Découvrez Calma en action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Découvrez l'interface de Calma, du mixage sonore immersif aux fonctionnalités 
            bien-être conçues pour le sommeil, la détente et la concentration.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Vidéo démo de l'application Calma"
            aria-label="Vidéo démo de l'application Calma"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Aperçu de l'app
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Une interface simple et épurée
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explorez l'interface élégante de Calma et voyez comment l'application vous aide 
            à créer des ambiances apaisantes pour votre quotidien.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface mobile Calma montrant une liste de sons pour le sommeil"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface du mixeur sonore Calma pour personnaliser le bruit blanc"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Capture d'écran de l'application Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Interface du mixeur sonore pour créer des mélanges personnalisés"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Fonctionnalités exclusives
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Plus que de simples sons
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma va au-delà de la simple écoute avec des fonctionnalités immersives conçues pour 
            rendre vos routines plus personnelles et mémorables.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Brainwave Lab
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Expérimentez avec des fréquences immersives
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Découvrez des expériences sonores avancées conçues pour le sommeil, la concentration 
              et une déconnexion mentale profonde.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Respiration Guidée
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Respirez à un rythme apaisant
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Un guide visuel doux vous aide à transformer l'application en un véritable rituel 
              de relaxation, pas seulement un lecteur audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Night Sky Ritual
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Un moment de calme et de découverte
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Ajoutez une touche de merveille à votre routine avec une fonctionnalité qui rend 
              votre calme quotidien plus significatif.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Pourquoi Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Une expérience sereine, pensée pour vous
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma est conçue pour être élégante et fluide. Elle vous aide à créer un meilleur 
            environnement sonore sans distractions ni complexité inutile.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Créez votre propre atmosphère</h3>
            <p className="mt-4 leading-7 text-white/70">
              Mélangez les sons selon votre humeur et votre routine. Calma offre une expérience 
              beaucoup plus personnelle que les applications audio standards.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Sentez-vous apaisé, pas submergé</h3>
            <p className="mt-4 leading-7 text-white/70">
              L'interface est pensée pour favoriser le calme. Chaque écran vise la simplicité 
              et l'immersion pour un usage quotidien sans friction.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Une application, plusieurs rituels</h3>
            <p className="mt-4 leading-7 text-white/70">
              Utilisez Calma pour dormir, décompresser le soir, travailler ou simplement 
              avoir un fond sonore relaxant pendant votre journée.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Un design premium et chaleureux</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma allie un look soigné à un ton émotionnel doux, faisant de l'application 
              un endroit où l'on aime revenir chaque jour.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Explorer plus
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Découvrez Calma par intention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explorez les pages dédiées au sommeil, à la relaxation et à la concentration 
            pour trouver l'aspect de Calma qui convient le mieux à votre routine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Sommeil
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sons sommeil
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Découvrez comment Calma favorise des nuits plus calmes et des routines 
              de coucher personnalisées.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorer la page sommeil →
            </span>
          </Link>

          <Link
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relax
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Sons relaxants
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Découvrez un aspect plus doux de Calma conçu pour des soirées paisibles 
              et des rituels quotidiens calmes.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorer la page relax →
            </span>
          </Link>

          <Link
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Focus
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sons concentration
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Découvrez comment Calma aide à créer un environnement plus calme pour 
              le travail profond et l'étude.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorer la page concentration →
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guides
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Lisez nos guides sur le sommeil et le focus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Découvrez des articles pratiques sur les sons pour dormir, le bruit blanc et l'étude.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Sons de pluie pour dormir</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Pourquoi les sons de pluie réguliers sont parfaits pour calmer l'esprit.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Meilleurs sons pour le sommeil</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Pluie, bruit blanc et paysages sonores doux pour le coucher.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Meilleurs sons pour étudier</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Découvrez quels sons aident à la concentration et au focus.
            </p>
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Qu'est-ce que Calma ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma est une application de mixage sonore conçue pour vous aider à mieux dormir, 
              à vous détendre plus facilement et à rester concentré grâce à des mélanges audio personnalisés.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">À qui s'adresse Calma ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma s'adresse à tous ceux qui souhaitent une routine de coucher plus calme, un 
              moment de paix après le travail ou un fond sonore favorisant l'étude.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Puis-je créer mon propre mix sonore ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Calma est bâtie sur l'idée de créer votre propre environnement sonore relaxant 
              au lieu d'écouter une seule piste statique.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma est-elle disponible ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma est disponible sur Android et iOS, avec des améliorations continues 
              prévues au fil du temps.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma est-elle gratuite ou nécessite-t-elle un abonnement ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma propose une version gratuite et un déverrouillage premium à vie avec un paiement unique. Aucun abonnement mensuel ou annuel n'est requis.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma fonctionne-t-elle hors ligne ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma fonctionne complètement hors ligne. Vous pouvez mélanger et écouter vos sons sans être connecté à Internet.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma inclut-elle le bruit blanc, brun et rose ?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma inclut un bruit blanc, brun, rose et vert de haute qualité, que vous pouvez mélanger avec des sons de pluie, d'océan, de ventilateur et de nature.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:text-left lg:items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Commencer maintenant
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Téléchargez Calma et créez une routine plus douce
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Créez des paysages sonores personnalisés pour un meilleur sommeil, des soirées 
              plus calmes et une concentration accrue avec une application simple et élégante.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Télécharger Calma sur Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponible sur Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Télécharger Calma sur l'App Store"
              >
                <Image
                  src="/apple-appstore-badge.png"
                  alt="Télécharger dans l'App Store"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Vous cherchez la page dédiée au sommeil ?{" "}
          <Link
            href="/sleep-sounds-app"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            Découvrez notre page dédiée
          </Link>
        </p>
      </section>

      <MoreApps locale="fr" />
    </main>
  );
}
