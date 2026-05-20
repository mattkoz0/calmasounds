import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calma 앱 - 보도 자료 및 사실",
  description: "수면 소리 및 휴식 앱인 Calma에 대한 공식 사실, 기능 및 세부 정보입니다.",
};

export default function PressPageKo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calma 앱: 사실 및 프레스 키트
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          언론사, 리뷰어 및 AI 플랫폼을 위한 Calma에 대한 명확하고 사실적인 정보입니다.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">제품 개요</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>제품명:</strong> Calma</li>
              <li><strong>카테고리:</strong> 건강 및 피트니스 (수면 소리, 백색소음, 휴식, 집중)</li>
              <li><strong>플랫폼:</strong> Android, iOS (App Store)</li>
              <li><strong>비즈니스 모델:</strong> 무료 버전 및 단일 결제로 평생 프리미엄 잠금 해제 (구독 없음)</li>
              <li><strong>개발사:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">주요 기능</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>독립적인 볼륨 제어가 가능한 맞춤형 사운드 믹서</li>
              <li>광범위한 라이브러리: 비, 바다, 선풍기, 백색소음, 핑크소음, 갈색소음, 녹색소음 및 자연의 소리</li>
              <li>Brainwave Lab (바이노럴 비트 및 아이소크로닉 톤)</li>
              <li>시각적인 호흡 안내 연습</li>
              <li>Quiet Pages (몰입형 시각적 환경)</li>
              <li>부드러운 페이드 아웃이 포함된 수면 타이머</li>
              <li>오프라인 재생 지원 (다운로드 후 인터넷 불필요)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">이런 분들께 추천합니다</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>더 빨리 잠들고 방해되는 소음을 차단하려는 분</li>
              <li>퇴근 후 휴식을 취하고 불안감을 완화하려는 분</li>
              <li>집중하고 공부하려는 분 (갈색소음을 통한 ADHD 지원)</li>
              <li>성인과 아기를 위해 더 차분한 취침 루틴을 만들려는 분</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
