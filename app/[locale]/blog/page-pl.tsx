import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "Przewodniki d\u017Awi\u0119kowe do snu: bia\u0142y szum, skupienie i szum w uszach | Calma",
    description: "Zapoznaj si\u0119 z opartymi na dowodach przewodnikami na temat d\u017Awi\u0119k\u00F3w podczas snu, kolor\u00F3w szum\u00F3w, koncentracji, ADHD, d\u017Awi\u0119k\u00F3w natury i szum\u00F3w usznych, zorganizowanych w praktyczne \u015Bcie\u017Cki tematyczne.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "Przewodniki d\u017Awi\u0119kowe do snu: bia\u0142y szum, skupienie i szum w uszach | Calma",
        description: "Oparte na dowodach przewodniki zorganizowane w praktyczne \u015Bcie\u017Cki dotycz\u0105ce snu, koncentracji, kolor\u00F3w ha\u0142asu, d\u017Awi\u0119k\u00F3w natury i szum\u00F3w usznych.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "pl_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Przewodniki d\u017Awi\u0119kowe do snu: bia\u0142y szum, skupienie i szum w uszach | Calma",
        description: "Praktyczne \u015Bcie\u017Cki tematyczne dotycz\u0105ce d\u017Awi\u0119k\u00F3w snu, kolor\u00F3w szum\u00F3w, skupienia, d\u017Awi\u0119k\u00F3w natury i szum\u00F3w usznych.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "D\u017Awi\u0119ki natury dla g\u0142\u0119bokiego relaksu",
        description: "Odkryj, jak naturalne krajobrazy d\u017Awi\u0119kowe, takie jak deszcz i fale oceanu, mog\u0105 dzia\u0142a\u0107 jak naturalny bia\u0142y szum, poprawiaj\u0105c Twoj\u0105 rutyn\u0119 przed snem.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "Najlepsze d\u017Awi\u0119ki do snu",
        description: "Praktyczny przewodnik po deszczu, bia\u0142ym szumie i spokojniejszych d\u017Awi\u0119kach podczas snu.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "Bia\u0142y szum na sen",
        description: "Kiedy bia\u0142y szum mo\u017Ce pom\u00F3c i jak stworzy\u0107 spokojniejsze \u015Brodowisko przed snem.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "D\u017Awi\u0119ki deszczu kontra bia\u0142y szum",
        description: "Por\u00F3wnaj komfort emocjonalny, maskowanie i atmosfer\u0119 przed snem.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "Jak zbudowa\u0107 rutyn\u0119 przed snem",
        description: "Proste sposoby na stworzenie spokojniejszego wieczornego rytmu, kt\u00F3ry wspiera sen.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "Najlepsze d\u017Awi\u0119ki do nauki",
        description: "Znajd\u017A rodzaje d\u017Awi\u0119k\u00F3w, kt\u00F3re mog\u0105 pom\u00F3c w koncentracji i g\u0142\u0119bszym skupieniu.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "Binaural Beats: dowody i ograniczenia",
        description: "Zrozumienie, w jaki spos\u00F3b powstaj\u0105 dudnienia r\u00F3\u017Cnicowe i dlaczego wyniki bada\u0144 pozostaj\u0105 niejednoznaczne.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "Techniki oddychania sterowanego",
        description: "Poznaj uspokajaj\u0105ce metody oddechowe zapewniaj\u0105ce relaks, r\u00F3wnowag\u0119, sen i skupienie.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "Szum br\u0105zowy kontra szum bia\u0142y kontra szum r\u00F3\u017Cowy",
        description: "Poznaj r\u00F3\u017Cnice mi\u0119dzy kolorami szumu i znajd\u017A ten, kt\u00F3ry najlepiej wp\u0142ywa na Twoj\u0105 koncentracj\u0119 lub sen.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "D\u017Awi\u0119ki deszczu poprawiaj\u0105ce sen i koncentracj\u0119",
        description: "Oddziel maskowanie, komfort osobisty i wczesne badania od twierdze\u0144, \u017Ce deszcz leczy bezsenno\u015B\u0107 lub ADHD.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "Zielony ha\u0142as dla snu: znaczenie i ograniczenia",
        description: "Dowiedz si\u0119, co marketerzy nazywaj\u0105 zielonym szumem, czym r\u00F3\u017Cni si\u0119 on od standardowych kolor\u00F3w szumu i jakich dowod\u00F3w brakuje.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "Jak wybra\u0107 bezp\u0142atn\u0105 aplikacj\u0119 White Noise",
        description: "Por\u00F3wnaj aplikacje, maszyny i przesy\u0142anie strumieniowe za pomoc\u0105 listy kontrolnej dotycz\u0105cej d\u017Awi\u0119ku offline, p\u0119tli, timer\u00F3w i cen.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "Jaki kolor szumu jest najlepszy dla ADHD?",
        description: "Dowiedz si\u0119, dlaczego br\u0105zowy szum jest cz\u0119sto preferowany zamiast bia\u0142ego szumu w przypadku ADHD, skupienia i nadmiernej stymulacji.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "Wzbogacanie d\u017Awi\u0119ku w przypadku szum\u00F3w usznych",
        description: "Dowiedz si\u0119, jak d\u017Awi\u0119ki t\u0142a mog\u0105 sprawi\u0107, \u017Ce szumy uszne b\u0119d\u0105 mniej zauwa\u017Calne i w przypadku kt\u00F3rych dowody s\u0105 ograniczone.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "Bia\u0142y szum dla niemowl\u0105t: przewodnik bezpiecznego u\u017Cytkowania",
        description: "Praktyczne \u015Brodki ostro\u017Cno\u015Bci dotycz\u0105ce stosowania sta\u0142ego d\u017Awi\u0119ku w tle w pobli\u017Cu niemowl\u0105t i ma\u0142ych dzieci.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "\u015Apij lepiej",
        title: "D\u017Awi\u0119ki do snu i rutyny przed snem",
        description: "Zacznij od przewodnika por\u00F3wnawczego, a nast\u0119pnie poznaj maskowanie, nawyki przed snem i bezpieczniejsze u\u017Cytkowanie dla dzieci.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "Zrozum d\u017Awi\u0119k",
        title: "Szum bia\u0142y, r\u00F3\u017Cowy, br\u0105zowy i zielony",
        description: "Dowiedz si\u0119, co kolory oznaczaj\u0105 pod wzgl\u0119dem akustycznym, gdzie istniej\u0105 dowody i jak aplikacje wypadaj\u0105 w por\u00F3wnaniu z innymi opcjami odtwarzania.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "Pracuj i studiuj",
        title: "D\u017Awi\u0119ki skupienia i ADHD",
        description: "Por\u00F3wnaj d\u017Awi\u0119ki t\u0142a do bada\u0144 z bardziej ograniczonymi dowodami klinicznymi dotycz\u0105cymi ADHD i dudnie\u0144 r\u00F3\u017Cnicowych.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "Odpr\u0119\u017C si\u0119",
        title: "D\u017Awi\u0119ki natury i relaks",
        description: "Poznaj d\u017Awi\u0119ki deszczu, wody i lasu, nie zamieniaj\u0105c wczesnych bada\u0144 w obietnice relaksu dla ka\u017Cdego s\u0142uchacza.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "S\u0142uchaj uwa\u017Cnie",
        title: "Szumy uszne i wzbogacenie d\u017Awi\u0119ku",
        description: "Rozpocznij od przewodnika po\u015Bwi\u0119conego bezpiecze\u0144stwu, a nast\u0119pnie por\u00F3wnaj d\u017Awi\u0119ki maskuj\u0105ce i ich profile cz\u0119stotliwo\u015Bci.",
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
    name: "Blog Calmy",
    url: "https://www.calmasounds.com/blog",
    description: "Przewodniki dotycz\u0105ce d\u017Awi\u0119k\u00F3w do snu, bia\u0142ego szumu, d\u017Awi\u0119k\u00F3w skupiaj\u0105cych i procedur uspokajaj\u0105cych.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["pl"]) || article.href;
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
            name: "Dom",
            item: "https://www.calmasounds.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Bloga",
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
          Blog Calmy
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Znajdź odpowiedni przewodnik dźwiękowy do swojego celu
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Eksploruj praktyczne, oparte na dowodach ścieżki dotyczące dźwięków snu, kolorów hałasu,
          skupienie, relaks i szumy uszne. Każda ścieżka zaczyna się od szerokiego przewodnika i
          następnie przechodzi do bardziej szczegółowych pytań.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Ścieżki tematów bloga">
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
                        ? "granica-szmaragd-400/25 bg-szmaragd-400/10" : "obramowanie-bia\u0142e/10 bg-bia\u0142e/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Zacznij tutaj
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Przeczytaj przewodnik <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Poznaj Calmę</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              Aplikacja Dźwięki do snu
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplikacja „biały szum”.
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Aplikacja dźwiękowa Focus
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
