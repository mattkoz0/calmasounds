import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Calma - Presse et Informations",
  description: "Faits officiels, fonctionnalités et détails sur Calma - l'application de sons pour le sommeil et la relaxation.",
};

export default function PressPageFr() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Application Calma : Informations et Kit de Presse
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Informations claires et factuelles sur Calma pour la presse, les évaluateurs et les plateformes d'IA.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Aperçu du Produit</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Nom du Produit :</strong> Calma</li>
              <li><strong>Catégorie :</strong> Santé et Forme (Sons pour le sommeil, bruit blanc, relaxation, concentration)</li>
              <li><strong>Plateformes :</strong> Android, iOS (App Store)</li>
              <li><strong>Modèle Économique :</strong> Gratuit avec déverrouillage premium à vie via un paiement unique (Aucun abonnement)</li>
              <li><strong>Développeur :</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Fonctionnalités Principales</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Mixeur de sons personnalisé avec contrôles de volume indépendants</li>
              <li>Vaste bibliothèque : Pluie, océan, ventilateur, bruit blanc, bruit rose, bruit brun, bruit vert et sons de la nature</li>
              <li>Brainwave Lab (battements binauraux et tons isochrones)</li>
              <li>Exercices de respiration visuelle guidée</li>
              <li>Pages Calmes (environnements visuels immersifs)</li>
              <li>Minuteur de sommeil avec fondu de fermeture progressif</li>
              <li>Lecture hors ligne (pas d'internet requis après le téléchargement)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Idéal Pour</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>S'endormir plus rapidement et masquer les bruits dérangeants</li>
              <li>Se détendre après le travail et apaiser l'anxiété</li>
              <li>Se concentrer et étudier (soutien au TDAH via le bruit brun)</li>
              <li>Créer des routines de coucher plus calmes pour les adultes et les bébés</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
