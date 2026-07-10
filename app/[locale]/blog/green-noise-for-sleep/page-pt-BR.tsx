import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Ruído Verde para Dormir: A Maneira Natural de Descansar | Blog do Calma",
  description:
    "Descubra o que é o ruído verde, como ele se compara ao ruído branco e marrom e por que suas frequências semelhantes à natureza podem ser a paisagem sonora perfeita para dormir.",
  keywords: [
    "ruído verde",
    "ruído verde para dormir",
    "o que é ruído verde",
    "ruído verde vs ruído branco",
    "frequências naturais",
    "sons calmantes",
    "blog do calma",
    "app para dormir melhor",
    "promover sono profundo",
    "ajuda para adormecer",
    "sons calmantes noite",
    "melhorar qualidade do sono",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/green-noise-for-sleep",
  },
  openGraph: {
    title: "Ruído Verde para Dormir: A Maneira Natural de Descansar | Blog do Calma",
    description:
      "Descubra o que é o ruído verde, como ele se compara ao ruído branco e marrom e por que suas frequências semelhantes à natureza podem ser a paisagem sonora perfeita para dormir.",
    url: "https://www.calmasounds.com/pt-BR/blog/green-noise-for-sleep",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruído Verde para Dormir: A Maneira Natural de Descansar | Blog do Calma",
    description:
      "Descubra o que é o ruído verde, como ele se compara ao ruído branco e marrom e por que suas frequências semelhantes à natureza podem ser a paisagem sonora perfeita para dormir.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruído Verde para Dormir: A Maneira Natural de Descansar",
  description:
    "Descubra o que é o ruído verde, como ele se compara ao ruído branco e marrom e por que suas frequências semelhantes à natureza podem ser a paisagem sonora perfeita para dormir.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/pt-BR/blog/green-noise-for-sleep",
};

export default function GreenNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="green-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/sleep-sounds-app"
      topLinkLabel="Explore os sons para dormir"
      title="Ruído Verde para Dormir: A Maneira Natural de Descansar"
      intro="Se você já passou algum tempo explorando sons para dormir melhor, provavelmente já ouviu falar do ruído branco. Mas há uma cor de ruído menos conhecida que vem ganhando popularidade discretamente: o ruído verde. Posicionado bem no meio do espectro de áudio, o ruído verde imita os sons ambientais da natureza, tornando-se uma das opções mais calmantes para relaxamento e descanso profundo."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar no Google Play"
      secondaryCtaHref="/pt-BR/relaxing-sounds"
      secondaryCtaLabel="Explore sons relaxantes"
      ctaTitle="Descubra o poder das paisagens sonoras naturais"
      ctaText="Ouça o ruído verde e ambientes naturais escolhidos a dedo para criar a sua atmosfera relaxante perfeita com o aplicativo Calma."
      relatedArticles={[
        {
          href: "/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Ruído Marrom vs Branco vs Rosa",
          description: "Explore as diferenças entre as cores do ruído para sono e foco.",
        },
        {
          href: "/pt-BR/blog/benefits-of-nature-sounds-for-relaxation",
          title: "Sons da Natureza para Relaxamento Profundo",
          description: "Como a chuva e as ondas do oceano atuam como um ruído branco natural.",
        },
        {
          href: "/pt-BR/blog/best-sounds-for-sleep",
          title: "Melhores Sons para Dormir",
          description: "Um guia prático sobre chuva, ruído branco e paisagens sonoras de sono mais suaves.",
        },
      ]}
    >
      <ArticleSection title="O que exatamente é o ruído verde?">
        <p>
          Assim como as cores da luz, o ruído vem em "cores" com base na forma como a energia é distribuída em diferentes frequências. Enquanto o ruído branco contém todas as frequências em igual intensidade (soando como estática de televisão ou um ventilador sibilando), o ruído verde concentra-se especificamente no centro do espectro de frequências.
        </p>
        <p>
          Ele corta os assobios agudos estridentes e os estrondos baixos e agressivos. O resultado é um perfil de som que se assemelha muito ao zumbido ambiental do mundo natural — pense em uma cachoeira a uma curta distância, uma brisa constante do oceano ou folhas farfalhando consistentemente ao vento.
        </p>
      </ArticleSection>

      <ArticleSection title="Por que o ruído verde ajuda a dormir">
        <p>
          O ruído verde é particularmente eficaz para o sono por duas razões principais: conforto evolutivo e mascaramento acústico.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
          <li>
            <strong>Conforto Evolutivo:</strong> O cérebro humano evoluiu em ambientes naturais, não em quartos modernos e silenciosos. As frequências encontradas no ruído verde sinalizam "segurança" para o sistema nervoso, ajudando a reduzir uma mente hiperativa e baixar naturalmente os níveis de estresse antes de dormir.
          </li>
          <li>
            <strong>Mascaramento Acústico:</strong> Assim como outras cores de ruído, o ruído verde eleva o nível do som ambiente do seu quarto. Este cobertor contínuo de som mascara eficazmente sons estruturais da casa, cães latindo ou trânsito lá fora, que de outra forma poderiam acordá-lo de sobressalto.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Como usar o ruído verde na sua rotina">
        <p>
          Para integrar o ruído verde na sua rotina noturna, tente ativá-lo 20 a 30 minutos antes de planejar fechar os olhos. Comece com um volume moderado — alto o suficiente para mascarar o ambiente, mas não tão alto a ponto de exigir sua atenção explícita.
        </p>
        <p>
          Com um aplicativo como o Calma, você pode experimentar misturando o ruído verde com elementos como chuva constante ou trovões distantes e fracos para fazer a curadoria do seu próprio santuário natural perfeito. Lembre-se, o objetivo é o envolvimento sem esforço; você quer um som no qual seu cérebro possa mergulhar facilmente, sem analisar excessivamente o áudio.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
