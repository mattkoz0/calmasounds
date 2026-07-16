import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "Gu\u00EDas de sonidos para dormir: ruido blanco, concentraci\u00F3n y tinnitus | Calma",
    description: "Explore gu\u00EDas basadas en evidencia sobre sonidos del sue\u00F1o, colores de ruido, concentraci\u00F3n, TDAH, sonidos de la naturaleza y tinnitus, organizadas en temas pr\u00E1cticos.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "Gu\u00EDas de sonidos para dormir: ruido blanco, concentraci\u00F3n y tinnitus | Calma",
        description: "Gu\u00EDas basadas en evidencia organizadas en rutas pr\u00E1cticas para dormir, concentrarse, colores de ruido, sonidos de la naturaleza y tinnitus.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "es_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gu\u00EDas de sonidos para dormir: ruido blanco, concentraci\u00F3n y tinnitus | Calma",
        description: "Rutas tem\u00E1ticas pr\u00E1cticas para sonidos del sue\u00F1o, colores de ruido, concentraci\u00F3n, sonidos de la naturaleza y tinnitus.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "Sonidos de la naturaleza para una relajaci\u00F3n profunda",
        description: "Explore c\u00F3mo los paisajes sonoros naturales, como la lluvia y las olas del oc\u00E9ano, pueden actuar como ruido blanco natural para mejorar su rutina a la hora de acostarse.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "Los mejores sonidos para dormir",
        description: "Una gu\u00EDa pr\u00E1ctica sobre la lluvia, el ruido blanco y los paisajes sonoros m\u00E1s suaves para dormir.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "Ruido blanco para dormir",
        description: "Cu\u00E1ndo el ruido blanco puede ayudar y c\u00F3mo crear un ambiente m\u00E1s tranquilo a la hora de dormir.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "Sonidos de lluvia versus ruido blanco",
        description: "Compare el confort emocional, el enmascaramiento y la atm\u00F3sfera a la hora de dormir.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "C\u00F3mo crear una rutina para la hora de dormir",
        description: "Formas sencillas de crear un ritmo nocturno m\u00E1s tranquilo que favorezca el sue\u00F1o.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "Los mejores sonidos para estudiar",
        description: "Encuentre los tipos de sonidos que pueden ayudar a concentrarse y concentrarse m\u00E1s profundamente.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "Latidos binaurales: evidencia y l\u00EDmites",
        description: "Comprenda c\u00F3mo se producen los latidos binaurales y por qu\u00E9 los resultados de las investigaciones siguen siendo contradictorios.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "T\u00E9cnicas de respiraci\u00F3n guiada",
        description: "Explore m\u00E9todos de respiraci\u00F3n calmantes para relajarse, equilibrar, dormir y concentrarse.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "Ruido marr\u00F3n versus ruido blanco versus ruido rosa",
        description: "Explora las diferencias entre los colores del ruido y descubre cu\u00E1l es mejor para tu concentraci\u00F3n o tu sue\u00F1o.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "Sonidos de lluvia para dormir y concentrarse",
        description: "Separe el uso de mascarillas, la comodidad personal y las primeras investigaciones de las afirmaciones de que la lluvia trata el insomnio o el TDAH.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "Ruido verde para dormir: significado y l\u00EDmites",
        description: "Aprenda lo que los especialistas en marketing llaman ruido verde, en qu\u00E9 se diferencia de los colores de ruido est\u00E1ndar y qu\u00E9 evidencia falta.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "C\u00F3mo elegir una aplicaci\u00F3n gratuita de ruido blanco",
        description: "Compare aplicaciones, m\u00E1quinas y streaming con una lista de verificaci\u00F3n de audio, bucles, temporizadores y precios sin conexi\u00F3n.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "\u00BFQu\u00E9 ruido de color es mejor para el TDAH?",
        description: "Explore por qu\u00E9 a menudo se prefiere el ruido marr\u00F3n al ruido blanco para el TDAH, la concentraci\u00F3n y la sobreestimulaci\u00F3n.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "Enriquecimiento de sonido para el tinnitus",
        description: "Descubra c\u00F3mo el sonido de fondo puede hacer que el tinnitus sea menos perceptible y d\u00F3nde la evidencia sigue siendo limitada.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "Ruido blanco para beb\u00E9s: una gu\u00EDa de uso m\u00E1s seguro",
        description: "Precauciones pr\u00E1cticas para utilizar un sonido de fondo constante cerca de beb\u00E9s y ni\u00F1os peque\u00F1os.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "Dormir mejor",
        title: "Sonidos para dormir y rutinas para dormir",
        description: "Comience con la gu\u00EDa comparativa, luego explore el uso de mascarillas, los h\u00E1bitos a la hora de acostarse y el uso m\u00E1s seguro para los ni\u00F1os.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "entender el sonido",
        title: "Ruido blanco, rosa, marr\u00F3n y verde.",
        description: "Descubra qu\u00E9 significan los colores ac\u00FAsticamente, d\u00F3nde existe evidencia y c\u00F3mo se comparan las aplicaciones con otras opciones de reproducci\u00F3n.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "trabajar y estudiar",
        title: "Sonidos de enfoque y TDAH",
        description: "Compare el sonido de fondo para el estudio con la evidencia cl\u00EDnica m\u00E1s limitada sobre el TDAH y los latidos binaurales.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "relajarse",
        title: "Sonido de la naturaleza y relajaci\u00F3n.",
        description: "Explore la lluvia, el agua y el sonido del bosque sin convertir las investigaciones iniciales en promesas de que todos los oyentes se relajar\u00E1n.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "Escuche con cautela",
        title: "Tinnitus y enriquecimiento del sonido.",
        description: "Comience con la gu\u00EDa centrada en la seguridad, luego compare los sonidos de enmascaramiento y sus perfiles de frecuencia.",
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
    name: "Blog de Calma",
    url: "https://www.calmasounds.com/blog",
    description: "Gu\u00EDas sobre sonidos para dormir, ruido blanco, sonidos de concentraci\u00F3n y rutinas calmantes.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["es"]) || article.href;
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
            name: "Inicio",
            item: "https://www.calmasounds.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
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
          Blog de Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Encuentre la guía de sonido adecuada para su objetivo
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explore caminos prácticos y basados en evidencia sobre los sonidos del sueño, los colores del ruido,
          concentración, relajación y tinnitus. Cada camino comienza con una guía amplia y
          Luego pasa a preguntas más específicas.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Rutas de temas del blog">
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
                        ? "borde-esmeralda-400/25 bg-esmeralda-400/10" : "borde-blanco/10 bg-blanco/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Empieza aquí
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Leer guía <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explorar Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              Aplicación de sonidos para dormir
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplicación de ruido blanco
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplicación de sonidos de enfoque
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
