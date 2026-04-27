import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Calma",
  description:
    "Lisez notre politique de confidentialité pour comprendre comment Calma collecte, utilise et protège vos données.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.calmasounds.com/fr/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Politique de confidentialité </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Dernière mise à jour : 27 avril 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introduction</h2>
            <p>
              Chez Calma, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web (calmasounds.com) et utilisez l'application Calma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Informations que nous collectons</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Données personnelles</h3>
              <p>
                Nous ne collectons aucune donnée personnelle par défaut. Si vous contactez notre support par e-mail, nous utiliserons votre adresse e-mail uniquement pour répondre à votre demande.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Données d'utilisation et analyses</h3>
              <p>
                Nous utilisons Google Analytics pour comprendre comment les visiteurs interagissent avec notre site web. Ce service collecte des informations anonymes telles que votre adresse IP (anonymisée), le type de navigateur et les pages visitées. Ces données nous aident à améliorer l'expérience utilisateur et la clarté de notre contenu.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p>
              Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à analyser le trafic du site et à optimiser votre expérience. Nous utilisons des cookies de performance fournis par Google Analytics. Vous pouvez choisir d'accepter ou de refuser les cookies via la bannière de consentement sur notre site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Utilisation de vos informations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pour fournir et maintenir notre Service.</li>
              <li>Pour vous informer des changements apportés à notre Service.</li>
              <li>Pour assurer le support client.</li>
              <li>Pour surveiller l'utilisation de notre Service et améliorer ses performances.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sécurité des données</h2>
            <p>
              La sécurité de vos données est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100 %. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos informations, nous ne pouvons garantir leur sécurité absolue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Vie privée des enfants</h2>
            <p>
              Notre Service ne s'adresse pas aux personnes de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles identifiables auprès de personnes de moins de 13 ans.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contactez-nous</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
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
