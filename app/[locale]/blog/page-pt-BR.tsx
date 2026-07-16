import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "Guias de sons para dormir: ru\u00EDdo branco, foco e zumbido | Calma",
    description: "Explore guias baseados em evid\u00EAncias sobre sons do sono, cores de ru\u00EDdo, foco, TDAH, sons da natureza e zumbido, organizados em t\u00F3picos pr\u00E1ticos.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "Guias de sons para dormir: ru\u00EDdo branco, foco e zumbido | Calma",
        description: "Guias com conhecimento de evid\u00EAncias organizados em caminhos pr\u00E1ticos para sono, foco, cores de ru\u00EDdo, sons da natureza e zumbido.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Guias de sons para dormir: ru\u00EDdo branco, foco e zumbido | Calma",
        description: "Caminhos pr\u00E1ticos para sons do sono, cores de ru\u00EDdo, foco, sons da natureza e zumbido.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "Sons da natureza para relaxamento profundo",
        description: "Explore como paisagens sonoras naturais, como chuva e ondas do mar, podem atuar como ru\u00EDdo branco natural para melhorar sua rotina na hora de dormir.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "Melhores sons para dormir",
        description: "Um guia pr\u00E1tico sobre chuva, ru\u00EDdo branco e paisagens sonoras de sono mais suaves.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "Ru\u00EDdo branco para dormir",
        description: "Quando o ru\u00EDdo branco pode ajudar e como construir um ambiente mais calmo para dormir.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "Sons de chuva versus ru\u00EDdo branco",
        description: "Compare o conforto emocional, o mascaramento e a atmosfera da hora de dormir.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "Como construir uma rotina para a hora de dormir",
        description: "Maneiras simples de criar um ritmo noturno mais calmo que apoie o sono.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "Melhores sons para estudar",
        description: "Encontre os tipos de sons que podem ajudar na concentra\u00E7\u00E3o e no foco mais profundo.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "Batidas Binaurais: Evid\u00EAncias e Limites",
        description: "Entenda como as batidas binaurais s\u00E3o produzidas e por que os resultados das pesquisas permanecem confusos.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "T\u00E9cnicas de respira\u00E7\u00E3o guiada",
        description: "Explore m\u00E9todos respirat\u00F3rios calmantes para relaxamento, equil\u00EDbrio, sono e concentra\u00E7\u00E3o.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "Ru\u00EDdo marrom vs ru\u00EDdo branco vs ru\u00EDdo rosa",
        description: "Explore as diferen\u00E7as entre as cores do ru\u00EDdo e descubra qual \u00E9 a melhor para o seu foco ou sono.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "Sons de chuva para dormir e se concentrar",
        description: "Separe o mascaramento, o conforto pessoal e as pesquisas iniciais das alega\u00E7\u00F5es de que a chuva trata a ins\u00F4nia ou o TDAH.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "Ru\u00EDdo verde para dormir: significado e limites",
        description: "Aprenda o que os profissionais de marketing chamam de ru\u00EDdo verde, como ele difere das cores de ru\u00EDdo padr\u00E3o e quais evid\u00EAncias est\u00E3o faltando.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "Como escolher um aplicativo gratuito de ru\u00EDdo branco",
        description: "Compare aplicativos, m\u00E1quinas e streaming com uma lista de verifica\u00E7\u00E3o de \u00E1udio off-line, loops, timers e pre\u00E7os.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "Qual ru\u00EDdo colorido \u00E9 melhor para TDAH?",
        description: "Explore por que o ru\u00EDdo marrom \u00E9 frequentemente preferido ao ru\u00EDdo branco para TDAH, foco e superestimula\u00E7\u00E3o.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "Enriquecimento sonoro para zumbido",
        description: "Saiba como o som de fundo pode tornar o zumbido menos percept\u00EDvel e onde as evid\u00EAncias permanecem limitadas.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "Ru\u00EDdo branco para beb\u00EAs: um guia de uso mais seguro",
        description: "Precau\u00E7\u00F5es pr\u00E1ticas para usar som de fundo est\u00E1vel perto de beb\u00EAs e crian\u00E7as pequenas.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "Durma melhor",
        title: "Sons do sono e rotinas da hora de dormir",
        description: "Comece com o guia de compara\u00E7\u00E3o e, em seguida, explore o uso de m\u00E1scaras, os h\u00E1bitos de dormir e o uso mais seguro para crian\u00E7as.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "Entenda o som",
        title: "Ru\u00EDdo branco, rosa, marrom e verde",
        description: "Saiba o que as cores significam acusticamente, onde existem evid\u00EAncias e como os aplicativos se comparam a outras op\u00E7\u00F5es de reprodu\u00E7\u00E3o.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "Trabalhar e estudar",
        title: "Sons de foco e TDAH",
        description: "Compare o som de fundo para estudo com as evid\u00EAncias cl\u00EDnicas mais limitadas sobre TDAH e batimentos binaurais.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "Relaxe",
        title: "Som da natureza e relaxamento",
        description: "Explore a chuva, a \u00E1gua e o som da floresta sem transformar as pesquisas iniciais em promessas de que todos os ouvintes ir\u00E3o relaxar.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "Ou\u00E7a com cautela",
        title: "Zumbido e enriquecimento sonoro",
        description: "Comece com o guia focado na seguran\u00E7a e depois compare os sons de m\u00E1scara e seus perfis de frequ\u00EAncia.",
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
    description: "Guias sobre sons do sono, ru\u00EDdo branco, sons de foco e rotinas calmantes.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["pt"]) || article.href;
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
            name: "P\u00E1gina inicial",
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
          Encontre o guia de som certo para o seu objetivo
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explore caminhos práticos e conscientes de evidências sobre sons do sono, cores de ruído,
          foco, relaxamento e zumbido. Cada caminho começa com um guia amplo e
          em seguida, passa para questões mais específicas.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Caminhos de tópicos do blog">
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
                        ? "borda-esmeralda-400/25 bg-esmeralda-400/10" : "borda branca/10 bg-branca/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Comece aqui
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Leia o guia <span aria-hidden="true" className="ml-2">→</span>
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
              Aplicativo de sons para dormir
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplicativo de ruído branco
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplicativo de sons de foco
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
