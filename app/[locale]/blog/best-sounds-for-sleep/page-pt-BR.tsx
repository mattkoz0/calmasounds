import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Os melhores sons para dormir (2026): Qual som faz você dormir? | Calma",
  description:
    "Quais são os melhores sons para dormir? Do ruído branco à chuva profunda e ao ruído marrom para o TDAH: explore sons apoiados pela ciência.",
  keywords: [
    "melhores sons para dormir",
    "qual som faz você dormir",
    "sons para dormir",
    "barulhos para dormir",
    "som para dormir",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-sleep",
  },
  openGraph: {
    title: "Os melhores sons para dormir (2026)",
    description:
      "Quais são os melhores sons para dormir? Explore áudios apoiados pela ciência.",
    url: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-sleep",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual som faz você dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O melhor som para fazer você dormir é um som contínuo e não ameaçador, como o ruído rosa (chuva) ou o ruído marrom. Esses sons retardam as ondas cerebrais e mascaram ruídos repentinos."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são os bons sons para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os bons sons incluem chuva constante, tempestades distantes, ondas do mar, ruído branco e ruído marrom. A chave é a consistência que ajuda a relaxar o sistema nervoso."
      }
    },
    {
      "@type": "Question",
      "name": "Quais barulhos ajudam você a dormir melhor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Se você mora em um ambiente barulhento, o ruído branco é melhor para bloquear agressivamente o tráfego. Se você tem pensamentos acelerados, ruídos mais profundos, como o ruído marrom, são melhores."
      }
    },
    {
      "@type": "Question",
      "name": "Faz mal dormir com sons a noite toda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, dormir com sons de fundo constantes em volume baixo é perfeitamente seguro e recomendado para insônia. Você também pode usar um temporizador de desligamento."
      }
    }
  ]
};

export default function BestSoundsForSleepPagePTBR() {
  return (
    <ArticlePage
      slug="best-sounds-for-sleep"
      jsonLd={articleJsonLd}
      title="Os melhores sons para dormir (2026): Qual som faz você dormir?"
      intro="Se você tem dificuldade para adormecer, não está sozinho. Milhões de pessoas procuram todas as noites a resposta para uma pergunta simples: Qual som faz você dormir? O segredo para uma boa noite de descanso é criar um 'cobertor acústico' consistente. Vamos explorar os melhores sons para dormir, apoiados pela ciência."
      topLinkHref="/pt-BR/sleep-sounds-app"
      topLinkLabel="Explorar app de sons para dormir"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar Calma Grátis"
      secondaryCtaHref="/pt-BR/white-noise-app"
      secondaryCtaLabel="Explorar app de ruído branco"
      tableOfContents={[
        { id: "what-makes-you-sleep", title: "Qual som faz você dormir?" },
        { id: "best-sounds", title: "Os 3 melhores sons para dormir" },
        { id: "how-to-mix", title: "Como misturar sons" },
        { id: "faq", title: "Perguntas Frequentes" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/rain-sounds-vs-white-noise",
          title: "Chuva vs Ruído Branco",
          description: "Qual deles é cientificamente comprovado para ajudar você a dormir melhor?",
        },
      ]}
    >
      <ArticleSection id="what-makes-you-sleep" title="Qual som faz você dormir? (A ciência)">
        <p className="mt-4 leading-8 text-white/70">
          Seu cérebro nunca desliga a audição. O melhor som para dormir é aquele que usa o <strong>mascaramento de som</strong>, reduzindo o contraste entre o silêncio total e um ruído repentino. Bons sons são sempre constantes.
        </p>
      </ArticleSection>

      <ArticleSection id="best-sounds" title="Os 3 melhores sons para dormir">
        <div className="mt-8 space-y-12">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Chuva Profunda (Ruído Rosa)</h3>
            <p className="mb-4 leading-8 text-white/70">
              A chuva é cientificamente considerada \"ruído rosa\". Tem um som mais profundo e rico que o ruído branco e é incrivelmente eficaz na redução das ondas cerebrais.
            </p>
            <AudioPlayer 
              src="/rain.m4a" 
              title="Chuva Profunda" 
              description="Um som aconchegante que acalma naturalmente o sistema nervoso."
              colorClass="bg-blue-500/20 text-blue-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Verdadeiro Ruído Branco</h3>
            <p className="mb-4 leading-8 text-white/70">
              Se você precisa bloquear agressivamente ruídos altos e imprevisíveis (como ronco), este é o rei indiscutível.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Ruído Branco" 
              description="A parede acústica definitiva."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Ruído Marrom</h3>
            <p className="mb-4 leading-8 text-white/70">
              O ruído marrom remove o chiado agudo do ruído branco, concentrando-se em um estrondo profundo (semelhante a uma cabine de avião). Altamente recomendado para mentes hiperativas.
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Ruído Marrom" 
              description="Perfeito para relaxar pensamentos acelerados."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>

        </div>
      </ArticleSection>

      <ArticleSection id="how-to-mix" title="Como misturar sons para descansar melhor">
        <p className="mt-4 leading-8 text-white/70">
          Usando um aplicativo gratuito como o <strong>Calma</strong>, você pode criar sua própria paisagem sonora. Comece com uma base de <strong>ruído marrom</strong>, adicione uma espessa camada de <strong>chuva</strong> e um pouco de <strong>trovão distante</strong>.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
            aria-label="Baixar App Calma Grátis"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponível no Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qual som faz você dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Um som contínuo e não ameaçador, como o ruído rosa (chuva) ou o ruído marrom, retarda as ondas cerebrais e mascara os ruídos repentinos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Quais são os bons sons para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Chuva constante, ondas do mar, ruído branco e ruído marrom. A chave é a consistência que ajuda a relaxar o sistema nervoso.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Quais barulhos ajudam você a dormir melhor?</h3>
            <p className="mt-2 leading-7 text-white/70">O ruído branco é ideal para bloquear agressivamente o tráfego. Se você tem ansiedade, ruídos mais profundos, como a chuva, são melhores.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Faz mal dormir com sons a noite toda?</h3>
            <p className="mt-2 leading-7 text-white/70">Não, dormir com um volume baixo é perfeitamente seguro e muito recomendado. Você também pode usar um temporizador.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
