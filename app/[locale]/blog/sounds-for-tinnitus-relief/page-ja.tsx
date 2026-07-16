import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
const articleTitle = "\u8033\u9CF4\u308A\u3092\u30DE\u30B9\u30AD\u30F3\u30B0\u3059\u308B\u305F\u3081\u306E\u97F3: \u5B9F\u8DF5\u30AC\u30A4\u30C9 |Calma";
const articleDescription = "\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3084\u81EA\u7136\u97F3\u306B\u3088\u3063\u3066\u3069\u306E\u3088\u3046\u306B\u8033\u9CF4\u308A\u304C\u76EE\u7ACB\u305F\u306A\u304F\u306A\u308B\u306E\u304B\u3001\u5B89\u5168\u306B\u8033\u3092\u50BE\u3051\u308B\u65B9\u6CD5\u3001\u3044\u3064\u5C02\u9580\u7684\u306A\u30B1\u30A2\u3092\u6C42\u3081\u308B\u3079\u304D\u304B\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002";
const articleUrl = "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief";
export const metadata: Metadata = {
    title: articleTitle,
    description: articleDescription,
    keywords: [
        "\u8033\u9CF4\u308A\u306E\u97F3",
        "\u8033\u9CF4\u308A\u306E\u8EFD\u6E1B",
        "\u8033\u9CF4\u308A\u306B\u6700\u9069\u306A\u97F3",
        "\u8033\u9CF4\u308A\u3092\u96A0\u3059",
        "\u8033\u9CF4\u308A\u30B5\u30A6\u30F3\u30C9\u30BB\u30E9\u30D4\u30FC",
        "\u8033\u9CF4\u308A\u3092\u96A0\u3059\u65B9\u6CD5",
        "\u8033\u9CF4\u308A\u306E\u6163\u308C",
        "Calma\u30D6\u30ED\u30B0",
    ],
    alternates: {
        canonical: articleUrl,
    },
    openGraph: {
        title: articleTitle,
        description: articleDescription,
        url: articleUrl,
        siteName: "Calma",
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: articleTitle,
        description: articleDescription,
    },
};
const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "\u8033\u9CF4\u308A\u3092\u30DE\u30B9\u30AD\u30F3\u30B0\u3059\u308B\u305F\u3081\u306E\u30B5\u30A6\u30F3\u30C9: \u5B9F\u8DF5\u30AC\u30A4\u30C9",
            "description": articleDescription,
            "author": { "@type": "Organization", "name": "\u30AB\u30EB\u30DE\u30C1\u30FC\u30E0" },
            "publisher": { "@type": "Organization", "name": "Calma" },
            "mainEntityOfPage": articleUrl,
            "datePublished": "2026-05-09",
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "\u8033\u9CF4\u308A\u306E\u30DE\u30B9\u30AD\u30F3\u30B0\u306B\u4F7F\u7528\u3067\u304D\u308B\u97F3\u306F\u4F55\u3067\u3059\u304B?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\u597D\u307F\u306F\u3055\u307E\u3056\u307E\u3067\u3059\u3002\u8033\u9CF4\u308A\u3068\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u6E1B\u3089\u3059\u305F\u3081\u306B\u3001\u9759\u304B\u306A\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3001\u96E8\u3001\u6CE2\u3001\u6247\u98A8\u6A5F\u3001\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u4E2D\u9593\u7684\u306A\u97F3\u3092\u4F7F\u7528\u3059\u308B\u4EBA\u3082\u3044\u307E\u3059\u3002\u5FEB\u9069\u306A\u30EC\u30D9\u30EB\u3092\u4F7F\u7528\u3057\u3001\u75C7\u72B6\u304C\u60AA\u5316\u3057\u305F\u5834\u5408\u306F\u4E2D\u6B62\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                    }
                },
                {
                    "@type": "Question",
                    "name": "\u97F3\u97FF\u7642\u6CD5\u306F\u8033\u9CF4\u308A\u306B\u3069\u306E\u3088\u3046\u306B\u52B9\u679C\u304C\u3042\u308A\u307E\u3059\u304B?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\u97F3\u97FF\u7642\u6CD5\u306F\u3001\u8033\u9CF4\u308A\u3092\u96A0\u3057\u305F\u308A\u3001\u8033\u9CF4\u308A\u304B\u3089\u6C17\u3092\u7D1B\u3089\u308F\u305B\u305F\u308A\u3001\u4EBA\u306B\u3088\u3063\u3066\u306F\u8033\u9CF4\u308A\u3078\u306E\u6163\u308C\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u305F\u308A\u3059\u308B\u5916\u90E8\u97F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u7D50\u679C\u306F\u3055\u307E\u3056\u307E\u3067\u3059\u304C\u3001\u5C02\u9580\u5BB6\u306E\u6307\u5C0E\u304C\u5F79\u306B\u7ACB\u3061\u307E\u3059\u3002"
                    }
                },
                {
                    "@type": "Question",
                    "name": "\u8033\u9CF4\u308A\u3092\u5B8C\u5168\u306B\u96A0\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304B?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\u3059\u3079\u3066\u306E\u4EBA\u306B\u9069\u3057\u305F\u5358\u4E00\u306E\u30EC\u30D9\u30EB\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u5FEB\u9069\u306A\u30B5\u30A6\u30F3\u30C9\u3092\u4FDD\u3061\u3001\u5927\u97F3\u91CF\u3067\u8033\u9CF4\u308A\u3092\u5727\u5012\u3057\u3088\u3046\u3068\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u8074\u899A\u5C02\u9580\u533B\u304C\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u9078\u629E\u3092\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002"
                    }
                },
                {
                    "@type": "Question",
                    "name": "\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u306F\u8033\u9CF4\u308A\u3092\u60AA\u5316\u3055\u305B\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u304B?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\u5927\u304D\u306A\u97F3\u3084\u4E0D\u5FEB\u306A\u97F3\u306F\u3001\u8074\u899A\u306B\u60AA\u5F71\u97FF\u3092\u4E0E\u3048\u305F\u308A\u3001\u75C7\u72B6\u3092\u60AA\u5316\u3055\u305B\u305F\u308A\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u8033\u9CF4\u308A\u304C\u65B0\u305F\u306A\u5834\u5408\u3001\u7A81\u7136\u306E\u5834\u5408\u3001\u7247\u5074\u6027\u306E\u5834\u5408\u3001\u62CD\u52D5\u6027\u306E\u5834\u5408\u3001\u307E\u305F\u306F\u60AA\u5316\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u97F3\u91CF\u3092\u6291\u3048\u3066\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u6C42\u3081\u3066\u304F\u3060\u3055\u3044\u3002"
                    }
                }
            ]
        }
    ]
};
export default function SoundsForTinnitusReliefPage() {
    return (<ArticlePage slug="sounds-for-tinnitus-relief" jsonLd={articleJsonLd} topLinkHref="/tinnitus-sounds-app" topLinkLabel="耳鳴り音アプリを探索する" title="耳鳴りをマスキングするためのサウンド: 実践ガイド" intro="耳鳴りは、静かな部屋ではより顕著に感じられることがあります。外部の音はコントラストを低下させ、注意をそらしたり、人によっては習慣化をサポートする可能性がありますが、治療法ではなく、普遍的に最適な音はありません。このガイドは、優しいオプションを比較し、安全に話を聞くのに役立ちます。" ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma" ctaLabel="無料の耳鳴りアプリをダウンロード" secondaryCtaHref="/tinnitus-sounds-app" secondaryCtaLabel="アプリについて詳しく見る" tableOfContents={[
            { id: "what-is-sound-therapy", title: "\u30B5\u30A6\u30F3\u30C9\u30BB\u30E9\u30D4\u30FC\u306E\u4ED5\u7D44\u307F" },
            { id: "evidence", title: "\u81E8\u5E8A\u7814\u7A76\u3067\u308F\u304B\u3063\u305F\u3053\u3068" },
            { id: "white-noise", title: "\u30B7\u30E3\u30FC\u30D7\u306A\u9CF4\u308A\u3092\u5B9F\u73FE\u3059\u308B\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA" },
            { id: "brown-noise", title: "\u30EA\u30E9\u30C3\u30AF\u30B9\u306E\u305F\u3081\u306E\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA" },
            { id: "nature-sounds", title: "\u81EA\u7136\u306E\u97F3\u3068\u6C34" },
            { id: "habituation", title: "\u30DE\u30B9\u30AD\u30F3\u30B0\u3068\u6163\u308C" },
            { id: "safe-test", title: "\u614E\u91CD\u306A\u30EA\u30B9\u30CB\u30F3\u30B0\u30C6\u30B9\u30C8" },
            { id: "medical-care", title: "\u3044\u3064\u533B\u7642\u3092\u53D7\u3051\u308B\u3079\u304D\u304B" },
            { id: "faq", title: "\u3088\u304F\u3042\u308B\u8CEA\u554F" },
            { id: "sources", title: "\u8A3C\u62E0\u3068\u60C5\u5831\u6E90" },
        ]} relatedArticles={[
            {
                href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
                title: "\u30CE\u30A4\u30BA\u30AB\u30E9\u30FC\u306E\u8AAC\u660E",
                description: "\u30DB\u30EF\u30A4\u30C8\u3001\u30D4\u30F3\u30AF\u3001\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u306E\u9055\u3044\u3092\u8ABF\u3079\u3066\u304F\u3060\u3055\u3044\u3002",
            },
            {
                href: "/blog/white-noise-for-sleep",
                title: "\u7761\u7720\u306E\u305F\u3081\u306E\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA",
                description: "\u30DE\u30B9\u30AD\u30F3\u30B0\u306E\u4ED5\u7D44\u307F\u3068\u3001\u7761\u7720\u306E\u8A3C\u62E0\u304C\u6DF7\u5728\u3057\u305F\u307E\u307E\u306B\u306A\u308B\u7406\u7531\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
            }
        ]}>
      <ArticleSection id="what-is-sound-therapy" title="サウンドセラピーの仕組み">
        <p className="mt-4 leading-8 text-white/70">
          <strong>音響療法</strong> ニュートラルまたは快適な外部オーディオを追加します。米国国立難聴およびその他のコミュニケーション障害研究所によると、耳鳴りを隠したり、耳鳴りに慣れさせたり、気を紛らわせたりする効果がある可能性があるとのことです。スマートフォンのサウンドジェネレーターは、リラックスや睡眠の補助として使用できます。
        </p>
        <p className="mt-4 leading-8 text-white/70">読んでください <a className="text-emerald-300 underline underline-offset-4" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">NIDCD 耳鳴りガイド</a>、持続する症状については臨床医または聴覚科医に相談してください。</p>
      </ArticleSection>

      <ArticleSection id="evidence" title="臨床研究では耳鳴り音響療法についてどのようなことが述べられていますか?">
        <p>
          この証拠は、「音が耳鳴りを治す」よりも微妙です。コクランのレビューによると、補聴器、音声発生器、およびそれらを組み合わせた装置は、相互に比較して耳鳴りの重症度にほとんどまたはまったく差が生じない可能性があります。著者らはまた、利用可能な試験は限られており、音が役に立たないことを証明したわけではないと強調した。
        </p>
        <p className="mt-4">
          151人を対象とした多施設無作為化試験では、完全な耳鳴り再訓練療法、プラセボ音源によるカウンセリング、および標準治療を比較した。すべてのグループは 18 か月にわたって改善されましたが、従来のサウンド ジェネレーターは他のアプローチに比べて明らかな利点を生み出しませんでした。これは、サウンドそのものと並んで、教育、サポート、時間が重要である可能性があることを示唆しています。
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
          <p className="font-semibold text-emerald-100">現実的な期待</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            背景音は、特に静かな部屋や就寝時などに実用的な対処ツールになる可能性がありますが、治療法や長期治療の保証として提示されるべきではありません。
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="シャープな鳴りを実現するホワイトノイズ">
        <p className="mt-4 leading-8 text-white/70">
          ホワイト ノイズは、安定した広域スペクトルのサウンドです。高音の耳鳴りが目立たなくなると感じる人もいます。よりソフトまたはより自然なオプションを好む人もいます。
        </p>
        <AudioPlayer src="/white_noise.m4a" title="ピュアホワイトノイズ" description="一貫した「シャー」という音を背景のマスキングとして静かに試してみます。" colorClass="bg-slate-500/20 text-slate-300"/>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="深いリラクゼーションのためのブラウンノイズ">
        <p className="mt-4 leading-8 text-white/70">
          ホワイトノイズがうるさすぎる場合は、 <strong>ブラウンノイズ</strong> より多くの低周波エネルギーを備えた、より深い代替品です。快適さは個人的なものであるため、1 つの色が耳鳴りのピッチに一致すると仮定するのではなく、小さな音量で比較してください。
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="自然の音: 雨と海の波">
        <p className="mt-4 leading-8 text-white/70">
          降り続く雨、海の波、川の流れなどの水の音は、合成的ではない背景を提供します。変化するテクスチャーは、一部のリスナーにとっては快適なレベルを維持しやすい場合があります。
        </p>
        <AudioPlayer src="/rain.m4a" title="ステディ・レイン (ピンク・ノイズ)" description="自然に脳の気を紛らわせる、オーガニックでテクスチャーのあるサウンド。" colorClass="bg-blue-500/20 text-blue-300"/>
      </ArticleSection>

      <ArticleSection id="habituation" title="マスキング、部分マスキング、および慣れは異なる目標です">
        <p className="mt-4 leading-8 text-white/70">
          単に耳鳴りを抑えるために音を上げることは避けてください。大声で聞くと聴覚にダメージを与え、症状がさらに深刻になる可能性があります。
        </p>
        <p className="mt-4 leading-8 text-white/70">
          習慣化ベースのプログラムは、低レベルの音声とカウンセリングを組み合わせたものですが、計画とミキシング レベルは個別に行う必要があります。単に就寝時の静かな背景としてではなく、治療的に音を使いたい場合は、聴覚専門医がお手伝いします。
        </p>
      </ArticleSection>

      <ArticleSection id="safe-test" title="背景音をテストする慎重な方法">
        <ol className="list-decimal space-y-3 pl-5 text-white/70">
          <li>実用的であれば、特に就寝中に長時間聴く場合は、ヘッドフォンではなくスピーカーから始めてください。</li>
          <li>雨、波、ホワイト ノイズ、ブラウン ノイズなど、中立的なオプションを 1 つ選択し、はっきりと聞こえる最低レベルから始めます。</li>
          <li>耳鳴りを完全にかき消すのではなく、部屋とのコントラストを減らすことを目指してください。</li>
          <li>10 ～ 15 分間聞いて、心地よさ、イライラ、耳鳴りに注意が戻る頻度に注目してください。</li>
          <li>音が鋭いと感じたり、不快感を引き起こしたり、症状を悪化させたりする場合は中止してください。</li>
        </ol>
        <p className="mt-4">
          通常の背景音にはピッチマッチングは必要ありません。個別の治療プロトコルは異なるため、資格のある臨床医とともに設計する必要があります。
        </p>
      </ArticleSection>

      <ArticleSection id="medical-care" title="耳鳴りで医学的診断が必要な場合">
        <p>
          耳鳴りが続いたり、苦痛を感じたり、睡眠や集中力に影響を与えたりする場合は、医学的または聴覚学的評価を手配します。突然始まる場合、怪我の後に起こる場合、突発性難聴を伴う場合、片側のみの場合、心拍に合わせて脈動する場合、または重大なめまいや神経症状を伴う場合は、速やかに治療を受けてください。
        </p>
        <p className="mt-4">
          聴力検査は難聴を特定し、日常の音を豊かにすることと専門家の監督が必要な治療を区別するのに役立ちます。アプリでは耳鳴りの原因を特定できません。
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="よくある質問 (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">耳鳴りを和らげるのに最適な音は何ですか?</h3>
            <p className="mt-2 leading-7 text-white/70">普遍的な最高のサウンドはありません。静かなホワイトノイズ、雨、波、またはその他のニュートラルな音を試し、快適だと感じる音だけを残します。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">音響療法は耳鳴りにどのように効果がありますか?</h3>
            <p className="mt-2 leading-7 text-white/70">外部オーディオを追加することで、耳鳴りを隠したり、耳鳴りから気を紛らわせたり、一部の人にとっては習慣化をサポートしたりする可能性があります。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">耳鳴りを完全に隠す必要がありますか?</h3>
            <p className="mt-2 leading-7 text-white/70">圧倒されるような大音量の音声は避けてください。適切なレベルとアプローチは異なります。聴覚科医がお手伝いします。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">ホワイトノイズは耳鳴りを悪化させる可能性がありますか?</h3>
            <p className="mt-2 leading-7 text-white/70">大きな音や不快な音は、聴覚に悪影響を与えたり、症状を悪化させたりする可能性があります。レベルを低く保ち、症状が悪化した場合は中止してください。</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="証拠と情報源">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">
              国立難聴およびその他のコミュニケーション障害研究所: 耳鳴りの概要
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013094.pub2/full" target="_blank" rel="noopener noreferrer">
              耳鳴りに対する音響療法装置のコクランレビュー
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/31120533/" target="_blank" rel="noopener noreferrer">
              耳鳴り再訓練療法、サウンドジェネレーター、および標準治療のランダム化試験
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>);
}
