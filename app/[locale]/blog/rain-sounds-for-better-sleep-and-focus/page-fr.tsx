import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "Pourquoi les bruits de pluie sont le secret ultime pour un meilleur sommeil et une meilleure concentration | Blog Calma",
  description:
    "Découvrez pourquoi les bruits de pluie réguliers sont parfaits pour calmer votre esprit, vaincre l'insomnie et vous garder concentré pendant le travail profond. Découvrez la science qui se cache derrière.",
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/rain-sounds-for-better-sleep-and-focus",
  },
  openGraph: {
    title: "Pourquoi les bruits de pluie sont le secret ultime pour un meilleur sommeil et une meilleure concentration",
    description:
      "Découvrez pourquoi les bruits de pluie réguliers sont parfaits pour calmer votre esprit, vaincre l'insomnie et vous garder concentré.",
    url: "https://www.calmasounds.com/fr/blog/rain-sounds-for-better-sleep-and-focus",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pourquoi les bruits de pluie sont le secret ultime pour un meilleur sommeil et une meilleure concentration",
  description:
    "Découvrez pourquoi les bruits de pluie réguliers sont parfaits pour calmer votre esprit, vaincre l'insomnie et vous garder concentré pendant le travail profond.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
    logo: {
      "@type": "ImageObject",
      url: "https://www.calmasounds.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.calmasounds.com/fr/blog/rain-sounds-for-better-sleep-and-focus",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.calmasounds.com/fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/fr/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bruits de pluie pour le sommeil et la concentration",
      item: "https://www.calmasounds.com/fr/blog/rain-sounds-for-better-sleep-and-focus",
    },
  ],
};

export default function RainSoundsBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            ← Retour au Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Pourquoi les bruits de pluie sont le secret ultime pour un meilleur sommeil et une meilleure concentration
        </h1>
        
        <div className="mt-8">
          {/* YouTube Shorts Embed */}
          <div className="flex justify-center mb-8">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <YouTubeEmbed
                videoId="ds-fFkoWBUo"
                title="Lecteur vidéo YouTube"
              />
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Il est universellement reconnu que le crépitement régulier des gouttes de pluie contre une fenêtre crée une atmosphère particulièrement réconfortante. Mais au-delà du simple fait de se sentir à l'aise, il existe une véritable science pour étayer les bienfaits des <strong>bruits de pluie</strong>. Que vous ayez du mal à vous endormir le soir ou que vous soyez distrait pendant que vous essayez d'étudier, l'intégration de paysages sonores naturels peut profondément améliorer vos routines.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">La magie derrière les sons de sommeil</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Nos cerveaux recherchent naturellement des motifs. Le bruit rythmique et non menaçant de la pluie qui tombe crée une couverture sonore continue — souvent comparée au bruit rose. Cette couverture acoustique masque les bruits de fond perturbateurs (comme la circulation soudaine, un chien qui aboie ou un voisin bruyant) qui pourraient autrement vous réveiller en sursaut. Les <strong>sons de sommeil</strong> construits autour de véritables boucles de pluie aident votre cerveau à se sentir en sécurité, vous plongeant doucement dans des cycles de sommeil profond.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Pourquoi les sons de concentration vous gardent dans la zone</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Bien que le silence puisse sembler idéal pour la concentration, une pièce complètement silencieuse peut paradoxalement rendre les minuscules bruits de fond beaucoup plus distrayants. C'est là qu'interviennent les <strong>sons de concentration</strong>. La pluie agit comme un masque actif. Écouter l'ambiance délicate et régulière d'une tempête de pluie peut diminuer la vigilance du cerveau aux interruptions soudaines. Pour les personnes qui étudient, lisent ou travaillent de longues heures — en particulier celles qui gèrent le TDAH — une légère bruine est un ancrage auditif constant qui favorise une concentration continue sans attirer l'attention consciente.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Créer votre rituel personnel</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Tous les enregistrements de pluie ne se valent pas. Certains préfèrent les orages dramatiques et lourds, tandis que d'autres s'endorment facilement au son d'une pluie douce frappant les feuilles. La beauté des applications modernes de mixage sonore est la capacité de superposer votre environnement. En choisissant des <strong>bruits de pluie</strong> de haute qualité et en les mélangeant avec un vent doux ou un piano doux, vous créez votre zone de confort exacte.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Prêt à améliorer votre sommeil et votre concentration ?</h3>
            <p className="mt-4 leading-7 text-white/70">
              L'application Calma propose des mélanges de pluie minutieusement conçus aux côtés de couches de bruit blanc personnalisées. Créez votre paysage sonore personnalisé et prenez le contrôle de votre environnement audio.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Télécharger l'application Calma sur Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponible sur Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
