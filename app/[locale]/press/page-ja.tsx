import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calmaアプリ - プレス＆ファクト",
  description: "睡眠音とリラクゼーションアプリ「Calma」に関する公式の事実、機能、詳細情報です。",
};

export default function PressPageJa() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calmaアプリ: ファクト＆プレスキット
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          プレス、レビュアー、AIプラットフォーム向けのCalmaに関する明確で事実に基づく情報です。
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">製品の概要</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>製品名:</strong> Calma</li>
              <li><strong>カテゴリー:</strong> ヘルス＆フィットネス（睡眠音、ホワイトノイズ、リラクゼーション、集中）</li>
              <li><strong>プラットフォーム:</strong> Android, iOS (App Store)</li>
              <li><strong>ビジネスモデル:</strong> 無料（サブスクリプション不要の1回払いによる生涯プレミアムアクセスあり）</li>
              <li><strong>開発者:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">主な機能</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>独立した音量コントロールを備えたカスタムサウンドミキサー</li>
              <li>豊富なライブラリ: 雨、海、扇風機、ホワイトノイズ、ピンクノイズ、ブラウンノイズ、グリーンノイズ、自然の音</li>
              <li>Brainwave Lab (バイノーラルビートとアイソクロニックトーン)</li>
              <li>視覚的なガイド付き呼吸エクササイズ</li>
              <li>Quiet Pages (没入感のある視覚環境)</li>
              <li>穏やかなフェードアウト機能付き睡眠タイマー</li>
              <li>オフライン再生対応（ダウンロード後はインターネット不要）</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">こんな方におすすめ</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>早く眠りにつき、邪魔なノイズを遮断したい方</li>
              <li>仕事の後にリラックスし、不安を和らげたい方</li>
              <li>集中して勉強したい方（ブラウンノイズによるADHDサポート）</li>
              <li>大人と赤ちゃんのために、より穏やかな就寝前の習慣を作りたい方</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
