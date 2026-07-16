import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
const articleTitle = "\uBC31\uC0C9\uC18C\uC74C\uC774 \uC218\uBA74\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC774\uC720\uB294 \uBB34\uC5C7\uC785\uB2C8\uAE4C? \uC99D\uAC70 \uBC0F \uD55C\uACC4 | Calma";
const articleDescription = "\uBC31\uC0C9\uC18C\uC74C\uC740 \uBCC0\uD654\uD558\uB294 \uCE68\uC2E4 \uC18C\uB9AC\uB97C \uAC00\uB9B4 \uC218 \uC788\uC9C0\uB9CC \uC218\uBA74 \uC99D\uAC70\uB294 \uD63C\uD569\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uAC83\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0, \uC5B4\uB5A4 \uC2DC\uB3C4\uAC00 \uBC1C\uACAC\uB418\uC5C8\uB294\uC9C0, \uC8FC\uC758 \uAE4A\uAC8C \uB4E3\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uC138\uC694.";
const articleUrl = "https://www.calmasounds.com/blog/white-noise-for-sleep";
export const metadata: Metadata = {
    title: articleTitle,
    description: articleDescription,
    keywords: [
        "\uC218\uBA74\uC744 \uC704\uD55C \uBC31\uC0C9\uC18C\uC74C",
        "\uBC31\uC0C9\uC18C\uC74C\uC774 \uC7A0\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC774\uC720",
        "\uC7A0\uC798 \uB54C \uB4E4\uB9AC\uB294 \uBC31\uC0C9\uC18C\uC74C",
        "\uC219\uBA74\uC744 \uB3D5\uB294 \uBC31\uC0C9\uC18C\uC74C",
        "\uC218\uBA74\uC5D0 \uAC00\uC7A5 \uC88B\uC740 \uBC31\uC0C9\uC18C\uC74C",
        "\uBC31\uC0C9\uC18C\uC74C\uC774 \uC7A0\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB098\uC694?",
        "Calma \uBE14\uB85C\uADF8",
    ],
    robots: {
        index: true,
        follow: true,
    },
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
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "\uBC31\uC0C9\uC18C\uC74C\uC774 \uC218\uBA74\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uC774\uC720\uB294 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "\uBC31\uC0C9 \uC18C\uC74C\uC740 \uAFB8\uC900\uD55C \uBC30\uACBD \uC18C\uB9AC\uC640 \uAD50\uD1B5 \uC18C\uC74C\uC774\uB098 \uBB38 \uC18C\uB9AC\uC640 \uAC19\uC740 \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uC18C\uC74C \uC0AC\uC774\uC758 \uB300\uBE44\uB97C \uC904\uC5EC \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB9C8\uC2A4\uD0B9 \uD6A8\uACFC\uB294 \uBC29\uD574 \uC694\uC18C\uB97C \uB35C \uB208\uC5D0 \uB744\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC9C0\uB9CC \uC5F0\uAD6C\uC5D0 \uB530\uB974\uBA74 \uC774\uAC83\uC774 \uBAA8\uB4E0 \uC0AC\uB78C\uC758 \uC218\uBA74\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uAC83\uC73C\uB85C \uB098\uD0C0\uB098\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4."
            }
        },
        {
            "@type": "Question",
            "name": "\uC218\uBA74\uC744 \uC704\uD55C \uBC31\uC0C9\uC18C\uC74C\uC774\uB780 \uC815\uD655\uD788 \uBB34\uC5C7\uC778\uAC00\uC694?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "\uAE30\uC220\uC801 \uBC31\uC0C9\uC18C\uC74C\uC740 \uD5E4\uB974\uCE20\uB2F9 \uC804\uB825\uC774 \uB3D9\uC77C\uD558\uBA70 \uC7A1\uC74C\uCC98\uB7FC \uB4E4\uB9BD\uB2C8\uB2E4. \uB9CE\uC740 \uD32C\uACFC \uC5D0\uC5B4\uCEE8\uC740 \uC218\uD559\uC801\uC73C\uB85C \uBC31\uC0C9 \uC7A1\uC74C\uC774 \uC544\uB2CC \uAD11\uB300\uC5ED \uC0AC\uC6B4\uB4DC\uC774\uC9C0\uB9CC \uC5EC\uC804\uD788 \uC548\uC815\uC801\uC778 \uB9C8\uC2A4\uD0B9 \uBC30\uACBD\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
            }
        },
        {
            "@type": "Question",
            "name": "\uD654\uC774\uD2B8 \uB178\uC774\uC988\uB098 \uD551\uD06C \uB178\uC774\uC988\uAC00 \uC218\uBA74\uC5D0 \uB354 \uC88B\uB098\uC694?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "\uC5F0\uAD6C\uB294 \uBCF4\uD3B8\uC801\uC778 \uC2B9\uC790\uB97C \uD655\uB9BD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD551\uD06C \uB178\uC774\uC988\uB294 \uACE0\uC8FC\uD30C \uC5D0\uB108\uC9C0\uAC00 \uC801\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uBD80\uB4DC\uB7FD\uAC8C \uB4E4\uB9AC\uB294 \uBC18\uBA74, \uD654\uC774\uD2B8 \uB178\uC774\uC988\uB294 \uB354 \uB113\uC740 \uACE0\uC8FC\uD30C \uB9C8\uC2A4\uD0B9\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD3B8\uC548\uD568\uACFC \uCE68\uC2E4 \uD658\uACBD\uC774 \uC911\uC694\uD569\uB2C8\uB2E4."
            }
        },
        {
            "@type": "Question",
            "name": "\uB9E4\uC77C \uBC24 \uBC31\uC0C9 \uC18C\uC74C\uC744 \uB4E4\uC73C\uBA70 \uC7A0\uC744 \uC790\uB3C4 \uC548\uC804\uD55C\uAC00\uC694?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "\uBC31\uC0C9\uC18C\uC74C\uC744 \uBAA9\uC801\uC5D0 \uB9DE\uB294 \uAC00\uC7A5 \uD3B8\uC548\uD55C \uC218\uC900\uC73C\uB85C \uC720\uC9C0\uD558\uACE0 \uC74C\uC6D0\uC744 \uBA38\uB9AC\uC5D0\uC11C \uBA40\uB9AC \uB450\uC2ED\uC2DC\uC624. \uBD88\uD3B8\uD568, \uBCA8\uC18C\uB9AC \uB610\uB294 \uC218\uBA74 \uC7A5\uC560\uB97C \uC720\uBC1C\uD558\uB294 \uACBD\uC6B0 \uC911\uB2E8\uD558\uC2ED\uC2DC\uC624. \uBAA8\uB4E0 \uC7A5\uCE58\uC640 \uBC29\uC5D0 \uC801\uD569\uD55C \uB2E8\uC77C \uBCFC\uB968\uC774\uB098 \uAC70\uB9AC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
            }
        },
        {
            "@type": "Question",
            "name": "\uBC31\uC0C9\uC18C\uC74C\uACFC \uD568\uAED8 \uC7A0\uB4DC\uB294 \uAC83\uC5D0 \uC911\uB3C5\uB420 \uC218 \uC788\uB098\uC694?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "\uBC31\uC0C9\uC18C\uC74C\uC740 \uC2E0\uCCB4\uC801\uC73C\uB85C \uC911\uB3C5\uC131\uC774 \uC788\uB294 \uAC83\uC73C\uB85C \uAC04\uC8FC\uB418\uC9C0 \uC54A\uC9C0\uB9CC \uD559\uC2B5\uB41C \uCDE8\uCE68 \uC2DC\uAC04 \uB8E8\uD2F4\uC758 \uC77C\uBD80\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB354 \uC774\uC0C1 \uC6D0\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB808\uBCA8\uC744 \uB0AE\uCD94\uAC70\uB098 \uD0C0\uC774\uBA38\uB97C \uC810\uCC28\uC801\uC73C\uB85C \uC904\uC5EC\uBCF4\uC138\uC694."
            }
        }
    ]
};
const relatedArticles = [
    {
        href: "/blog/rain-sounds-vs-white-noise",
        title: "\uBE57\uC18C\uB9AC\uC640 \uBC31\uC0C9\uC18C\uC74C",
        description: "\uC790\uC5F0\uBE44\uC640 \uC778\uACF5\uC815\uC804\uC758 \uAC10\uC131\uC801\uC778 \uB290\uB08C\uACFC \uC2E4\uC81C\uC801\uC778 \uCC28\uC774\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.",
    },
    {
        href: "/blog/best-sounds-for-sleep",
        title: "\uC218\uBA74\uC744 \uC704\uD55C \uCD5C\uACE0\uC758 \uC18C\uB9AC",
        description: "\uD551\uD06C \uB178\uC774\uC988\uBD80\uD130 \uBC14\uB2E4 \uD30C\uB3C4\uAE4C\uC9C0 \uB2E4\uC591\uD55C \uC218\uBA74 \uC0AC\uC6B4\uB4DC \uC2A4\uD0C0\uC77C\uC744 \uD0D0\uC0C9\uD574 \uBCF4\uC138\uC694.",
    },
];
export default function WhiteNoiseForSleepPage() {
    return (<ArticlePage slug="white-noise-for-sleep" jsonLd={articleJsonLd} topLinkHref="/white-noise-app" topLinkLabel="백색소음 앱 살펴보기" title="백색소음이 수면에 도움이 되는 이유는 무엇입니까? 과학 설명" intro="백색 소음은 예측할 수 없는 침실 소리를 더욱 일관되게 만들어 교통 상황, 이웃 또는 문이 수면을 방해할 때 도움이 될 수 있습니다. 그렇다고 해서 잠이 깊어지거나 모든 사람에게 효과가 있다는 의미는 아닙니다. 여기에 마스킹 메커니즘, 양쪽에 대한 가장 강력한 증거, 그리고 그것이 당신의 방에 적합한지 결정하는 신중한 방법이 있습니다." ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma" ctaLabel="Calma 앱을 무료로 다운로드하세요" secondaryCtaHref="/white-noise-app" secondaryCtaLabel="백색소음 플레이어 살펴보기" tableOfContents={[
            { id: "how-it-works", title: "\uC0AC\uC6B4\uB4DC \uB9C8\uC2A4\uD0B9\uC774 \uBC29\uD574\uB97C \uC904\uC774\uB294 \uBC29\uBC95" },
            { id: "evidence", title: "\uC218\uBA74 \uC5F0\uAD6C\uC5D0\uC11C \uBC1C\uACAC\uB41C \uAC83" },
            { id: "what-is-it", title: "\uBC31\uC0C9\uC18C\uC74C\uC774\uB780 \uC815\uD655\uD788 \uBB34\uC5C7\uC778\uAC00\uC694?" },
            { id: "comparison-table", title: "\uD654\uC774\uD2B8 vs \uD551\uD06C vs \uBE0C\uB77C\uC6B4 \uB178\uC774\uC988" },
            { id: "best-practices", title: "\uC548\uC804\uD558\uAC8C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95" },
            { id: "faq", title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" },
            { id: "sources", title: "\uC99D\uAC70 \uBC0F \uCD9C\uCC98" },
        ]} relatedArticles={relatedArticles}>
      <ArticleSection id="how-it-works" title="사운드 마스킹이 수면 방해를 줄이는 방법">
        <p className="mt-4 leading-8 text-white/70">
          백색소음은 방해를 압도할 필요가 없습니다. 통해 <strong>사운드 마스킹</strong>, 안정된 배경은 방과 간헐적인 소리 사이의 대비를 감소시킵니다. 따라서 문 닫힘은 거의 조용할 때보다 조용한 광대역 소음에 대해 덜 두드러질 수 있습니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          마스킹은 환경 소리를 변경하는 것이 문제일 때 가장 관련성이 높습니다. 불편한 방, 일관되지 않은 일정, 수면 무호흡증, 소음과 무관한 요인으로 인한 통증 또는 불면증은 해결할 수 없습니다.
        </p>
      </ArticleSection>

      <ArticleSection id="evidence" title="백색소음이 수면에 도움이 되나요? 연구 결과">
        <p>
          한 무작위 교차 연구에서는 18명의 건강한 젊은 성인을 대상으로 평소보다 90분 일찍 잠자리에 들도록 요청하여 광대역 사운드를 테스트했습니다. 이는 일시적인 잠들기 어려움 모델입니다. 소리 상태는 안정된 2단계 수면에 이르는 평균 시간을 19분에서 13분으로 단축시켰는데, 이는 상대적으로 38% 감소한 것입니다. 흥미롭긴 하지만 만성 불면증을 앓고 있는 사람들을 대상으로 한 실험이라기보다는 소규모의 인위적인 실험이었습니다.
        </p>
        <p className="mt-4">
          체계적인 검토에서는 지속적인 백색 또는 유사한 광대역 잡음에 대한 38개 연구를 조사했습니다. 결과는 수면 개선부터 방해까지 다양했으며, 저자는 소리, 참가자 및 수면 측정이 상당히 다양하기 때문에 이점에 대한 근거의 확실성이 매우 낮다고 평가했습니다.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
            <p className="font-semibold text-emerald-100">가장 그럴듯한 용도</p>
            <p className="mt-2 text-sm leading-6 text-white/70">간헐적인 교통, 가정 또는 이웃 소음을 낮은 수준으로 마스킹합니다.</p>
          </div>
          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
            <p className="font-semibold text-amber-100">확립되지 않은 것</p>
            <p className="mt-2 text-sm leading-6 text-white/70">지속적인 소음은 수면을 깊게 하고 불면증을 치료하거나 모든 청취자에게 도움이 됩니다.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="what-is-it" title="백색소음이란 정확히 무엇인가요?">
        <p className="mt-4 leading-8 text-white/70">
          물리학에서 백색소음은 사람이 들을 수 있는 범위(20~20,000Hz) 내의 모든 주파수를 동일한 강도로 포함하는 소리입니다. 모든 주파수가 동시에 포함되어 있기 때문에 텔레비전 잡음, 조정되지 않은 라디오 또는 윙윙거리는 팬과 유사한 \"쉿\" 소음처럼 들립니다.
        </p>
        <AudioPlayer src="/white_noise.m4a" title="순수 백색소음" description="날카로운 소음을 차단하는 일관된 풀 스펙트럼 사운드." colorClass="bg-slate-500/20 text-slate-300"/>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="수면을 위한 백색 잡음 vs 분홍색 vs 갈색 잡음">
        <p className="mt-4 leading-8 text-white/70">
          모든 \"백색 소음\"이 기술적으로 흰색인 것은 아닙니다. 노이즈 색상은 주파수 균형을 나타냅니다. 차이에 따라 각 소리의 느낌이 달라지지만, 연구에서는 한 가지 색상이 보편적으로 수면에 가장 적합한 것으로 식별하지 않습니다.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">노이즈 색상</th>
                <th className="px-6 py-4 font-semibold">주파수 초점</th>
                <th className="px-6 py-4 font-semibold">최고의 용도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">백색소음</td>
                <td className="px-6 py-4">모든 주파수에서 동일합니다.</td>
                <td className="px-6 py-4">날카롭고 예측할 수 없는 소음(코골이, 개 짖는 소리)을 마스킹합니다.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">핑크 노이즈</td>
                <td className="px-6 py-4">낮은 주파수가 증폭되었습니다(비처럼 들림).</td>
                <td className="px-6 py-4">히스를 싫어하는 청취자를 위한 부드러운 배경입니다.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">브라운 노이즈</td>
                <td className="px-6 py-4">가장 깊은 주파수만(멀리서 천둥소리처럼 들림)</td>
                <td className="px-6 py-4">편안함을 위해 주로 선택된 더 깊은 배경.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="best-practices" title="백색소음을 안전하게 사용하는 방법">
        <p className="mt-4 leading-8 text-white/70">
          백색소음을 테스트하는 경우 더 큰 소리를 더 효과적으로 재생하는 대신 방에 필요한 최소한의 소리를 사용하십시오.
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>가장 낮은 가청 설정에서 시작하십시오.</strong> 마스크하려는 교란의 대비를 부드럽게 할 만큼만 높이십시오.</li>
          <li><strong>소스를 머리에서 멀리 두십시오.</strong> 방의 다른 곳에 있는 스피커는 일반적으로 베개 옆에 있는 전화기보다 배경을 더 균일하게 만듭니다.</li>
          <li><strong>타이머 테스트:</strong> 소리가 안정되는 동안에만 유용하다면 밤새도록 작동해야 한다고 가정할 이유가 없습니다.</li>
          <li><strong>조용한 밤과 비교해보세요:</strong> 각성, 불편함, 아침 피로 또는 울림이 더 많이 느껴지면 중지하십시오.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문(FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음이 수면에 도움이 되는 이유는 무엇일까요?</h3>
            <p className="mt-2 leading-7 text-white/70">안정된 방과 갑작스러운 소음 사이의 대비를 줄여 차량이나 문을 덜 눈에 띄게 만들 수 있습니다. 그것이 모든 사람에게 도움이 된다는 증거는 없습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">수면을 위한 백색소음이란 정확히 무엇인가요?</h3>
            <p className="mt-2 leading-7 text-white/70">기술적 백색소음은 헤르츠당 전력이 동일하며 잡음처럼 들립니다. 팬과 에어컨은 일반적으로 수학적으로 백색 소음이 아닌 광대역 소리입니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">화이트 노이즈나 핑크 노이즈가 수면에 더 좋나요?</h3>
            <p className="mt-2 leading-7 text-white/70">어느 쪽도 보편적으로 더 나은 것은 아닙니다. 핑크 노이즈는 고주파 에너지가 적기 때문에 더 부드럽게 들립니다. 백색 잡음은 더 넓은 마스킹을 제공할 수 있습니다. 선호도와 환경이 중요합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">매일 밤 백색 소음을 들으며 잠을 자도 안전한가요?</h3>
            <p className="mt-2 leading-7 text-white/70">가장 편안한 수준을 사용하고, 소스를 머리에서 멀리 두고, 불편함, 벨소리 또는 수면 장애를 유발하는 경우 중지하십시오.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음과 함께 잠드는 것에 중독될 수 있나요?</h3>
            <p className="mt-2 leading-7 text-white/70">신체적으로 중독되는 것으로 간주되지는 않지만 학습된 취침 시간 루틴의 일부가 될 수 있습니다. 멈추고 싶으면 볼륨을 낮추거나 타이머를 점차적으로 줄여보세요.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="증거 및 출처">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/29312136/" target="_blank" rel="noopener noreferrer">
              광대역 사운드와 일시적인 잠들기 어려움에 대한 무작위 교차 연구
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/33007706/" target="_blank" rel="noopener noreferrer">
              체계적인 검토: 수면 보조제로서의 지속적인 소음
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9163611/" target="_blank" rel="noopener noreferrer">
              다양한 인구 집단의 수면에 대한 백색소음 및 핑크소음 검토
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>);
}
