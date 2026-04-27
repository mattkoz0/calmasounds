import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "이용약관 | Calma",
  description:
    "귀하의 개인정보 보호에 대한 당사의 약속과 앱 사용 규칙을 포함하여 Calma 사용을 위한 이용약관을 읽어보세요.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.calmasounds.com/ko/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> 이용약관 </h1>
        <p className="mt-4 text-sm text-white/50 italic"> 최종 수정일: 2026년 4월 27일 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. 약관의 수락</h2>
            <p>
              Calma 웹사이트 및 애플리케이션에 액세스하고 사용함으로써 귀하는 본 계약의 약관 및 규정을 수락하고 이에 구속되는 데 동의합니다. 위의 사항을 준수하는 데 동의하지 않는 경우 본 서비스를 사용하지 마십시오.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. 라이선스 사용</h2>
            <p>
              Calma는 귀하에게 개인적이고 비상업적인 용도로 앱을 사용할 수 있는 개인적이고 비독점적이며 양도 불가능하고 취소 가능한 라이선스를 부여합니다. 귀하는 애플리케이션을 역컴파일하거나 리버스 엔지니어링하거나 소스 코드를 도출하려고 시도해서는 안 됩니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. 콘텐츠 및 저작권</h2>
            <p>
              모든 사운드스케이프, 그래픽 및 인터페이스 디자인은 Calma의 지적 재산입니다. 귀하는 자신의 용도로 개인적인 믹스를 만들 수 있지만, 오디오 콘텐츠를 독립형 파일이나 다른 제품의 일부로 재배포할 수는 없습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. 면책 조항</h2>
            <p>
              Calma는 "있는 그대로" 제공됩니다. 당사는 수면과 휴식을 위한 고품질의 경험을 제공하는 것을 목표로 하지만, 특정 건강 결과를 보장하지는 않습니다. Calma는 의료 기기가 아니며 수면 장애에 대한 전문적인 의학적 조언이나 치료를 대체해서는 안 됩니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. 책임의 제한</h2>
            <p>
              어떤 경우에도 Calma는 서비스의 사용 또는 사용 불능으로 인해 발생하는 손해에 대해 책임을 지지 않으며, 이는 당사가 그러한 손해의 가능성을 통지받은 경우에도 마찬가지입니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. 약관의 변경</h2>
            <p>
              당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 변경 사항이 게시된 후에도 서비스를 계속 사용하면 새로운 이용약관을 수락하는 것으로 간주됩니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. 연락처 정보</h2>
            <p>
              본 약관에 대해 질문이 있는 경우 다음 주소로 문의해 주십시오:
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
