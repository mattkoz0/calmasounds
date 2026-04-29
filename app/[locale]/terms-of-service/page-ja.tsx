import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Calma",
  description:
    "プライバシーへの取り組みやアプリの利用規則を含む、Calmaの利用規約をお読みください。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> 利用規約 </h1>
        <p className="mt-4 text-sm text-white/50 italic"> 最終更新日: 2026年4月13日 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. 規約の同意</h2>
            <p>
              Calmaのウェブサイトおよびアプリケーションにアクセスして使用することにより、あなたはこの契約の条件と規定に拘束されることに同意し、承諾したものとみなされます。上記を遵守することに同意しない場合は、このサービスを使用しないでください。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. ライセンスの使用</h2>
            <p>
              Calmaは、個人的、非商業的な使用のためにアプリを使用する、個人的、非排他的、譲渡不可能、取り消し可能なライセンスをあなたに付与します。あなたは、アプリケーションを逆コンパイル、リバースエンジニアリング、またはソースコードを引き出そうとしてはなりません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. コンテンツと著作権</h2>
            <p>
              すべてのサウンドスケープ、グラフィック、およびインターフェースのデザインはCalmaの知的財産です。あなたは自身の使用のために個人的なミックスを作成することはできますが、オーディオコンテンツを独立したファイルまたは他の製品の一部として再配布することはできません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. 免責事項</h2>
            <p>
              Calmaは「現状有姿」で提供されます。私たちは睡眠とリラクゼーションのための高品質な体験を提供することを目指していますが、特定の健康上の結果を保証するものではありません。Calmaは医療機器ではなく、睡眠障害に対する専門的な医学的アドバイスや治療に代わるものではありません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. 責任の制限</h2>
            <p>
              いかなる場合においても、Calmaは、サービスの利用または利用不能から生じるいかなる損害についても、たとえ私たちがそのような損害の可能性について知らされていたとしても、責任を負いません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. 規約の変更</h2>
            <p>
              私たちは、いつでもこれらの規約を変更する権利を留保します。変更後も引き続きサービスを利用することは、新しい利用規約に同意したことを意味します。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. お問い合わせ</h2>
            <p>
              これらの利用規約についてご質問がある場合は、以下までご連絡ください。
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
