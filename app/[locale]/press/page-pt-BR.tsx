import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Calma - Imprensa e Fatos",
  description: "Fatos oficiais, recursos e detalhes sobre o Calma - o aplicativo de sons para dormir e relaxamento.",
};

export default function PressPagePtBr() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          App Calma: Fatos e Kit de Imprensa
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Informações claras e factuais sobre o Calma para imprensa, revisores e plataformas de IA.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Visão Geral do Produto</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Nome do Produto:</strong> Calma</li>
              <li><strong>Categoria:</strong> Saúde e Fitness (Sons para dormir, ruído branco, relaxamento, foco)</li>
              <li><strong>Plataformas:</strong> Android, iOS (App Store)</li>
              <li><strong>Modelo de Negócios:</strong> Gratuito com desbloqueio premium vitalício através de pagamento único (Sem assinaturas)</li>
              <li><strong>Desenvolvedor:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Recursos Principais</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Misturador de sons personalizado com controles de volume independentes</li>
              <li>Ampla biblioteca: Chuva, oceano, ventilador, ruído branco, ruído rosa, ruído marrom, ruído verde e sons da natureza</li>
              <li>Brainwave Lab (batidas binaurais e tons isocrônicos)</li>
              <li>Exercícios de respiração visual guiada</li>
              <li>Páginas Silenciosas (ambientes visuais imersivos)</li>
              <li>Temporizador de sono com desvanecimento suave</li>
              <li>Reprodução offline (não requer internet após o download)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Melhor Para</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Dormir mais rápido e mascarar ruídos perturbadores</li>
              <li>Relaxar após o trabalho e aliviar a ansiedade</li>
              <li>Concentração e estudo (suporte para TDAH através de ruído marrom)</li>
              <li>Criar rotinas de sono mais calmas para adultos e bebês</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
