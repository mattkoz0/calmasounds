import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | Calma",
  description:
    "Calma가 사용자의 데이터를 어떻게 수집, 사용 및 보호하는지 이해하려면 개인정보 처리방침을 읽어보세요.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.calmasounds.com/ko/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> 개인정보 처리방침 </h1>
        <p className="mt-4 text-sm text-white/50 italic"> 최종 수정일: 2026년 4월 27일 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. 서론</h2>
            <p>
              Calma는 귀하의 개인정보 보호를 위해 최선을 다하고 있습니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트(calmasounds.com)를 방문하고 Calma 애플리케이션을 사용할 때 당사가 귀하의 정보를 어떻게 수집, 사용 및 보호하는지 설명합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. 수집하는 정보</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">개인 데이터</h3>
              <p>
                당사는 기본적으로 어떠한 개인 데이터도 수집하지 않습니다. 귀하가 이메일을 통해 당사의 지원 팀에 문의하는 경우, 당사는 귀하의 문의에 답변하기 위한 목적으로만 귀하의 이메일 주소를 사용합니다.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">사용 데이터 및 분석</h3>
              <p>
                당사는 방문자가 당사 웹사이트와 어떻게 상호작용하는지 이해하기 위해 Google Analytics를 사용합니다. 이 서비스는 익명화된 IP 주소, 브라우저 유형, 방문한 페이지와 같은 익명 정보를 수집합니다. 이 데이터는 사용자 경험을 개선하고 콘텐츠의 명확성을 높이는 데 도움이 됩니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. 쿠키</h2>
            <p>
              쿠키는 사이트 트래픽을 분석하고 경험을 최적화하는 데 도움이 되는 귀하의 장치에 저장되는 작은 텍스트 파일입니다. 당사는 Google Analytics에서 제공하는 성능 및 분석 쿠키를 사용합니다. 귀하는 당사 웹사이트의 동의 배너를 통해 쿠키를 수락하거나 거부할 수 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. 정보의 사용 목적</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>서비스 제공 및 유지관리</li>
              <li>서비스 변경 사항 알림</li>
              <li>고객 관리 및 지원 제공</li>
              <li>서비스 사용 모니터링 및 성능 개선</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. 데이터 보안</h2>
            <p>
              귀하의 데이터 보안은 당사에게 중요하지만, 인터넷을 통한 전송 방법이나 전자적 저장 방법은 100% 안전하지 않다는 점을 기억하십시오. 당사는 귀하의 정보를 보호하기 위해 상업적으로 수용 가능한 수단을 사용하기 위해 노력하지만, 절대적인 보안을 보장할 수는 없습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. 아동의 개인정보 보호</h2>
            <p>
              당사의 서비스는 13세 미만 아동을 대상으로 하지 않습니다. 당사는 지식이 있는 상태에서 13세 미만 아동으로부터 개인 식별 정보를 수집하지 않습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. 문의하기</h2>
            <p>
              본 개인정보 처리방침에 대해 질문이 있는 경우 다음 주소로 문의해 주십시오:
            </p>
            <p className="font-semibold text-white">
              <a href="mailto:calma.app@outlook.com" className="underline underline-offset-4 hover:text-white/80">
                calma.app@outlook.com
              </a>
            </p>
          </section>
        </div>
      </section>

    </main>
  );
}
