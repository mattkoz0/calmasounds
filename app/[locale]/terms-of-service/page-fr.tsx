import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Calma",
  description:
    "Lisez les conditions d'utilisation de Calma, incluant notre engagement envers votre vie privée et les règles d'utilisation de l'application.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.calmasounds.com/fr/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Conditions d'utilisation </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Dernière mise à jour : 27 avril 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant le site web et l'application Calma, vous acceptez d'être lié par les termes et dispositions de cet accord. Si vous n'acceptez pas de respecter ce qui précède, veuillez ne pas utiliser ce service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Utilisation de la licence</h2>
            <p>
              Calma vous accorde une licence personnelle, non exclusive, non transférable et révocable pour utiliser l'application à des fins personnelles et non commerciales. Vous ne pouvez pas décompiler, faire de l'ingénierie inverse ou tenter de dériver le code source de l'application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Contenu et droit d'auteur</h2>
            <p>
              Tous les paysages sonores, graphiques et designs d'interface sont la propriété intellectuelle de Calma. Vous pouvez créer des mixages personnels pour votre propre usage, mais vous ne pouvez pas redistribuer le contenu audio en tant que fichiers autonomes ou parties d'autres produits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Avis de non-responsabilité</h2>
            <p>
              Calma est fournie « telle quelle ». Bien que nous visions à offrir une expérience de haute qualité pour le sommeil et la relaxation, nous ne garantissons pas de résultats de santé spécifiques. Calma n'est pas un dispositif médical et ne doit pas remplacer un avis médical professionnel ou un traitement pour les troubles du sommeil.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitation de responsabilité</h2>
            <p>
              En aucun cas Calma ne pourra être tenu responsable des dommages résultant de l'utilisation ou de l'incapacité d'utiliser les services, même si nous avons été informés de la possibilité de tels dommages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Modifications des conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Votre utilisation continue du service après toute modification constitue votre acceptation des nouvelles conditions d'utilisation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Informations de contact</h2>
            <p>
              Si vous avez des questions sur ces conditions, veuillez nous contacter à :
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
