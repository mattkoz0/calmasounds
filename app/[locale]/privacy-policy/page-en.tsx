import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Calma",
  description:
    "Read our privacy policy to understand how Calma collects, uses, and protects your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Privacy Policy </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Last updated: April 13, 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p>
              At Calma, we are committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you visit our website (calmasounds.com) and use
              the Calma application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Personal Data</h3>
              <p>
                We do not collect any personal data by default. If you contact our
                support teams via email, we will use your email address solely to
                respond to your inquiry.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Usage Data & Analytics</h3>
              <p>
                We use Google Analytics to understand how visitors interact with
                our website. This service collects anonymous information such as
                your IP address (anonymized), browser type, and pages visited.
                This data helps us improve the user experience and the clarity
                of our content.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p>
              Cookies are small text files stored on your device that help us
              analyze site traffic and optimize your experience. We use
              performance and analytical cookies provided by Google Analytics.
              You can choose to accept or decline cookies through the consent
              banner on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To provide customer care and support.</li>
              <li>To monitor the usage of our Service and improve its performance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your information, we cannot guarantee
              its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at:
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
