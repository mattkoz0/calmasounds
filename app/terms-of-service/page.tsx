import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Calma",
  description:
    "Read the terms of service for using Calma, including our commitment to your privacy and the rules of app usage.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Calma logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
                priority
              />
            </Link>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Terms of Service </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Last updated: April 13, 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Calma website and application, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Use of License</h2>
            <p>
              Calma grants you a personal, non-exclusive, non-transferable,
              revocable license to use the app for your personal, non-commercial
              use. You may not decompile, reverse engineer, or attempt to derive
              the source code of the application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Content and Copyright</h2>
            <p>
              All soundscapes, graphics, and interface designs are the
              intellectual property of Calma. You may create personal mixes for
              your own use, but you may not redistribute the audio content as
              standalone files or parts of other products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Disclaimer</h2>
            <p>
              Calma is provided "as is". While we aim to provide a high-quality
              experience for sleep and relaxation, we do not guarantee specific
              health outcomes. Calma is not a medical device and should not replace
              professional medical advice or treatment for sleep disorders.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
            <p>
              In no event shall Calma be liable for any damages arising out of
              the use or inability to use the services, even if we have been
              notified of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your
              continued use of the service following any changes constitutes your
              acceptance of the new Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-semibold text-white">
              <a href="mailto:calma.app@outlook.com" className="underline underline-offset-4 hover:text-white/80">
                calma.app@outlook.com
              </a>
            </p>
          </section>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Calma. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
