import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Calma",
  description:
    "Calmaがあなたのデータをどのように収集、使用、保護するかを理解するために、プライバシーポリシーをお読みください。",
    alternates: {
    canonical: "https://www.calmasounds.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> プライバシーポリシー </h1>
        <p className="mt-4 text-sm text-white/50 italic"> 最終更新日: 2026年4月13日 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">はじめに</h2>
            <p>
              Calmaでは、あなたのプライバシーの保護に努めています。このプライバシーポリシーは、あなたが私たちのウェブサイト（calmasounds.com）を訪問し、Calmaアプリケーションを使用する際に、私たちがあなたの情報をどのように収集、使用、保護するかを説明するものです。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">収集する情報</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">個人データ</h3>
              <p>
                私たちはデフォルトで個人データを収集することはありません。電子メールでサポートチームに連絡された場合、私たちはあなたのお問い合わせに回答する目的でのみ、あなたの電子メールアドレスを使用します。
              </p>
              
              <h3 className="text-xl font-medium text-white/90">使用データと分析</h3>
              <p>
                私たちは、訪問者が私たちのウェブサイトをどのように操作しているかを理解するためにGoogle Analyticsを使用しています。このサービスは、あなたのIPアドレス（匿名化）、ブラウザの種類、訪問したページなどの匿名情報を収集します。このデータは、ユーザー体験とコンテンツの明確さを向上させるのに役立ちます。
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookie（クッキー）</h2>
            <p>
              Cookieは、サイトのトラフィックを分析し、あなたの体験を最適化するのに役立つ、デバイスに保存される小さなテキストファイルです。私たちはGoogle Analyticsが提供するパフォーマンスおよび分析用Cookieを使用しています。私たちのウェブサイトの同意バナーを通じて、Cookieを受け入れるか拒否するかを選択できます。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">情報の使用方法</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>当社のサービスを提供および維持するため。</li>
              <li>当社のサービスの変更についてお知らせするため。</li>
              <li>カスタマーケアおよびサポートを提供するため。</li>
              <li>当社のサービスの使用状況を監視し、そのパフォーマンスを向上させるため。</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">データのセキュリティ</h2>
            <p>
              あなたのデータのセキュリティは私たちにとって重要ですが、インターネット上の送信方法、または電子的な保存方法は100％安全ではないことを覚えておいてください。私たちはあなたの情報を保護するために商業的に受け入れられる手段を使用するよう努めていますが、絶対的な安全性を保証することはできません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">子供のプライバシー</h2>
            <p>
              当社のサービスは、13歳未満の者を対象としていません。私たちは、13歳未満の者から意図的に個人を特定できる情報を収集することはありません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">お問い合わせ</h2>
            <p>
              このプライバシーポリシーについてご質問がある場合は、以下までご連絡ください。
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
