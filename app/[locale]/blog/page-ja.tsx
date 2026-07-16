import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";
type BlogHref = ComponentProps<typeof Link>["href"];
export const metadata: Metadata = {
    title: "\u7761\u7720\u30B5\u30A6\u30F3\u30C9\u30AC\u30A4\u30C9: \u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3001\u96C6\u4E2D\u529B\u3001\u8033\u9CF4\u308A |Calma",
    description: "\u7761\u7720\u97F3\u3001\u9A12\u97F3\u306E\u8272\u3001\u96C6\u4E2D\u529B\u3001ADHD\u3001\u81EA\u7136\u97F3\u3001\u8033\u9CF4\u308A\u306B\u95A2\u3059\u308B\u8A3C\u62E0\u306B\u57FA\u3065\u3044\u305F\u30AC\u30A4\u30C9\u3092\u3001\u5B9F\u8DF5\u7684\u306A\u30C8\u30D4\u30C3\u30AF \u30D1\u30B9\u306B\u307E\u3068\u3081\u3066\u63A2\u7D22\u3057\u307E\u3059\u3002",
    alternates: {
        canonical: "https://www.calmasounds.com/blog",
    },
    openGraph: {
        title: "\u7761\u7720\u30B5\u30A6\u30F3\u30C9\u30AC\u30A4\u30C9: \u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3001\u96C6\u4E2D\u529B\u3001\u8033\u9CF4\u308A |Calma",
        description: "\u7761\u7720\u3001\u96C6\u4E2D\u529B\u3001\u9A12\u97F3\u306E\u8272\u3001\u81EA\u7136\u306E\u97F3\u3001\u8033\u9CF4\u308A\u306B\u3064\u3044\u3066\u306E\u5B9F\u8DF5\u7684\u306A\u9053\u7B4B\u3092\u6574\u7406\u3057\u305F\u3001\u8A3C\u62E0\u306B\u57FA\u3065\u3044\u305F\u30AC\u30A4\u30C9\u3002",
        url: "https://www.calmasounds.com/blog",
        siteName: "Calma",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "\u7761\u7720\u30B5\u30A6\u30F3\u30C9\u30AC\u30A4\u30C9: \u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3001\u96C6\u4E2D\u529B\u3001\u8033\u9CF4\u308A |Calma",
        description: "\u7761\u7720\u97F3\u3001\u30CE\u30A4\u30BA\u306E\u8272\u3001\u96C6\u4E2D\u529B\u3001\u81EA\u7136\u306E\u97F3\u3001\u8033\u9CF4\u308A\u306B\u95A2\u3059\u308B\u5B9F\u7528\u7684\u306A\u30C8\u30D4\u30C3\u30AF \u30D1\u30B9\u3002",
    },
};
const articles = [
    {
        href: "/blog/benefits-of-nature-sounds-for-relaxation",
        title: "\u6DF1\u3044\u30EA\u30E9\u30AF\u30BC\u30FC\u30B7\u30E7\u30F3\u306E\u305F\u3081\u306E\u81EA\u7136\u97F3",
        description: "\u96E8\u3084\u6D77\u306E\u6CE2\u306A\u3069\u306E\u81EA\u7136\u306A\u30B5\u30A6\u30F3\u30C9\u30B9\u30B1\u30FC\u30D7\u304C\u81EA\u7136\u306A\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3068\u3057\u3066\u3069\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3057\u3001\u5C31\u5BDD\u524D\u306E\u7FD2\u6163\u3092\u5F37\u5316\u3067\u304D\u308B\u304B\u3092\u8ABF\u3079\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "\u7761\u7720\u306B\u6700\u9069\u306A\u30B5\u30A6\u30F3\u30C9",
        description: "\u96E8\u3001\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3001\u7A4F\u3084\u304B\u306A\u7761\u7720\u306E\u30B5\u30A6\u30F3\u30C9\u30B9\u30B1\u30FC\u30D7\u306B\u95A2\u3059\u308B\u5B9F\u7528\u7684\u306A\u30AC\u30A4\u30C9\u3002",
    },
    {
        href: "/blog/white-noise-for-sleep",
        title: "\u7761\u7720\u306E\u305F\u3081\u306E\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA",
        description: "\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u304C\u5F79\u7ACB\u3064\u5834\u5408\u3068\u3001\u3088\u308A\u7A4F\u3084\u304B\u306A\u5C31\u5BDD\u6642\u306E\u74B0\u5883\u3092\u69CB\u7BC9\u3059\u308B\u65B9\u6CD5\u3002",
    },
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "\u96E8\u306E\u97F3\u3068\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA",
        description: "\u7CBE\u795E\u7684\u306A\u5FEB\u9069\u3055\u3001\u30DE\u30B9\u30AD\u30F3\u30B0\u3001\u5C31\u5BDD\u6642\u306E\u96F0\u56F2\u6C17\u3092\u6BD4\u8F03\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/how-to-build-a-bedtime-routine",
        title: "\u5C31\u5BDD\u524D\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u3092\u69CB\u7BC9\u3059\u308B\u65B9\u6CD5",
        description: "\u7761\u7720\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3001\u7A4F\u3084\u304B\u306A\u591C\u306E\u30EA\u30BA\u30E0\u3092\u4F5C\u308A\u51FA\u3059\u7C21\u5358\u306A\u65B9\u6CD5\u3002",
    },
    {
        href: "/blog/best-sounds-for-studying",
        title: "\u52C9\u5F37\u306B\u6700\u9069\u306A\u30B5\u30A6\u30F3\u30C9",
        description: "\u96C6\u4E2D\u529B\u3092\u9AD8\u3081\u3001\u3088\u308A\u6DF1\u304F\u96C6\u4E2D\u3059\u308B\u306E\u306B\u5F79\u7ACB\u3064\u97F3\u306E\u7A2E\u985E\u3092\u898B\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/binaural-beats-for-sleep-and-focus",
        title: "\u30D0\u30A4\u30CE\u30FC\u30E9\u30EB \u30D3\u30FC\u30C8: \u8A3C\u62E0\u3068\u9650\u754C",
        description: "\u30D0\u30A4\u30CE\u30FC\u30E9\u30EB \u30D3\u30FC\u30C8\u304C\u3069\u306E\u3088\u3046\u306B\u751F\u6210\u3055\u308C\u308B\u306E\u304B\u3001\u305D\u3057\u3066\u306A\u305C\u7814\u7A76\u7D50\u679C\u304C\u6DF7\u5408\u3055\u308C\u305F\u307E\u307E\u306A\u306E\u304B\u3092\u7406\u89E3\u3057\u307E\u3059\u3002",
    },
    {
        href: "/blog/guided-breathing-techniques",
        title: "\u30AC\u30A4\u30C9\u4ED8\u304D\u547C\u5438\u6CD5",
        description: "\u30EA\u30E9\u30AF\u30BC\u30FC\u30B7\u30E7\u30F3\u3001\u30D0\u30E9\u30F3\u30B9\u3001\u7761\u7720\u3001\u96C6\u4E2D\u529B\u3092\u9AD8\u3081\u308B\u305F\u3081\u306E\u5FC3\u3092\u843D\u3061\u7740\u304B\u305B\u308B\u547C\u5438\u6CD5\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
    },
    {
        href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
        title: "\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA vs \u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA vs \u30D4\u30F3\u30AF \u30CE\u30A4\u30BA",
        description: "\u30CE\u30A4\u30BA\u306E\u8272\u306E\u9055\u3044\u3092\u8ABF\u3079\u3066\u3001\u3069\u308C\u304C\u96C6\u4E2D\u529B\u3084\u7761\u7720\u306B\u6700\u9069\u304B\u3092\u898B\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/rain-sounds-for-better-sleep-and-focus",
        title: "\u7761\u7720\u3068\u96C6\u4E2D\u529B\u3092\u9AD8\u3081\u308B\u96E8\u97F3",
        description: "\u96E8\u304C\u4E0D\u7720\u75C7\u3084ADHD\u3092\u6CBB\u7642\u3059\u308B\u3068\u3044\u3046\u4E3B\u5F35\u304B\u3089\u3001\u30DE\u30B9\u30AD\u30F3\u30B0\u3001\u500B\u4EBA\u7684\u306A\u5FEB\u9069\u3055\u3001\u521D\u671F\u306E\u7814\u7A76\u3092\u5207\u308A\u96E2\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/green-noise-for-sleep",
        title: "\u7761\u7720\u306E\u305F\u3081\u306E\u30B0\u30EA\u30FC\u30F3\u30CE\u30A4\u30BA\uFF1A\u610F\u5473\u3068\u9650\u754C",
        description: "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u62C5\u5F53\u8005\u304C\u30B0\u30EA\u30FC\u30F3 \u30CE\u30A4\u30BA\u3068\u547C\u3076\u3082\u306E\u3001\u305D\u308C\u304C\u6A19\u6E96\u306E\u30CE\u30A4\u30BA \u30AB\u30E9\u30FC\u3068\u3069\u306E\u3088\u3046\u306B\u7570\u306A\u308B\u306E\u304B\u3001\u3069\u306E\u3088\u3046\u306A\u8A3C\u62E0\u304C\u6B20\u3051\u3066\u3044\u308B\u306E\u304B\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
    },
    {
        href: "/blog/best-free-white-noise-app",
        title: "\u7121\u6599\u306E\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u30A2\u30D7\u30EA\u306E\u9078\u3073\u65B9",
        description: "\u30AA\u30D5\u30E9\u30A4\u30F3 \u30AA\u30FC\u30C7\u30A3\u30AA\u3001\u30EB\u30FC\u30D7\u3001\u30BF\u30A4\u30DE\u30FC\u3001\u4FA1\u683C\u306E\u30C1\u30A7\u30C3\u30AF\u30EA\u30B9\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u30A2\u30D7\u30EA\u3001\u30DE\u30B7\u30F3\u3001\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
    },
    {
        href: "/blog/best-color-noise-for-adhd",
        title: "ADHD\u306B\u6700\u9069\u306A\u30AB\u30E9\u30FC\u30CE\u30A4\u30BA\u306F\u4F55\u3067\u3059\u304B?",
        description: "ADHD\u3001\u96C6\u4E2D\u529B\u3001\u904E\u5270\u523A\u6FC0\u306E\u5834\u5408\u3001\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3088\u308A\u3082\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u304C\u597D\u307E\u308C\u308B\u7406\u7531\u3092\u63A2\u3063\u3066\u304F\u3060\u3055\u3044\u3002",
    },
    {
        href: "/blog/sounds-for-tinnitus-relief",
        title: "\u8033\u9CF4\u308A\u306B\u5BFE\u3059\u308B\u30B5\u30A6\u30F3\u30C9\u30A8\u30F3\u30EA\u30C3\u30C1\u30E1\u30F3\u30C8",
        description: "\u80CC\u666F\u97F3\u304C\u3069\u306E\u3088\u3046\u306B\u3057\u3066\u8033\u9CF4\u308A\u3092\u76EE\u7ACB\u305F\u306A\u304F\u3059\u308B\u306E\u304B\u3001\u307E\u305F\u8A3C\u62E0\u304C\u9650\u3089\u308C\u3066\u3044\u308B\u70B9\u306B\u3064\u3044\u3066\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
    },
    {
        href: "/blog/white-noise-for-babies",
        title: "\u8D64\u3061\u3083\u3093\u306E\u305F\u3081\u306E\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA: \u3088\u308A\u5B89\u5168\u306A\u4F7F\u7528\u30AC\u30A4\u30C9",
        description: "\u8D64\u3061\u3083\u3093\u3084\u5E7C\u5150\u306E\u5468\u56F2\u3067\u5B89\u5B9A\u3057\u305F\u80CC\u666F\u97F3\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306E\u5B9F\u969B\u7684\u306A\u4E88\u9632\u7B56\u3002",
    },
];
const clusters = [
    {
        id: "sleep",
        label: "\u3088\u304F\u7720\u308C\u307E\u3059",
        title: "\u7761\u7720\u97F3\u3068\u5C31\u5BDD\u6642\u306E\u30EB\u30FC\u30C6\u30A3\u30F3",
        description: "\u307E\u305A\u306F\u6BD4\u8F03\u30AC\u30A4\u30C9\u304B\u3089\u59CB\u3081\u3066\u3001\u30DE\u30B9\u30AD\u30F3\u30B0\u3001\u5C31\u5BDD\u6642\u306E\u7FD2\u6163\u3001\u304A\u5B50\u69D8\u306E\u3088\u308A\u5B89\u5168\u306A\u4F7F\u7528\u306B\u3064\u3044\u3066\u8ABF\u3079\u3066\u304F\u3060\u3055\u3044\u3002",
        articleHrefs: [
            "/blog/best-sounds-for-sleep",
            "/blog/white-noise-for-sleep",
            "/blog/how-to-build-a-bedtime-routine",
            "/blog/white-noise-for-babies",
        ],
    },
    {
        id: "noise-colors",
        label: "\u97F3\u3092\u7406\u89E3\u3059\u308B",
        title: "\u767D\u3001\u30D4\u30F3\u30AF\u3001\u8336\u8272\u3001\u7DD1\u306E\u30CE\u30A4\u30BA",
        description: "\u8272\u304C\u97F3\u97FF\u7684\u306B\u4F55\u3092\u610F\u5473\u3059\u308B\u306E\u304B\u3001\u8A3C\u62E0\u306F\u3069\u3053\u306B\u3042\u308B\u306E\u304B\u3001\u30A2\u30D7\u30EA\u304C\u4ED6\u306E\u518D\u751F\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3069\u306E\u3088\u3046\u306B\u6BD4\u8F03\u3055\u308C\u308B\u306E\u304B\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
        articleHrefs: [
            "/blog/rain-sounds-vs-white-noise",
            "/blog/brown-noise-vs-white-noise-vs-pink-noise",
            "/blog/green-noise-for-sleep",
            "/blog/best-free-white-noise-app",
        ],
    },
    {
        id: "focus",
        label: "\u4ED5\u4E8B\u3068\u52C9\u5F37",
        title: "\u96C6\u4E2D\u97F3\u3068ADHD",
        description: "\u7814\u7A76\u7528\u306E\u80CC\u666F\u97F3\u3092\u3001ADHD \u304A\u3088\u3073\u30D0\u30A4\u30CE\u30FC\u30E9\u30EB\u30D3\u30FC\u30C8\u306B\u95A2\u3059\u308B\u3088\u308A\u9650\u5B9A\u7684\u306A\u81E8\u5E8A\u8A3C\u62E0\u3068\u6BD4\u8F03\u3057\u307E\u3059\u3002",
        articleHrefs: [
            "/blog/best-sounds-for-studying",
            "/blog/best-color-noise-for-adhd",
            "/blog/binaural-beats-for-sleep-and-focus",
        ],
    },
    {
        id: "nature",
        label: "\u30EA\u30E9\u30C3\u30AF\u30B9",
        title: "\u81EA\u7136\u306E\u97F3\u3068\u30EA\u30E9\u30AF\u30BC\u30FC\u30B7\u30E7\u30F3",
        description: "\u521D\u671F\u306E\u7814\u7A76\u3092\u3059\u3079\u3066\u306E\u30EA\u30B9\u30CA\u30FC\u304C\u30EA\u30E9\u30C3\u30AF\u30B9\u3067\u304D\u308B\u3068\u3044\u3046\u7D04\u675F\u306B\u5909\u3048\u308B\u3053\u3068\u306A\u304F\u3001\u96E8\u3001\u6C34\u3001\u68EE\u306E\u97F3\u3092\u63A2\u6C42\u3057\u307E\u3059\u3002",
        articleHrefs: [
            "/blog/benefits-of-nature-sounds-for-relaxation",
            "/blog/rain-sounds-for-better-sleep-and-focus",
            "/blog/guided-breathing-techniques",
        ],
    },
    {
        id: "tinnitus",
        label: "\u6CE8\u610F\u6DF1\u304F\u805E\u3044\u3066\u304F\u3060\u3055\u3044",
        title: "\u8033\u9CF4\u308A\u3068\u97F3\u306E\u8C4A\u304B\u3055",
        description: "\u5B89\u5168\u6027\u3092\u91CD\u8996\u3057\u305F\u30AC\u30A4\u30C9\u304B\u3089\u59CB\u3081\u3066\u3001\u30DE\u30B9\u30AD\u30F3\u30B0 \u30B5\u30A6\u30F3\u30C9\u3068\u305D\u306E\u5468\u6CE2\u6570\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
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
    name: "\u30AB\u30EB\u30DE\u306E\u30D6\u30ED\u30B0",
    url: "https://www.calmasounds.com/blog",
    description: "\u7761\u7720\u30B5\u30A6\u30F3\u30C9\u3001\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3001\u96C6\u4E2D\u30B5\u30A6\u30F3\u30C9\u3001\u5FC3\u3092\u843D\u3061\u7740\u304B\u305B\u308B\u30EB\u30FC\u30C1\u30F3\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9\u3002",
    hasPart: articles.map(article => {
        const mapping = pathnamesMapping[article.href];
        const localizedPath = (mapping && mapping["jp"]) || article.href;
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
            name: "\u30DB\u30FC\u30E0",
            item: "https://www.calmasounds.com"
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "\u30D6\u30ED\u30B0",
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
          カルマのブログ
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          あなたの目標に適した音声ガイドを見つけてください
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          睡眠音、騒音の色、
          集中力、リラクゼーション、耳鳴り。それぞれの道は大まかなガイドから始まり、
          次に、より具体的な質問に移ります。
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="ブログトピックのパス">
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
                        ? "\u30DC\u30FC\u30C0\u30FC\u30A8\u30E1\u30E9\u30EB\u30C9-400/25 bg-\u30A8\u30E1\u30E9\u30EB\u30C9-400/10" : "\u30DC\u30FC\u30C0\u30FC\u30DB\u30EF\u30A4\u30C8/10 \u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30DB\u30EF\u30A4\u30C8/5"}`}>
                      {index === 0 && (<span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          ここから始めましょう
                        </span>)}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        ガイドを読む <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>))}
                </div>
              </section>);
        })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">カルマを探索する</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sleep-sounds-app" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition">
              睡眠音アプリ
            </Link>
            <Link href="/white-noise-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              ホワイトノイズアプリ
            </Link>
            <Link href="/focus-sounds-app" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              フォーカスサウンドアプリ
            </Link>
          </div>
        </div>
      </section>
    </main>);
}
