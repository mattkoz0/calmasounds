import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "\uC218\uBA74 \uC0AC\uC6B4\uB4DC \uAC00\uC774\uB4DC: \uBC31\uC0C9\uC18C\uC74C, \uCD08\uC810 \uBC0F \uC774\uBA85 | Calma",
    description: "\uC2E4\uC6A9\uC801\uC778 \uC8FC\uC81C \uACBD\uB85C\uB85C \uAD6C\uC131\uB41C \uC218\uBA74 \uC18C\uB9AC, \uC18C\uC74C \uC0C9\uC0C1, \uC9D1\uC911\uB825, ADHD, \uC790\uC5F0 \uC18C\uB9AC \uBC0F \uC774\uBA85\uC5D0 \uB300\uD55C \uC99D\uAC70 \uC778\uC2DD \uAC00\uC774\uB4DC\uB97C \uC0B4\uD3B4\uBCF4\uC138\uC694.",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "\uC218\uBA74 \uC0AC\uC6B4\uB4DC \uAC00\uC774\uB4DC: \uBC31\uC0C9\uC18C\uC74C, \uCD08\uC810 \uBC0F \uC774\uBA85 | Calma",
        description: "\uC218\uBA74, \uC9D1\uC911\uB825, \uC18C\uC74C \uC0C9\uC0C1, \uC790\uC5F0\uC74C, \uC774\uBA85\uC5D0 \uB300\uD55C \uC2E4\uC81C \uACBD\uB85C\uB85C \uAD6C\uC131\uB41C \uC99D\uAC70 \uC778\uC2DD \uAC00\uC774\uB4DC\uC785\uB2C8\uB2E4.",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "\uC218\uBA74 \uC0AC\uC6B4\uB4DC \uAC00\uC774\uB4DC: \uBC31\uC0C9\uC18C\uC74C, \uCD08\uC810 \uBC0F \uC774\uBA85 | Calma",
        description: "\uC218\uBA74 \uC18C\uB9AC, \uC18C\uC74C \uC0C9\uC0C1, \uCD08\uC810, \uC790\uC5F0 \uC18C\uB9AC \uBC0F \uC774\uBA85\uC5D0 \uB300\uD55C \uC2E4\uC6A9\uC801\uC778 \uC8FC\uC81C \uACBD\uB85C\uC785\uB2C8\uB2E4.",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "\uAE4A\uC740 \uD734\uC2DD\uC744 \uC704\uD55C \uC790\uC5F0\uC758 \uC18C\uB9AC",
        description: "\uBE44\uB098 \uD30C\uB3C4 \uAC19\uC740 \uC790\uC5F0\uC758 \uC18C\uB9AC \uD48D\uACBD\uC774 \uC5B4\uB5BB\uAC8C \uC790\uC5F0 \uBC31\uC0C9 \uC18C\uC74C\uC73C\uB85C \uC791\uC6A9\uD558\uC5EC \uCDE8\uCE68 \uC2DC\uAC04 \uB8E8\uD2F4\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "\uC218\uBA74\uC744 \uC704\uD55C \uCD5C\uACE0\uC758 \uC18C\uB9AC",
        description: "\uBE44, \uBC31\uC0C9\uC18C\uC74C, \uBD80\uB4DC\uB7EC\uC6B4 \uC218\uBA74 \uC18C\uB9AC\uC5D0 \uB300\uD55C \uC2E4\uC6A9\uC801\uC778 \uAC00\uC774\uB4DC\uC785\uB2C8\uB2E4.",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "\uC218\uBA74\uC744 \uC704\uD55C \uBC31\uC0C9\uC18C\uC74C",
        description: "\uBC31\uC0C9\uC18C\uC74C\uC774 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uACBD\uC6B0\uC640 \uC870\uC6A9\uD55C \uCDE8\uCE68 \uD658\uACBD\uC744 \uAD6C\uCD95\uD558\uB294 \uBC29\uBC95.",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "\uBE57\uC18C\uB9AC\uC640 \uBC31\uC0C9\uC18C\uC74C",
        description: "\uC815\uC11C\uC801 \uD3B8\uC548\uD568, \uB9C8\uC2A4\uD0B9, \uCDE8\uCE68 \uBD84\uC704\uAE30\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "\uCDE8\uCE68 \uC2DC\uAC04 \uB8E8\uD2F4\uC744 \uAD6C\uCD95\uD558\uB294 \uBC29\uBC95",
        description: "\uC218\uBA74\uC744 \uC9C0\uC6D0\uD558\uB294 \uCC28\uBD84\uD55C \uC800\uB141 \uB9AC\uB4EC\uC744 \uB9CC\uB4DC\uB294 \uAC04\uB2E8\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "\uACF5\uBD80\uB97C \uC704\uD55C \uCD5C\uACE0\uC758 \uC18C\uB9AC",
        description: "\uC9D1\uC911\uB825\uACFC \uB354 \uAE4A\uC740 \uC9D1\uC911\uC5D0 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uB294 \uC885\uB958\uC758 \uC18C\uB9AC\uB97C \uCC3E\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "\uBC14\uC774\uB178\uB7F4 \uBE44\uD2B8: \uC99D\uAC70\uC640 \uD55C\uACC4",
        description: "\uBC14\uC774\uB178\uB7F4 \uBE44\uD2B8\uAC00 \uC0DD\uC131\uB418\uB294 \uBC29\uC2DD\uACFC \uC5F0\uAD6C \uACB0\uACFC\uAC00 \uD63C\uD569\uB41C \uC774\uC720\uB97C \uC774\uD574\uD569\uB2C8\uB2E4.",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "\uC720\uB3C4 \uD638\uD761\uBC95",
        description: "\uD734\uC2DD, \uADE0\uD615, \uC218\uBA74 \uBC0F \uC9D1\uC911\uC744 \uC704\uD55C \uC9C4\uC815 \uD638\uD761 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "\uBE0C\uB77C\uC6B4 \uB178\uC774\uC988 vs \uD654\uC774\uD2B8 \uB178\uC774\uC988 vs \uD551\uD06C \uB178\uC774\uC988",
        description: "\uC18C\uC74C \uC0C9\uC0C1\uC758 \uCC28\uC774\uC810\uC744 \uC0B4\uD3B4\uBCF4\uACE0 \uC9D1\uC911\uC774\uB098 \uC218\uBA74\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD55C \uC0C9\uC0C1\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "\uC218\uBA74\uACFC \uC9D1\uC911\uC744 \uC704\uD55C \uBE57\uC18C\uB9AC",
        description: "\uBE44\uAC00 \uBD88\uBA74\uC99D\uC774\uB098 ADHD\uB97C \uCE58\uB8CC\uD55C\uB2E4\uB294 \uC8FC\uC7A5\uACFC \uB9C8\uC2A4\uD0B9, \uAC1C\uC778\uC801\uC778 \uD3B8\uC548\uD568 \uBC0F \uCD08\uAE30 \uC5F0\uAD6C\uB97C \uBD84\uB9AC\uD558\uC138\uC694.",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "\uC218\uBA74\uC744 \uC704\uD55C \uB179\uC0C9 \uC18C\uC74C: \uC758\uBBF8\uC640 \uD55C\uACC4",
        description: "\uB9C8\uCF00\uD305 \uB2F4\uB2F9\uC790\uAC00 \uB179\uC0C9 \uC18C\uC74C\uC774\uB77C\uACE0 \uBD80\uB974\uB294 \uAC83\uC774 \uBB34\uC5C7\uC778\uC9C0, \uC774\uAC83\uC774 \uD45C\uC900 \uC18C\uC74C \uC0C9\uC0C1\uACFC \uC5B4\uB5BB\uAC8C \uB2E4\uB978\uC9C0, \uC5B4\uB5A4 \uC99D\uAC70\uAC00 \uB204\uB77D\uB418\uC5C8\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "\uBB34\uB8CC \uBC31\uC0C9\uC18C\uC74C \uC571\uC744 \uC120\uD0DD\uD558\uB294 \uBC29\uBC95",
        description: "\uC624\uD504\uB77C\uC778 \uC624\uB514\uC624, \uB8E8\uD504, \uD0C0\uC774\uBA38 \uBC0F \uAC00\uACA9\uC5D0 \uB300\uD55C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC571, \uCEF4\uD4E8\uD130 \uBC0F \uC2A4\uD2B8\uB9AC\uBC0D\uC744 \uBE44\uAD50\uD558\uC138\uC694.",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "ADHD\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD55C \uC0C9\uC0C1 \uC7A1\uC74C\uC740 \uBB34\uC5C7\uC785\uB2C8\uAE4C?",
        description: "ADHD, \uC9D1\uC911\uB825, \uACFC\uC789 \uC790\uADF9\uC5D0 \uC788\uC5B4\uC11C \uBC31\uC0C9 \uC18C\uC74C\uBCF4\uB2E4 \uAC08\uC0C9 \uC18C\uC74C\uC774 \uC120\uD638\uB418\uB294 \uC774\uC720\uB97C \uC54C\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "\uC774\uBA85\uC5D0 \uB300\uD55C \uC18C\uB9AC \uAC15\uD654",
        description: "\uBC30\uACBD \uC18C\uB9AC\uAC00 \uC774\uBA85\uC744 \uB35C \uB208\uC5D0 \uB744\uAC8C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uACFC \uC99D\uAC70\uAC00 \uC81C\uD55C\uC801\uC778 \uBD80\uBD84\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "\uC544\uAE30\uB97C \uC704\uD55C \uBC31\uC0C9\uC18C\uC74C: \uC548\uC804\uD55C \uC0AC\uC6A9 \uAC00\uC774\uB4DC",
        description: "\uC544\uAE30\uC640 \uC5B4\uB9B0\uC774 \uC8FC\uBCC0\uC5D0\uC11C \uC548\uC815\uC801\uC778 \uBC30\uACBD\uC74C\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uC2E4\uC81C \uC608\uBC29 \uC870\uCE58\uC785\uB2C8\uB2E4.",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "\uB354 \uC798 \uC790",
        title: "\uC218\uBA74 \uC18C\uB9AC \uBC0F \uCDE8\uCE68 \uC2DC\uAC04 \uB8E8\uD2F4",
        description: "\uBE44\uAD50 \uAC00\uC774\uB4DC\uBD80\uD130 \uC2DC\uC791\uD55C \uB2E4\uC74C \uB9C8\uC2A4\uD06C \uCC29\uC6A9, \uCDE8\uCE68 \uC2B5\uAD00 \uBC0F \uC5B4\uB9B0\uC774\uB97C \uC704\uD55C \uC548\uC804\uD55C \uC0AC\uC6A9 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uC138\uC694.",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "\uC18C\uB9AC\uB97C \uC774\uD574\uD558\uB2E4",
        title: "\uD770\uC0C9, \uBD84\uD64D\uC0C9, \uAC08\uC0C9 \uBC0F \uB179\uC0C9 \uC7A1\uC74C",
        description: "\uC0C9\uC0C1\uC774 \uCCAD\uAC01\uC801\uC73C\uB85C \uBB34\uC5C7\uC744 \uC758\uBBF8\uD558\uB294\uC9C0, \uC99D\uAC70\uAC00 \uC5B4\uB514\uC5D0 \uC788\uB294\uC9C0, \uC571\uC774 \uB2E4\uB978 \uC7AC\uC0DD \uC635\uC158\uACFC \uC5B4\uB5BB\uAC8C \uBE44\uAD50\uB418\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694.",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "\uC77C\uACFC \uACF5\uBD80",
        title: "\uC9D1\uC911 \uC18C\uB9AC\uC640 ADHD",
        description: "ADHD \uBC0F \uC591\uC774 \uBC15\uB3D9\uC5D0 \uAD00\uD55C \uBCF4\uB2E4 \uC81C\uD55C\uC801\uC778 \uC784\uC0C1 \uC99D\uAC70\uC640 \uC5F0\uAD6C\uC6A9 \uBC30\uACBD \uC18C\uB9AC\uB97C \uBE44\uAD50\uD558\uC2ED\uC2DC\uC624.",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "\uAE34\uC7A5\uC744 \uD480\uB2E4",
        title: "\uC790\uC5F0\uC758 \uC18C\uB9AC\uC640 \uD734\uC2DD",
        description: "\uBAA8\uB4E0 \uCCAD\uCDE8\uC790\uAC00 \uAE34\uC7A5\uC744 \uD480 \uC218 \uC788\uB2E4\uB294 \uC57D\uC18D\uC73C\uB85C \uCD08\uAE30 \uC870\uC0AC\uB97C \uC804\uD658\uD558\uC9C0 \uC54A\uACE0 \uBE44, \uBB3C \uBC0F \uC232\uC758 \uC18C\uB9AC\uB97C \uD0D0\uC0C9\uD558\uC2ED\uC2DC\uC624.",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "\uC8FC\uC758 \uAE4A\uAC8C \uB4E4\uC5B4\uB77C",
        title: "\uC774\uBA85 \uBC0F \uC18C\uB9AC \uAC15\uD654",
        description: "\uC548\uC804\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD98 \uAC00\uC774\uB4DC\uB85C \uC2DC\uC791\uD55C \uB2E4\uC74C \uB9C8\uC2A4\uD0B9 \uC0AC\uC6B4\uB4DC\uC640 \uD574\uB2F9 \uC8FC\uD30C\uC218 \uD504\uB85C\uD544\uC744 \uBE44\uAD50\uD558\uC138\uC694.",
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
    name: "Calma \uBE14\uB85C\uADF8",
    url: "https://www.calmasounds.com/blog",
    description: "\uC218\uBA74 \uC18C\uB9AC, \uBC31\uC0C9 \uC18C\uC74C, \uC9D1\uC911 \uC18C\uB9AC \uBC0F \uCC28\uBD84\uD55C \uB8E8\uD2F4\uC5D0 \uB300\uD55C \uC548\uB0B4\uC785\uB2C8\uB2E4.",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["ko"]) || article.href;
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
            name: "\uD648",
            item: "https://www.calmasounds.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "\uBE14\uB85C\uADF8",
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
          Calma 블로그
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          귀하의 목표에 적합한 사운드 가이드를 찾으세요
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          수면 소리, 소음 색상,
          집중, 이완 및 이명. 각 경로는 광범위한 가이드로 시작되며
          그런 다음 좀 더 구체적인 질문으로 넘어갑니다.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="블로그 주제 경로">
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
                        ? "\uAD6D\uACBD-\uC5D0\uBA54\uB784\uB4DC-400/25 bg-\uC5D0\uBA54\uB784\uB4DC-400/10" : "\uD14C\uB450\uB9AC-\uD770\uC0C9/10 bg-\uD770\uC0C9/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          여기서 시작하세요
                        </span>)}
                      <h3 className={`${index === 0 ? "MT-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        가이드 읽기 <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Calma 둘러보기</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              수면 소리 앱
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              백색소음 앱
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              포커스 사운드 앱
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
