import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
export const metadata: Metadata = {
    title: "\u30AB\u30E9\u30FC\u30CE\u30A4\u30BA\u3068ADHD: \u7814\u7A76\u304C\u5B9F\u969B\u306B\u793A\u3057\u3066\u3044\u308B\u3053\u3068 |Calma",
    description: "2024 \u5E74\u306E\u30E1\u30BF\u5206\u6790\u3067\u767A\u898B\u3055\u308C\u305F\u5185\u5BB9\u3068\u307E\u3060\u8A3C\u62E0\u304C\u6B20\u3051\u3066\u3044\u308B\u90E8\u5206\u3092\u542B\u3081\u3066\u3001ADHD \u306E\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3001\u30D4\u30F3\u30AF \u30CE\u30A4\u30BA\u3001\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
    keywords: [
        "adhd\u306B\u306F\u3069\u306E\u8272\u306E\u30CE\u30A4\u30BA\u304C\u6700\u9069\u3067\u3059\u304B",
        "\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA\u3068\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BAADHD",
        "\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BAADHD",
        "adhd\u306E\u305F\u3081\u306E\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA",
        "\u30D4\u30F3\u30AF\u30CE\u30A4\u30BAADHD",
        "adhd\u306E\u52C9\u5F37\u306B\u6700\u9069\u306A\u9A12\u97F3",
        "Calma\u30D6\u30ED\u30B0",
    ],
    alternates: {
        canonical: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
    },
    openGraph: {
        title: "\u30AB\u30E9\u30FC\u30CE\u30A4\u30BA\u3068ADHD: \u7814\u7A76\u304C\u5B9F\u969B\u306B\u793A\u3057\u3066\u3044\u308B\u3053\u3068 |Calma",
        description: "\u73FE\u5728\u306E\u8A3C\u62E0\u3068\u305D\u306E\u9650\u754C\u3092\u542B\u3081\u3066\u3001ADHD \u306E\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3001\u30D4\u30F3\u30AF \u30CE\u30A4\u30BA\u3001\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
        url: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
        siteName: "Calma",
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "\u30AB\u30E9\u30FC\u30CE\u30A4\u30BA\u3068ADHD: \u7814\u7A76\u304C\u793A\u3059\u3082\u306E |Calma",
        description: "ADHD \u306E\u30CE\u30A4\u30BA\u306E\u8272\u3092\u6BD4\u8F03\u3057\u3001\u500B\u4EBA\u7684\u306A\u30C6\u30B9\u30C8\u304C\u306A\u305C\u91CD\u8981\u306A\u306E\u304B\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
    },
};
const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "\u30AB\u30E9\u30FC\u30CE\u30A4\u30BA\u3068ADHD: \u7814\u7A76\u306F\u4F55\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u304B?",
    description: "\u73FE\u5728\u306E\u8A3C\u62E0\u3068\u305D\u306E\u9650\u754C\u3092\u542B\u3081\u3066\u3001ADHD \u306E\u30DB\u30EF\u30A4\u30C8 \u30CE\u30A4\u30BA\u3001\u30D4\u30F3\u30AF \u30CE\u30A4\u30BA\u3001\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
    author: {
        "@type": "Organization",
        name: "Calma",
    },
    publisher: {
        "@type": "Organization",
        name: "Calma",
    },
    mainEntityOfPage: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
};
export default function BestColorNoiseForADHDPage() {
    return (<ArticlePage slug="best-color-noise-for-adhd" jsonLd={articleJsonLd} topLinkHref="/focus-sounds-app" topLinkLabel="重点ページを探索する" title="カラーノイズとADHD: 研究は何を示していますか?" intro="ADHD を持つ人の中には、気が散るのを目立たなくするために安定した背景音を使用する人もいますが、すべての人にとって最適な単一のノイズ カラーはありません。ここでは、ホワイトノイズとピンクノイズについての研究結果、ブラウンノイズの証拠がまだ欠けている理由、そして医療として扱わずに音をテストする方法を紹介します。" ctaHref="/focus-sounds-app" ctaLabel="フォーカスサウンドアプリを探索する" secondaryCtaHref="/sound-mixer-app" secondaryCtaLabel="独自のオーディオをミックスする" tableOfContents={[
            { id: "adhd-and-sound", title: "\u8A3C\u62E0\u304C\u8A9E\u308B\u3053\u3068" },
            { id: "noise-colors", title: "\u8272\u304C\u5B9F\u969B\u306B\u610F\u5473\u3059\u308B\u3082\u306E" },
            { id: "white-noise", title: "\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA" },
            { id: "brown-noise", title: "\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA" },
            { id: "pink-noise", title: "\u30D4\u30F3\u30AF\u30CE\u30A4\u30BA" },
            { id: "personal-test", title: "\u5B9F\u8DF5\u7684\u306A\u6BD4\u8F03\u30C6\u30B9\u30C8" },
            { id: "summary", title: "\u8ABF\u67FB\u7D50\u679C\u304C\u4F55\u3092\u610F\u5473\u3059\u308B\u306E\u304B\u3001\u305D\u3057\u3066\u4F55\u3092\u610F\u5473\u3057\u306A\u3044\u306E\u304B" },
            { id: "sources", title: "\u8A3C\u62E0\u3068\u60C5\u5831\u6E90" },
        ]} relatedArticles={[
            {
                href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
                title: "\u30D6\u30E9\u30A6\u30F3 vs \u30DB\u30EF\u30A4\u30C8 vs \u30D4\u30F3\u30AF \u30CE\u30A4\u30BA",
                description: "\u30DF\u30C3\u30AF\u30B9\u3092\u69CB\u7BC9\u3059\u308B\u524D\u306B\u3001\u30B5\u30A6\u30F3\u30C9\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u304C\u3069\u306E\u3088\u3046\u306B\u7570\u306A\u308B\u304B\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",
            },
            {
                href: "/blog/best-sounds-for-studying",
                title: "\u52C9\u5F37\u306E\u305F\u3081\u306E\u97F3",
                description: "\u52C9\u5F37\u30BB\u30C3\u30B7\u30E7\u30F3\u7528\u306E\u5B9A\u5E38\u9A12\u97F3\u3001\u81EA\u7136\u97F3\u3001\u697D\u5668\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6BD4\u8F03\u3057\u307E\u3059\u3002",
            },
        ]}>
      <ArticleSection id="adhd-and-sound" title="証拠は騒音とADHDについて何を示していますか?">
        <p>
          13件の研究と335人の参加者を対象とした2024年の系統的レビューとメタ分析では、ADHDまたは症状の亢進を有する子供および若者の間で、ホワイトノイズまたはピンクノイズによる実験室の注意課題がわずかに改善されたことがわかりました。同じレビューでは、ADHD のない比較グループではわずかなマイナス効果が見出されました。
        </p>
        <p className="mt-4">
          重要なのは、このレビューではブラウン ノイズに関する適格な研究が見つからなかったことです。また、現実世界の結果と適切なリスニングレベルについてのさらなる研究も求められました。そのため、騒音は個人的な環境の選択であり、実証された治療法ではありません。
        </p>
        <p className="mt-4">
          読んでください <a className="text-emerald-300 underline underline-offset-4" href="https://pubmed.ncbi.nlm.nih.gov/38428577/" target="_blank" rel="noopener noreferrer">PubMed での査読済みレビュー</a> 研究の詳細と限界については。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">13</p>
            <p className="mt-1 text-sm text-white/70">適格な研究</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">335</p>
            <p className="mt-1 text-sm text-white/70">ADHD分析の参加者</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">小</p>
            <p className="mt-1 text-sm text-white/70">平均的なタスクパフォーマンスの利点</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="noise-colors" title="ホワイト、ピンク、ブラウンのノイズは実際には何を意味するのでしょうか?">
        <p>
          色は、気分、診断、または特別な脳の周波数ではなく、音のエネルギーが周波数全体にどのように分布するかを表します。ホワイト ノイズは 1 ヘルツあたりのパワーが等しいため、高周波が際立って聞こえます。ピンク ノイズは周波数が上昇するにつれてエネルギーを失い、多くの場合、安定した雨に似ています。ブラウン ノイズはさらに急峻にロールオフし、より深いランブルを生成します。
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/15 text-white">
                <th className="px-4 py-3">サウンド</th>
                <th className="px-4 py-3">典型的な性格</th>
                <th className="px-4 py-3">2024年のレビューの証拠</th>
                <th className="px-4 py-3">テストする理由</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">ホワイト</td>
                <td className="px-4 py-3">明るい、静的な感じ</td>
                <td className="px-4 py-3">適格な証拠のほとんど</td>
                <td className="px-4 py-3">変化するサウンドの広範なマスキング</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">ピンク</td>
                <td className="px-4 py-3">より柔らかく、雨のように</td>
                <td className="px-4 py-3">含まれていますが、観測結果ははるかに少ないです</td>
                <td className="px-4 py-3">高周波ヒスノイズが少ない</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">ブラウン</td>
                <td className="px-4 py-3">深くて滝のよう</td>
                <td className="px-4 py-3">適格な研究はありません</td>
                <td className="px-4 py-3">個人的な快適さ、証明された優位性ではない</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="ホワイトノイズ: 幅広いマスキング、より明るいサウンド">
        <p>
          ホワイト ノイズは可聴スペクトル全体にエネルギーを拡散し、ラジオの静音に似た音になります。その幅広いプロファイルにより、断続的な環境音を目立たなくすることができます。
        </p>
        <p className="mt-4">
          高周波のヒスノイズを不快に感じるリスナーもいれば、それを好むリスナーもいます。静かに始めて、イライラが増したり、作業が難しくなったりする場合はやめてください。
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="ブラウン ノイズ: 人気はあるが、まだ十分に研究されていない">
        <p>
          ブラウン ノイズは、その深く重低音の特徴のため、オンラインで頻繁に議論されます。ただし、人気や個人的な報告は臨床的証拠と同じではありません。
        </p>
        <p className="mt-4">
          ブラウン ノイズは、低周波数 (低音) のエネルギーが大幅に多く、高周波数のエネルギーはほとんどありません。それは、深く轟く滝のような音、または飛行機の客室のくぐもった轟音のような音です。
        </p>
        <p className="mt-4">
          <strong>なぜブラウン ノイズを好む人がいるのでしょう?</strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
          <li><strong>高周波エネルギーの減少:</strong> ヒスノイズを嫌うリスナーにとっては、ホワイトノイズよりも柔らかく感じるかもしれません。</li>
          <li><strong>安定したマスキング:</strong> 背景が連続していると、環境の変化が目立たなくなることがあります。</li>
          <li><strong>個人的な快適さ:</strong> 人によっては、深みのあるサウンドのほうがバックグラウンドに留めておくのが簡単かもしれません。</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="ピンクノイズ: 中間点">
        <p>
          ブラウン ノイズが深すぎる、またはこもっていると感じる場合は、ピンク ノイズが中間周波数プロファイルを提供します。ホワイト ノイズよりも高周波エネルギーは少なく、ブラウン ノイズよりは多く、安定した激しい暴風雨に似ている場合があります。
        </p>
        <p className="mt-4">
          研究レビューではピンクノイズがホワイトノイズと並んで含まれていましたが、平均的な効果は小さく、個人の反応を予測するものではありません。
        </p>
      </ArticleSection>

      <ArticleSection id="personal-test" title="フォーカス作業中のノイズをテストする実用的な方法">
        <p>
          好みは、タスク、時間帯、または期待によって形作られながらも、説得力を感じることがあります。オンラインで最も主張が強い色を選択するよりも、反復可能な小規模な比較の方が役立ちます。
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/70">
          <li>校正、フラッシュ カード、練習問題セットなど、繰り返し可能な 20 分間のタスクを 1 つ選択します。</li>
          <li>静かな状態で 1 回、低く快適なレベルで安定した音を 1 回続けて完了します。</li>
          <li>部屋、タスクの難易度、時間帯をできるだけ現実的なものに保ちます。</li>
          <li>完了した項目、間違い、および単純な 1 ～ 5 の気晴らしスコアを記録します。</li>
          <li>数日間繰り返してから決定してください。音が疲れたり、イライラしたり、耳鳴りを引き起こす場合は停止してください。</li>
        </ol>
        <p className="mt-4">
          これは職場での実験であり、ADHD の評価や治療ではありません。繰り返し読むのに役立つ音声でも、言語学習、会話、または複雑な推論を妨げる可能性があります。
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="調査結果が何を意味するのか、そして何を意味しないのか">
        <p>
          すべての人にとって、証拠に基づいた勝者は存在しません。ホワイト ノイズとピンク ノイズは、ADHD の若者における平均的な作業パフォーマンスの利点が小さいという証拠は限られています。ブラウン ノイズは、適格な試験でまだ十分にテストされていません。
        </p>
        <p className="mt-4">
          反復可能なタスク中に一度に 1 つの静かな音をテストし、それを無音と比較し、役立つと思われる音を保持します。 Calma はその実験には役立ちますが、ADHD の診断や治療は行いません。
        </p>
        <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
          <p className="font-semibold text-amber-100">重要な制限</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            研究では、主に子供と若者を対象とした短い実験課題を測定しました。彼らは、騒音がADHDの中核症状を軽減すること、確立されたケアに取って代わること、または何か月にもわたって学校や仕事のパフォーマンスを向上させることを示していません。
          </p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "ADHD\u306B\u6700\u9069\u306A\u8272\u306E\u30CE\u30A4\u30BA\u306F\u4F55\u3067\u3059\u304B?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ADHD \u306B\u3068\u3063\u3066\u6700\u9069\u306A\u5358\u4E00\u306E\u30CE\u30A4\u30BA \u30AB\u30E9\u30FC\u306F\u3042\u308A\u307E\u305B\u3093\u3002 2024\u5E74\u306E\u30E1\u30BF\u30A2\u30CA\u30EA\u30B7\u30B9\u3067\u306F\u3001ADHD\u307E\u305F\u306F\u75C7\u72B6\u306E\u4EA2\u9032\u3092\u62B1\u3048\u308B\u82E5\u8005\u306E\u5B9F\u9A13\u5BA4\u4F5C\u696D\u306B\u304A\u3044\u3066\u3001\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u307E\u305F\u306F\u30D4\u30F3\u30AF\u30CE\u30A4\u30BA\u306E\u5E73\u5747\u7684\u306A\u5229\u70B9\u306F\u308F\u305A\u304B\u3067\u3042\u308B\u3053\u3068\u304C\u5224\u660E\u3057\u305F\u304C\u3001\u9069\u683C\u306A\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA\u7814\u7A76\u306F\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u3002"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "ADHD\u306B\u3068\u3063\u3066\u30D6\u30E9\u30A6\u30F3\u30CE\u30A4\u30BA\u306F\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA\u3088\u308A\u3082\u512A\u308C\u3066\u3044\u307E\u3059\u304B?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "\u73FE\u5728\u306E\u8A3C\u62E0\u306B\u3088\u308B\u3068\u305D\u3046\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u97F3\u304C\u6DF1\u304F\u805E\u3053\u3048\u308B\u305F\u3081\u500B\u4EBA\u7684\u306B\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u3092\u597D\u3080\u4EBA\u3082\u3044\u307E\u3059\u304C\u30012024 \u5E74\u306E\u30EC\u30D3\u30E5\u30FC\u3067\u306F\u9069\u683C\u306A\u30D6\u30E9\u30A6\u30F3 \u30CE\u30A4\u30BA\u7814\u7A76\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u500B\u3005\u306E\u53CD\u5FDC\u306F\u7570\u306A\u308A\u307E\u3059\u3002"
                        }
                    }
                ]
            })
        }}/>
      </ArticleSection>

      <ArticleSection id="sources" title="証拠と情報源">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/38428577/" target="_blank" rel="noopener noreferrer">
              ADHD における作業パフォーマンスに関するホワイト ノイズとピンク ノイズの系統的レビューとメタ分析
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/17683456/" target="_blank" rel="noopener noreferrer">
              ADHDを持つ子供のホワイトノイズと認知能力に関する実験的研究
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/25393410/" target="_blank" rel="noopener noreferrer">
              注意レベルごとにホワイトノイズに対する反応を比較した研究
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>);
}
