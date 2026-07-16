import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "Guides sonores du sommeil\u00A0: bruit blanc, concentration et acouph\u00E8nes | Calma",
    description: "Explorez des guides factuels sur les sons du sommeil, les couleurs du bruit, la concentration, le TDAH, les sons naturels et les acouph\u00E8nes, organis\u00E9s en parcours th\u00E9matiques pratiques.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "Guides sonores du sommeil\u00A0: bruit blanc, concentration et acouph\u00E8nes | Calma",
        description: "Des guides fond\u00E9s sur des preuves organis\u00E9s en parcours pratiques pour le sommeil, la concentration, les couleurs du bruit, les sons de la nature et les acouph\u00E8nes.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "fr_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Guides sonores du sommeil\u00A0: bruit blanc, concentration et acouph\u00E8nes | Calma",
        description: "Parcours th\u00E9matiques pratiques sur les sons du sommeil, les couleurs du bruit, la concentration, les sons de la nature et les acouph\u00E8nes.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "Des sons de la nature pour une relaxation profonde",
        description: "D\u00E9couvrez comment les paysages sonores naturels comme la pluie et les vagues de l'oc\u00E9an peuvent agir comme un bruit blanc naturel pour am\u00E9liorer votre routine du coucher.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "Meilleurs sons pour dormir",
        description: "Un guide pratique sur la pluie, le bruit blanc et les paysages sonores plus doux du sommeil.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "Bruit blanc pour dormir",
        description: "Quand le bruit blanc peut aider et comment cr\u00E9er un environnement plus calme \u00E0 l\u2019heure du coucher.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "Sons de pluie vs bruit blanc",
        description: "Comparez le confort \u00E9motionnel, le masquage et l\u2019atmosph\u00E8re du coucher.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "Comment cr\u00E9er une routine au coucher",
        description: "Des moyens simples de cr\u00E9er un rythme de soir\u00E9e plus calme qui favorise le sommeil.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "Meilleurs sons pour \u00E9tudier",
        description: "Trouvez les types de sons qui peuvent aider \u00E0 la concentration et \u00E0 une concentration plus profonde.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "Battements binauraux\u00A0: preuves et limites",
        description: "Comprenez comment les battements binauraux sont produits et pourquoi les r\u00E9sultats de la recherche restent mitig\u00E9s.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "Techniques de respiration guid\u00E9e",
        description: "Explorez des m\u00E9thodes de respiration apaisantes pour la relaxation, l\u2019\u00E9quilibre, le sommeil et la concentration.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "Bruit brun vs bruit blanc vs bruit rose",
        description: "Explorez les diff\u00E9rences entre les couleurs du bruit et trouvez celle qui convient le mieux \u00E0 votre concentration ou \u00E0 votre sommeil.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "Des sons de pluie pour dormir et se concentrer",
        description: "S\u00E9parez le masquage, le confort personnel et les premi\u00E8res recherches des affirmations selon lesquelles la pluie traite l'insomnie ou le TDAH.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "Bruit vert pour dormir : signification et limites",
        description: "D\u00E9couvrez ce que les sp\u00E9cialistes du marketing appellent le bruit vert, en quoi il diff\u00E8re des couleurs de bruit standard et quelles preuves manquent.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "Comment choisir une application gratuite de bruit blanc",
        description: "Comparez les applications, les machines et le streaming avec une liste de contr\u00F4le pour l'audio hors ligne, les boucles, les minuteries et les prix.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "Quel bruit de couleur est le meilleur pour le TDAH ?",
        description: "D\u00E9couvrez pourquoi le bruit brun est souvent pr\u00E9f\u00E9r\u00E9 au bruit blanc en cas de TDAH, de concentration et de surstimulation.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "Enrichissement sonore pour les acouph\u00E8nes",
        description: "D\u00E9couvrez comment le bruit de fond peut rendre les acouph\u00E8nes moins perceptibles et o\u00F9 les preuves restent limit\u00E9es.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "Bruit blanc pour les b\u00E9b\u00E9s\u00A0: un guide d'utilisation plus s\u00FBre",
        description: "Pr\u00E9cautions pratiques pour utiliser un bruit de fond constant \u00E0 proximit\u00E9 des b\u00E9b\u00E9s et des jeunes enfants.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "Dormez mieux",
        title: "Sons du sommeil et routines du coucher",
        description: "Commencez par le guide de comparaison, puis explorez le masquage, les habitudes au coucher et une utilisation plus s\u00FBre pour les enfants.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "Comprendre le son",
        title: "Bruit blanc, rose, marron et vert",
        description: "D\u00E9couvrez ce que signifient les couleurs sur le plan acoustique, o\u00F9 les preuves existent et comment les applications se comparent \u00E0 d'autres options de lecture.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "Travailler et \u00E9tudier",
        title: "Sons de concentration et TDAH",
        description: "Comparez le bruit de fond pour l'\u00E9tude avec les preuves cliniques plus limit\u00E9es concernant le TDAH et les battements binauraux.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "D\u00E9tendez-vous",
        title: "Son de la nature et d\u00E9tente",
        description: "Explorez le son de la pluie, de l'eau et de la for\u00EAt sans transformer les premi\u00E8res recherches en promesses que chaque auditeur se d\u00E9tendra.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "\u00C9coutez attentivement",
        title: "Acouph\u00E8nes et enrichissement sonore",
        description: "Commencez par le guide ax\u00E9 sur la s\u00E9curit\u00E9, puis comparez les sons de masquage et leurs profils de fr\u00E9quence.",
        articleHrefs: [
            "/blog/sounds-for-tinnitus-relief",
            "/blog/white-noise-for-sleep",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        ],
    },
] as const;
const articlesByHref = new Map(articles.map((article) => [article.href, article]));
const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Calma",
    url: "https://www.calmasounds.com/blog",
    description: "Guides sur les sons du sommeil, le bruit blanc, les sons de concentration et les routines apaisantes.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["fr"]) || article.href;
        return {
            "@type": "Article",
            headline: article.title,
            url: `https://www.calmasounds.com${localizedPath}`,
        };
    }),
};
const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.calmasounds.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blogue",
            item: "https://www.calmasounds.com/blog"
        }
    ]
};
export default function BlogPage() {
    return (<main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogJsonLd),
        }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
        }}/>



      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Blog Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Trouvez le guide sonore adapté à votre objectif
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explorez des pistes pratiques et fondées sur des données probantes sur les sons du sommeil, les couleurs des bruits,
          concentration, relaxation et acouphènes. Chaque parcours commence par un guide général et
          passe ensuite à des questions plus spécifiques.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Chemins de sujets de blog">
          {clusters.map((cluster) => (<a key={cluster.id} href={`#${cluster.id}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white">
              {cluster.label}
            </a>))}
        </nav>

        <div className="mt-16 space-y-20">
          {clusters.map((cluster) => {
            const clusterArticles = cluster.articleHrefs
                .map((href) => articlesByHref.get(href))
                .filter((article): article is (typeof articles)[number] => Boolean(article));
            return (<section key={cluster.id} id={cluster.id} className="scroll-mt-28">
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-300/80">
                  {cluster.label}
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{cluster.title}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-white/70">{cluster.description}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {clusterArticles.map((article, index) => (<Link key={`${cluster.id}-${article.href}`} href={article.href as BlogHref} className={`group rounded-3xl border p-7 transition hover:-translate-y-0.5 hover:bg-white/10 ${index === 0
                        ? "bordure-\u00E9meraude-400/25 bg-\u00E9meraude-400/10" : "bordure-blanc/10 bg-blanc/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Commencez ici
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Lire le guide <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explorez Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              Application Sons du sommeil
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Application de bruit blanc
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Application Focus Sounds
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
