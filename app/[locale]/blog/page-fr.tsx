import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";

type BlogHref = ComponentProps<typeof Link>["href"];

export const metadata: Metadata = {
  title: "Blog Calma | Guides sur le sommeil, le bruit blanc et la concentration",
  description:
    "Explorez les guides Calma sur les sons pour dormir, le bruit blanc, les routines de coucher et les paysages sonores favorisant la concentration.",
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog",
  },
  openGraph: {
    title: "Blog Calma | Guides sur le sommeil, le bruit blanc et la concentration",
    description:
      "Explorez les guides Calma sur les sons pour dormir, le bruit blanc, les routines de coucher et les paysages sonores favorisant la concentration.",
    url: "https://www.calmasounds.com/fr/blog",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Calma | Guides sur le sommeil, le bruit blanc et la concentration",
    description:
      "Explorez les guides Calma sur les sons pour dormir, le bruit blanc, les routines de coucher et les paysages sonores favorisant la concentration.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Sons de la nature pour une relaxation profonde",
    description:
      "Découvrez comment les paysages sonores naturels comme la pluie et les vagues peuvent améliorer votre routine de coucher.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Les meilleurs sons pour dormir",
    description:
      "Un guide pratique sur la pluie, le bruit blanc et les paysages sonores doux.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "Bruit blanc pour le sommeil",
    description:
      "Quand le bruit blanc peut aider et comment créer un environnement de coucher plus calme.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Sons de pluie vs Bruit blanc",
    description:
      "Comparez le confort émotionnel, le masquage sonore et l'atmosphère du coucher.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "Comment construire une routine de coucher",
    description:
      "Des moyens simples de créer un rythme de soirée plus calme qui favorise le sommeil.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Les meilleurs sons pour étudier",
    description:
      "Trouvez les types de sons qui peuvent aider à la concentration et au travail profond.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Battements binauraux pour le sommeil et la concentration",
    description:
      "Une introduction simple sur la façon dont les battements binauraux peuvent favoriser le calme et le focus.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Techniques de respiration guidée",
    description:
      "Explorez des méthodes de respiration apaisantes pour la relaxation, l'équilibre, le sommeil et la concentration.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Bruit brun vs Bruit blanc vs Bruit rose",
    description:
      "Explorez les différences entre les couleurs de bruit et trouvez celle qui convient le mieux à votre focus ou à votre sommeil.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Pourquoi les sons de pluie sont le secret d'un meilleur sommeil et focus",
    description: "Découvrez pourquoi les sons de pluie réguliers sont parfaits pour calmer l'esprit et vaincre l'insomnie.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Bruit vert pour le sommeil : La voie naturelle du repos",
    description: "Découvrez ce qu'est le bruit vert et pourquoi ses fréquences naturelles pourraient être le paysage sonore parfait pour dormir.",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "La meilleure application gratuite de bruit blanc pour le sommeil",
    description: "Vous cherchez des sons pour dormir gratuits ? Découvrez pourquoi Calma est le choix idéal pour des sons relaxants.",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "Couleurs de bruit et TDAH : ce que dit la recherche",
    description: "Comparez les bruits blanc, rose et brun, ainsi que les limites des données actuelles.",
  },
  {
    href: "/blog/sounds-for-tinnitus-relief",
    title: "Sons pour masquer les acouphènes",
    description: "Comparez des fonds sonores doux, les précautions d'écoute et les motifs de consultation.",
  },
  {
    href: "/blog/white-noise-for-babies",
    title: "Bruit blanc pour bébé : utilisation prudente",
    description: "Conseils de volume, distance et durée pour une routine de sommeil plus sûre.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Blog Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Guides sur le sommeil, le bruit blanc et la concentration
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explorez des articles pratiques sur les sons pour dormir, les routines de coucher, 
          le bruit blanc, la relaxation et la concentration profonde.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href as BlogHref}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
