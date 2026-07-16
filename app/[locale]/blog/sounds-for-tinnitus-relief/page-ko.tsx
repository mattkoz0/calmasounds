import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
const articleTitle = "\uC774\uBA85 \uB9C8\uC2A4\uD0B9\uC744 \uC704\uD55C \uC18C\uB9AC: \uC2E4\uC6A9 \uAC00\uC774\uB4DC | Calma";
const articleDescription = "\uBC31\uC0C9 \uC18C\uC74C\uACFC \uC790\uC5F0 \uC18C\uB9AC\uAC00 \uC774\uBA85\uC744 \uB35C \uB208\uC5D0 \uB744\uAC8C \uB9CC\uB4DC\uB294 \uBC29\uBC95, \uC548\uC804\uD558\uAC8C \uB4E3\uB294 \uBC29\uBC95, \uC804\uBB38\uC801\uC778 \uCE58\uB8CC\uB97C \uBC1B\uC544\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC138\uC694.";
const articleUrl = "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief";
export const metadata: Metadata = {
    title: articleTitle,
    description: articleDescription,
    keywords: [
        "\uC774\uBA85 \uC18C\uB9AC",
        "\uC774\uBA85 \uC644\uD654",
        "\uC774\uBA85\uC5D0 \uAC00\uC7A5 \uC88B\uC740 \uC18C\uB9AC",
        "\uC774\uBA85 \uB9C8\uC2A4\uD0B9",
        "\uC774\uBA85\uC74C\uCE58\uB8CC",
        "\uC774\uBA85\uC744 \uAC00\uB9AC\uB294 \uBC29\uBC95",
        "\uC774\uBA85 \uC2B5\uAD00\uD654",
        "Calma \uBE14\uB85C\uADF8",
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
            "headline": "\uC774\uBA85 \uB9C8\uC2A4\uD0B9\uC744 \uC704\uD55C \uC18C\uB9AC: \uC2E4\uC6A9 \uAC00\uC774\uB4DC",
            "description": articleDescription,
            "author": { "@type": "Organization", "name": "Calma\uD300" },
            "publisher": { "@type": "Organization", "name": "Calma" },
            "mainEntityOfPage": articleUrl,
            "datePublished": "2026-05-09",
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "\uC774\uBA85 \uB9C8\uC2A4\uD0B9\uC5D0\uB294 \uC5B4\uB5A4 \uC18C\uB9AC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB098\uC694?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\uC120\uD638\uB3C4\uB294 \uB2E4\uC591\uD569\uB2C8\uB2E4. \uC5B4\uB5A4 \uC0AC\uB78C\uB4E4\uC740 \uC774\uBA85\uC758 \uB300\uBE44\uB97C \uC904\uC774\uAE30 \uC704\uD574 \uC870\uC6A9\uD55C \uBC31\uC0C9 \uC18C\uC74C, \uBE44, \uD30C\uB3C4, \uD32C \uB610\uB294 \uAE30\uD0C0 \uC911\uB9BD\uC801\uC778 \uC18C\uB9AC\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD3B8\uC548\uD55C \uC218\uC900\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC99D\uC0C1\uC774 \uC545\uD654\uB418\uBA74 \uC911\uC9C0\uD558\uC2ED\uC2DC\uC624."
                    }
                },
                {
                    "@type": "Question",
                    "name": "\uC18C\uB9AC \uCE58\uB8CC\uB294 \uC774\uBA85\uC5D0 \uC5B4\uB5BB\uAC8C \uC791\uC6A9\uD558\uB098\uC694?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\uC18C\uB9AC \uCE58\uB8CC\uB294 \uC774\uBA85\uC744 \uAC00\uB9AC\uAC70\uB098 \uC8FC\uC758\uB97C \uBD84\uC0B0\uC2DC\uD0A4\uAC70\uB098 \uC77C\uBD80 \uC0AC\uB78C\uB4E4\uC758 \uC2B5\uAD00\uD654\uB97C \uC9C0\uC6D0\uD560 \uC218 \uC788\uB294 \uC678\uBD80 \uC18C\uB9AC\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uB2E4\uC591\uD558\uBA70 \uC804\uBB38\uC801\uC778 \uC9C0\uB3C4\uAC00 \uB3C4\uC6C0\uC774 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                    }
                },
                {
                    "@type": "Question",
                    "name": "\uC774\uBA85\uC744 \uC644\uC804\uD788 \uAC00\uB824\uC57C \uD560\uAE4C\uC694?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\uBAA8\uB4E0 \uC0AC\uB78C\uC5D0\uAC8C \uC801\uD569\uD55C \uB2E8\uC77C \uB808\uBCA8\uC740 \uC5C6\uC2B5\uB2C8\uB2E4. \uC18C\uB9AC\uB97C \uD3B8\uC548\uD558\uAC8C \uC720\uC9C0\uD558\uACE0 \uD070 \uC18C\uB9AC\uB85C \uC774\uBA85\uC744 \uC555\uB3C4\uD558\uB824\uACE0 \uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624. \uCCAD\uB825\uD559\uC790\uB294 \uC811\uADFC \uBC29\uC2DD\uC744 \uC120\uD0DD\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                    }
                },
                {
                    "@type": "Question",
                    "name": "\uBC31\uC0C9\uC18C\uC74C\uC774 \uC774\uBA85\uC744 \uC545\uD654\uC2DC\uD0AC \uC218 \uC788\uB098\uC694?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "\uC2DC\uB044\uB7FD\uAC70\uB098 \uBD88\uD3B8\uD55C \uC624\uB514\uC624\uB294 \uCCAD\uB825\uC5D0 \uD574\uB97C \uB07C\uCE58\uAC70\uB098 \uC99D\uC0C1\uC744 \uC545\uD654\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBA85\uC774 \uC0C8\uB85C \uBC1C\uC0DD\uD558\uAC70\uB098 \uAC11\uC790\uAE30 \uBC1C\uC0DD\uD558\uAC70\uB098 \uC77C\uBC29\uC801\uC73C\uB85C \uBC1C\uC0DD\uD558\uAC70\uB098 \uBC15\uB3D9\uC131\uC774 \uC788\uAC70\uB098 \uC545\uD654\uB418\uB294 \uACBD\uC6B0 \uBCFC\uB968\uC744 \uB0AE\uAC8C \uC720\uC9C0\uD558\uACE0 \uC870\uC5B8\uC744 \uAD6C\uD558\uC2ED\uC2DC\uC624."
                    }
                }
            ]
        }
    ]
};
export default function SoundsForTinnitusReliefPage() {
    return (<ArticlePage slug="sounds-for-tinnitus-relief" jsonLd={articleJsonLd} topLinkHref="/tinnitus-sounds-app" topLinkLabel="이명 소리 앱 살펴보기" title="이명 마스킹을 위한 소리: 실용 가이드" intro="이명은 조용한 방에서 더 눈에 띄게 느껴질 수 있습니다. 외부 소리는 대비를 감소시키고 주의를 산만하게 하거나 일부 사람들의 습관화를 지원할 수 있지만 이는 치료법이 아니며 보편적으로 가장 좋은 소리는 없습니다. 이 가이드는 부드러운 옵션을 비교하고 안전하게 듣는 데 도움이 됩니다." ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma" ctaLabel="무료 이명 앱 다운로드" secondaryCtaHref="/tinnitus-sounds-app" secondaryCtaLabel="앱에 대해 자세히 알아보기" tableOfContents={[
            { id: "what-is-sound-therapy", title: "\uC0AC\uC6B4\uB4DC \uD14C\uB77C\uD53C\uC758 \uC791\uB3D9 \uC6D0\uB9AC" },
            { id: "evidence", title: "\uC784\uC0C1 \uC5F0\uAD6C \uACB0\uACFC" },
            { id: "white-noise", title: "\uB0A0\uCE74\uB85C\uC6B4 \uC6B8\uB9BC\uC744 \uC704\uD55C \uBC31\uC0C9 \uC7A1\uC74C" },
            { id: "brown-noise", title: "\uD734\uC2DD\uC744 \uC704\uD55C \uBE0C\uB77C\uC6B4 \uB178\uC774\uC988" },
            { id: "nature-sounds", title: "\uC790\uC5F0\uC758 \uC18C\uB9AC\uC640 \uBB3C" },
            { id: "habituation", title: "\uB9C8\uC2A4\uD0B9\uACFC \uC2B5\uAD00\uD654" },
            { id: "safe-test", title: "\uC8FC\uC758\uAE4A\uC740 \uB4E3\uAE30 \uD14C\uC2A4\uD2B8" },
            { id: "medical-care", title: "\uC9C4\uB8CC\uB97C \uBC1B\uC544\uC57C \uD560 \uB54C" },
            { id: "faq", title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" },
            { id: "sources", title: "\uC99D\uAC70 \uBC0F \uCD9C\uCC98" },
        ]} relatedArticles={[
            {
                href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
                title: "\uB178\uC774\uC988 \uC0C9\uC0C1 \uC124\uBA85",
                description: "\uD770\uC0C9, \uBD84\uD64D\uC0C9, \uAC08\uC0C9 \uC18C\uC74C\uC758 \uCC28\uC774\uC810\uC744 \uC0B4\uD3B4\uBCF4\uC138\uC694.",
            },
            {
                href: "/blog/white-noise-for-sleep",
                title: "\uC218\uBA74\uC744 \uC704\uD55C \uBC31\uC0C9\uC18C\uC74C",
                description: "\uB9C8\uC2A4\uD0B9\uC774 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD\uACFC \uC218\uBA74 \uC99D\uAC70\uAC00 \uD63C\uD569\uB41C \uC0C1\uD0DC\uB85C \uB0A8\uC544 \uC788\uB294 \uC774\uC720\uB97C \uC54C\uC544\uBCF4\uC138\uC694.",
            }
        ]}>
      <ArticleSection id="what-is-sound-therapy" title="사운드 테라피의 작동 원리">
        <p className="mt-4 leading-8 text-white/70">
          <strong>사운드 테라피</strong> 중립적이거나 쾌적한 외부 오디오를 추가합니다. 미국 국립 청각 장애 및 기타 의사소통 장애 연구소에 따르면 이명은 이명을 가리고, 사람이 이명에 익숙해지도록 돕거나 주의를 산만하게 하는 방식으로 작동할 수 있습니다. 스마트폰 소리 발생기는 휴식이나 수면 보조제로 사용될 수 있습니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">읽기 <a className="text-emerald-300 underline underline-offset-4" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">NIDCD 이명 가이드</a>, 지속되는 증상에 대해 임상의 또는 청력학자와 상담하십시오.</p>
      </ArticleSection>

      <ArticleSection id="evidence" title="임상 연구에서는 이명 소리 치료에 관해 무엇을 말합니까?">
        <p>
          증거는 "소리가 이명을 치료한다"는 것보다 더 미묘합니다. Cochrane 검토에 따르면 보청기, 소리 발생기 및 복합 장치는 서로 비교할 때 이명 심각도에 거의 또는 전혀 차이가 없을 수 있습니다. 저자들은 또한 이용 가능한 실험이 제한적이며 소리가 쓸모없다는 것을 증명하지 못했다고 강조했습니다.
        </p>
        <p className="mt-4">
          151명을 대상으로 한 다기관 무작위 시험에서는 완전 이명 재훈련 요법, 위약 음향 발생기를 이용한 상담 및 표준 치료를 비교했습니다. 모든 그룹은 18개월에 걸쳐 개선되었지만 기존 사운드 생성기는 다른 접근 방식에 비해 뚜렷한 이점을 제공하지 못했습니다. 이는 교육, 지원 및 시간이 사운드 자체와 함께 중요할 수 있음을 시사합니다.
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
          <p className="font-semibold text-emerald-100">현실적인 기대</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            배경 소리는 특히 조용한 방이나 취침 시간에 실용적인 대처 도구가 될 수 있지만 치료법이나 장기적인 치료를 보장해서는 안 됩니다.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="날카로운 울림을 위한 백색 잡음">
        <p className="mt-4 leading-8 text-white/70">
          백색소음은 꾸준하고 넓은 스펙트럼을 지닌 소리입니다. 어떤 사람들은 이것이 고음의 이명을 덜 두드러지게 만든다고 생각합니다. 다른 사람들은 더 부드럽고 자연스러운 옵션을 선호합니다.
        </p>
        <AudioPlayer src="/white_noise.m4a" title="순수 백색소음" description="배경 마스킹으로 조용히 시도하는 일관된 &quot;쉿&quot; 소리." colorClass="bg-slate-500/20 text-slate-300"/>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="깊은 휴식을 위한 브라운 노이즈">
        <p className="mt-4 leading-8 text-white/70">
          백색소음이 너무 거슬리게 들린다면, <strong>갈색 소음</strong> 더 많은 저주파 에너지를 사용하는 더 깊은 대안입니다. 편안함은 개인적인 것이므로 한 가지 색상이 이명의 음조와 일치한다고 가정하기보다는 낮은 볼륨에서 비교하십시오.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="자연의 소리: 비와 바다의 파도">
        <p className="mt-4 leading-8 text-white/70">
          꾸준히 내리는 비, 바다의 파도, 흐르는 강물과 같은 물소리는 덜 합성적인 배경을 제공합니다. 일부 청취자는 변화하는 질감을 편안한 수준으로 유지하는 것이 더 쉬울 수 있습니다.
        </p>
        <AudioPlayer src="/rain.m4a" title="꾸준한 비 (핑크 노이즈)" description="자연스럽게 뇌의 주의를 분산시키는 유기적이고 질감이 있는 사운드입니다." colorClass="bg-blue-500/20 text-blue-300"/>
      </ArticleSection>

      <ArticleSection id="habituation" title="마스킹, 부분 마스킹, 습관화는 서로 다른 목표입니다.">
        <p className="mt-4 leading-8 text-white/70">
          단순히 이명을 압도하기 위해 소리를 높이는 것을 피하십시오. 큰 소리로 들으면 청력이 손상될 수 있으며 증상이 더욱 거슬리게 될 수 있습니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          습관화 기반 프로그램은 낮은 수준의 소리와 상담을 결합하지만 계획과 혼합 수준은 개별화되어야 합니다. 단순히 조용한 취침 시간 배경이 아닌 치료 목적으로 소리를 사용하고 싶다면 청력학자가 도움을 줄 수 있습니다.
        </p>
      </ArticleSection>

      <ArticleSection id="safe-test" title="배경 소리를 테스트하는 신중한 방법">
        <ol className="list-decimal space-y-3 pl-5 text-white/70">
          <li>가능하다면 헤드폰보다는 스피커로 시작하세요. 특히 취침 시간이 길어질 경우 더욱 그렇습니다.</li>
          <li>비, 파도, 백색 소음 또는 갈색 소음 중 하나의 중립 옵션을 선택하고 명확하게 들리는 가장 낮은 수준에서 시작하십시오.</li>
          <li>이명이 완전히 사라지지 않도록 방과의 대비를 줄이는 것을 목표로 하십시오.</li>
          <li>10~15분 동안 듣고 편안함, 짜증, 이명으로 주의가 얼마나 자주 돌아오는지 기록해 보십시오.</li>
          <li>소리가 날카롭게 느껴지거나 불편함을 유발하거나 증상이 악화되는 것처럼 보이면 중지하십시오.</li>
        </ol>
        <p className="mt-4">
          일반적인 배경음에는 피치 매칭이 필요하지 않습니다. 맞춤형 치료 프로토콜은 다르므로 자격을 갖춘 임상의가 설계해야 합니다.
        </p>
      </ArticleSection>

      <ArticleSection id="medical-care" title="이명이 의학적 평가가 필요한 경우">
        <p>
          이명이 지속되거나 고통스럽거나 수면과 집중력에 영향을 미치는 경우 의료 또는 청각 평가를 준비하십시오. 갑자기 시작되거나, 부상 후 발생하거나, 갑작스러운 청력 상실이 발생하거나, 한쪽에만 발생하거나, 심장 박동이 뛰거나, 심각한 어지럼증이나 신경학적 증상이 나타나면 즉시 치료를 받으십시오.
        </p>
        <p className="mt-4">
          청력 검사는 청력 손실을 식별하고 전문적인 감독이 필요한 치료와 일상적인 소리 강화를 분리하는 데 도움이 될 수 있습니다. 앱에서는 이명의 원인을 파악할 수 없습니다.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문(FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">이명 완화에 가장 적합한 소리는 무엇입니까?</h3>
            <p className="mt-2 leading-7 text-white/70">보편적인 최고의 소리는 없습니다. 조용한 백색 소음, 비, 파도 또는 기타 중성적인 소리를 시도하고 편안함을 느끼는 것만 유지하세요.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">소리 치료는 이명에 어떻게 작용하나요?</h3>
            <p className="mt-2 leading-7 text-white/70">이명을 가리거나 주의를 분산시키거나 일부 사람들의 습관화를 지원할 수 있는 외부 오디오를 추가합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">이명을 완전히 가려야 할까요?</h3>
            <p className="mt-2 leading-7 text-white/70">그것을 압도하려는 의도로 시끄러운 오디오를 피하십시오. 적절한 수준과 접근 방식은 다양합니다. 청력학자가 도움을 줄 수 있습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음이 이명을 악화시킬 수 있나요?</h3>
            <p className="mt-2 leading-7 text-white/70">시끄럽거나 불편한 소리는 청력에 해를 끼치거나 증상을 악화시킬 수 있습니다. 농도를 낮게 유지하고 증상이 악화되면 중단하십시오.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="증거 및 출처">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">
              국립 청각 장애 및 기타 의사소통 장애 연구소: 이명 개요
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013094.pub2/full" target="_blank" rel="noopener noreferrer">
              이명에 대한 소리 치료 장치에 대한 Cochrane 검토
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/31120533/" target="_blank" rel="noopener noreferrer">
              이명 재훈련 요법, 소리 발생기 및 표준 치료의 무작위 시험
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>);
}
