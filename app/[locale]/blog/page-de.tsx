import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "Ratgeber zu Schlafger\u00E4uschen: Wei\u00DFes Rauschen, Konzentration und Tinnitus | Calma",
    description: "Entdecken Sie evidenzbasierte Leitf\u00E4den zu Schlafger\u00E4uschen, Ger\u00E4uschfarben, Konzentration, ADHS, Naturger\u00E4uschen und Tinnitus, gegliedert in praktische Themenpfade.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "Ratgeber zu Schlafger\u00E4uschen: Wei\u00DFes Rauschen, Konzentration und Tinnitus | Calma",
        description: "Evidenzbasierte Leitf\u00E4den, gegliedert nach praktischen Pfaden f\u00FCr Schlaf, Konzentration, Ger\u00E4uschfarben, Naturger\u00E4usche und Tinnitus.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ratgeber zu Schlafger\u00E4uschen: Wei\u00DFes Rauschen, Konzentration und Tinnitus | Calma",
        description: "Praktische Themenpfade zu Schlafger\u00E4uschen, Ger\u00E4uschfarben, Fokus, Naturger\u00E4uschen und Tinnitus.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "Naturger\u00E4usche f\u00FCr tiefe Entspannung",
        description: "Entdecken Sie, wie nat\u00FCrliche Klanglandschaften wie Regen und Meereswellen als nat\u00FCrliches wei\u00DFes Rauschen Ihre Schlafenszeitroutine verbessern k\u00F6nnen.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "Beste Ger\u00E4usche zum Schlafen",
        description: "Ein praktischer Leitfaden f\u00FCr Regen, wei\u00DFes Rauschen und sanftere Schlafger\u00E4usche.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "Wei\u00DFes Rauschen zum Schlafen",
        description: "Wann wei\u00DFes Rauschen helfen kann und wie man eine ruhigere Schlafenszeitumgebung schafft.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "Regenger\u00E4usche vs. wei\u00DFes Rauschen",
        description: "Vergleichen Sie emotionalen Komfort, Maskierung und Schlafatmosph\u00E4re.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "So bauen Sie eine Schlafenszeitroutine auf",
        description: "Einfache M\u00F6glichkeiten, einen ruhigeren Abendrhythmus zu schaffen, der den Schlaf unterst\u00FCtzt.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "Beste Sounds zum Lernen",
        description: "Finden Sie die Arten von Ger\u00E4uschen, die die Konzentration und tiefere Konzentration f\u00F6rdern k\u00F6nnen.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "Binaurale Beats: Beweise und Grenzen",
        description: "Verstehen Sie, wie binaurale Beats erzeugt werden und warum die Forschungsergebnisse nach wie vor uneinheitlich sind.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "Gef\u00FChrte Atemtechniken",
        description: "Entdecken Sie beruhigende Atemmethoden f\u00FCr Entspannung, Gleichgewicht, Schlaf und Konzentration.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "Braunes Rauschen vs. wei\u00DFes Rauschen vs. rosa Rauschen",
        description: "Entdecken Sie die Unterschiede zwischen den Ger\u00E4uschfarben und finden Sie heraus, welche f\u00FCr Ihre Konzentration oder Ihren Schlaf am besten geeignet ist.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "Regenger\u00E4usche f\u00FCr Schlaf und Konzentration",
        description: "Trennen Sie Maskierung, pers\u00F6nlichen Komfort und fr\u00FChe Forschung von Behauptungen, dass Regen Schlaflosigkeit oder ADHS behandelt.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "Gr\u00FCner L\u00E4rm f\u00FCr den Schlaf: Bedeutung und Grenzen",
        description: "Erfahren Sie, was Vermarkter gr\u00FCnes Rauschen nennen, wie es sich von Standard-Rauschenfarben unterscheidet und welche Belege fehlen.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "So w\u00E4hlen Sie eine kostenlose White Noise-App aus",
        description: "Vergleichen Sie Apps, Maschinen und Streaming mit einer Checkliste f\u00FCr Offline-Audio, Loops, Timer und Preise.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "Welches Farbrauschen eignet sich am besten f\u00FCr ADHS?",
        description: "Entdecken Sie, warum braunes Rauschen bei ADHS, Konzentration und \u00DCberstimulation oft dem wei\u00DFen Rauschen vorgezogen wird.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "Klanganreicherung bei Tinnitus",
        description: "Erfahren Sie, wie Hintergrundger\u00E4usche Tinnitus weniger wahrnehmbar machen k\u00F6nnen und wo die Beweise daf\u00FCr noch begrenzt sind.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "Wei\u00DFes Rauschen f\u00FCr Babys: Ein Leitfaden zur sichereren Verwendung",
        description: "Praktische Vorsichtsma\u00DFnahmen f\u00FCr die Verwendung gleichm\u00E4\u00DFiger Hintergrundger\u00E4usche in der N\u00E4he von Babys und Kleinkindern.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "Besser schlafen",
        title: "Schlafger\u00E4usche und Schlafenszeitroutinen",
        description: "Beginnen Sie mit dem Vergleichsleitfaden und erkunden Sie dann Maskierung, Schlafgewohnheiten und die sicherere Verwendung f\u00FCr Kinder.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "Verstehen Sie den Klang",
        title: "Wei\u00DFes, rosafarbenes, braunes und gr\u00FCnes Rauschen",
        description: "Erfahren Sie, was die Farben akustisch bedeuten, wo Beweise vorliegen und wie Apps im Vergleich zu anderen Wiedergabeoptionen abschneiden.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "Arbeiten und studieren",
        title: "Fokusger\u00E4usche und ADHS",
        description: "Vergleichen Sie Hintergrundger\u00E4usche f\u00FCr die Studie mit der begrenzteren klinischen Evidenz zu ADHS und binauralen Beats.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "Entspannen Sie sich",
        title: "Naturklang und Entspannung",
        description: "Erkunden Sie Regen, Wasser und Waldger\u00E4usche, ohne fr\u00FChe Recherchen in Versprechen zu verwandeln, dass sich jeder Zuh\u00F6rer entspannen wird.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "H\u00F6ren Sie aufmerksam zu",
        title: "Tinnitus und Klanganreicherung",
        description: "Beginnen Sie mit dem sicherheitsorientierten Leitfaden und vergleichen Sie dann Maskierungsger\u00E4usche und deren Frequenzprofile.",
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
    name: "Calma-Blog",
    url: "https://www.calmasounds.com/blog",
    description: "Leitf\u00E4den zu Schlafger\u00E4uschen, wei\u00DFem Rauschen, Fokusger\u00E4uschen und beruhigenden Routinen.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["de"]) || article.href;
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
            name: "Zuhause",
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
          Calma-Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Finden Sie den passenden Soundguide für Ihr Ziel
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Entdecken Sie praktische, evidenzbasierte Wege zu Schlafgeräuschen, Geräuschfarben,
          Konzentration, Entspannung und Tinnitus. Jeder Weg beginnt mit einem umfassenden Leitfaden und
          geht dann zu spezifischeren Fragen über.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Blog-Themenpfade">
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
                        ? "border-smaragd-400/25 bg-smaragd-400/10" : "Rand-Wei\u00DF/10 BG-Wei\u00DF/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Beginnen Sie hier
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Leitfaden lesen <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Entdecken Sie Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              Schlafgeräusche-App
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Weißes Rauschen-App
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Focus-Sounds-App
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
