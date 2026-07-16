import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
export const metadata: Metadata = {
    title: "Ru\u00EDdo colorido e TDAH: o que a pesquisa realmente mostra | Calma",
    description: "Compare o ru\u00EDdo branco, rosa e marrom para TDAH, incluindo o que uma meta-an\u00E1lise de 2024 descobriu e onde ainda faltam evid\u00EAncias.",
    keywords: [
        "qual ru\u00EDdo de cor \u00E9 melhor para TDAH",
        "ru\u00EDdo marrom vs ru\u00EDdo branco TDAH",
        "ru\u00EDdo marrom, TDAH",
        "ru\u00EDdo branco para TDAH",
        "ru\u00EDdo rosa, TDAH",
        "melhor barulho para estudar TDAH",
        "calma blog",
    ],
    alternates: {
        canonical: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
    },
    openGraph: {
        title: "Ru\u00EDdo colorido e TDAH: o que a pesquisa realmente mostra | Calma",
        description: "Compare o ru\u00EDdo branco, rosa e marrom para TDAH, incluindo as evid\u00EAncias atuais e seus limites.",
        url: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
        siteName: "Calma",
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ru\u00EDdo colorido e TDAH: o que a pesquisa mostra | Calma",
        description: "Compare cores de ru\u00EDdo para TDAH e saiba por que os testes pessoais s\u00E3o importantes.",
    },
};
const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ru\u00EDdo colorido e TDAH: o que a pesquisa mostra?",
    description: "Compare o ru\u00EDdo branco, rosa e marrom para TDAH, incluindo as evid\u00EAncias atuais e seus limites.",
    author: {
        "@type": "Organization",
        name: "Calma",
    },
    publisher: {
        "@type": "Organization",
        name: "Calma",
    },
    mainEntityOfPage: "https://www.calmasounds.com/blog/best-color-noise-for-adhd",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
};
export default function BestColorNoiseForADHDPage() {
    return (<ArticlePage slug="best-color-noise-for-adhd" jsonLd={articleJsonLd} topLinkHref="/focus-sounds-app" topLinkLabel="Explorar página em foco" title="Ruído colorido e TDAH: o que a pesquisa mostra?" intro="Algumas pessoas com TDAH usam som de fundo constante para tornar as distrações menos perceptíveis, mas não existe uma cor de ruído melhor para todos. Aqui está o que a pesquisa diz sobre o ruído branco e rosa, por que ainda faltam evidências de ruído marrom e como testar o som sem tratá-lo como cuidados médicos." ctaHref="/focus-sounds-app" ctaLabel="Explore o aplicativo Focus Sounds" secondaryCtaHref="/sound-mixer-app" secondaryCtaLabel="Misture seu próprio áudio" tableOfContents={[
            { id: "adhd-and-sound", title: "O que as evid\u00EAncias dizem" },
            { id: "noise-colors", title: "O que as cores realmente significam" },
            { id: "white-noise", title: "Ru\u00EDdo branco" },
            { id: "brown-noise", title: "Ru\u00EDdo marrom" },
            { id: "pink-noise", title: "Ru\u00EDdo rosa" },
            { id: "personal-test", title: "Um teste pr\u00E1tico de compara\u00E7\u00E3o" },
            { id: "summary", title: "O que as descobertas significam \u2013 e n\u00E3o significam" },
            { id: "sources", title: "Evid\u00EAncias e fontes" },
        ]} relatedArticles={[
            {
                href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
                title: "Ru\u00EDdo Marrom vs Branco vs Rosa",
                description: "Aprenda como os perfis sonoros diferem antes de construir seu mix.",
            },
            {
                href: "/blog/best-sounds-for-studying",
                title: "Sons para estudar",
                description: "Compare ru\u00EDdo constante, som da natureza e op\u00E7\u00F5es instrumentais para sess\u00F5es de estudo.",
            },
        ]}>
      <ArticleSection id="adhd-and-sound" title="O que as evidências dizem sobre o ruído e o TDAH?">
        <p>
          Uma revisão sistemática e meta-análise de 2024 abrangendo 13 estudos e 335 participantes encontrou uma pequena melhoria nas tarefas de atenção laboratorial devido ao ruído branco ou rosa entre crianças e adultos jovens com TDAH ou sintomas elevados. A mesma revisão encontrou um pequeno efeito negativo em grupos de comparação sem TDAH.
        </p>
        <p className="mt-4">
          É importante ressaltar que a revisão não encontrou estudos elegíveis sobre ruído marrom. Também apelou a mais investigação sobre os resultados do mundo real e níveis de audição apropriados. Isso faz do ruído uma escolha de ambiente pessoal, e não um tratamento comprovado.
        </p>
        <p className="mt-4">
          Leia o <a className="text-emerald-300 underline underline-offset-4" href="https://pubmed.ncbi.nlm.nih.gov/38428577/" target="_blank" rel="noopener noreferrer">revisão revisada por pares no PubMed</a> para os detalhes e limitações do estudo.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">13</p>
            <p className="mt-1 text-sm text-white/70">estudos elegíveis</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">335</p>
            <p className="mt-1 text-sm text-white/70">participantes na análise de TDAH</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-semibold text-emerald-300">Pequeno</p>
            <p className="mt-1 text-sm text-white/70">benefício médio no desempenho da tarefa</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="noise-colors" title="O que realmente significam o ruído branco, rosa e marrom?">
        <p>
          As cores descrevem como a energia sonora é distribuída entre as frequências – não um humor, um diagnóstico ou uma frequência cerebral especial. O ruído branco tem potência igual por hertz, portanto suas frequências superiores soam proeminentes. O ruído rosa perde energia à medida que a frequência aumenta e muitas vezes se assemelha a uma chuva constante. O ruído marrom diminui ainda mais acentuadamente, produzindo um ruído mais profundo.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/15 text-white">
                <th className="px-4 py-3">Som</th>
                <th className="px-4 py-3">Personagem típico</th>
                <th className="px-4 py-3">Evidências na revisão de 2024</th>
                <th className="px-4 py-3">Razão para testá-lo</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">Branco</td>
                <td className="px-4 py-3">Brilhante, semelhante a estática</td>
                <td className="px-4 py-3">A maioria das evidências elegíveis</td>
                <td className="px-4 py-3">Amplo mascaramento de sons variáveis</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">Rosa</td>
                <td className="px-4 py-3">Mais suave, como chuva</td>
                <td className="px-4 py-3">Incluído, mas em muito menos observações</td>
                <td className="px-4 py-3">Menos chiado de alta frequência</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Marrom</td>
                <td className="px-4 py-3">Profundo, semelhante a uma cachoeira</td>
                <td className="px-4 py-3">Nenhum estudo elegível</td>
                <td className="px-4 py-3">Conforto pessoal, não superioridade comprovada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruído branco: mascaramento amplo, som mais brilhante">
        <p>
          O ruído branco espalha a energia por todo o espectro audível e soa semelhante à estática do rádio. Seu amplo perfil pode tornar os sons ambientais intermitentes menos perceptíveis.
        </p>
        <p className="mt-4">
          Alguns ouvintes acham desconfortável o chiado de alta frequência, enquanto outros o preferem. Comece silenciosamente e pare se isso causar irritação ou dificultar a tarefa.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruído marrom: popular, mas ainda não estudado o suficiente">
        <p>
          O ruído marrom é frequentemente discutido online devido ao seu caráter mais profundo e com graves pesados. Popularidade e relatos pessoais, entretanto, não são iguais a evidências clínicas.
        </p>
        <p className="mt-4">
          O ruído marrom tem significativamente mais energia nas frequências mais baixas (os graves) e muito pouca nas frequências altas. Parece uma cachoeira profunda e estrondosa ou o rugido abafado de uma cabine de avião.
        </p>
        <p className="mt-4">
          <strong>Por que alguém pode preferir o ruído marrom?</strong>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
          <li><strong>Menos energia de alta frequência:</strong> Pode parecer mais suave do que o ruído branco para ouvintes que não gostam de assobios.</li>
          <li><strong>Mascaramento constante:</strong> Um fundo contínuo pode tornar algumas mudanças ambientais menos perceptíveis.</li>
          <li><strong>Conforto pessoal:</strong> Um som mais profundo pode simplesmente ser mais fácil para algumas pessoas manterem em segundo plano.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Ruído Rosa: O Meio-termo">
        <p>
          Se o ruído marrom parecer muito profundo ou abafado, o ruído rosa oferece um perfil de frequência média. Tem menos energia de frequência superior do que o ruído branco, mas mais do que o ruído marrom, e pode se assemelhar a uma tempestade forte e constante.
        </p>
        <p className="mt-4">
          O ruído rosa foi incluído junto com o ruído branco na revisão da pesquisa, mas o benefício médio foi pequeno e não prevê uma resposta individual.
        </p>
      </ArticleSection>

      <ArticleSection id="personal-test" title="Uma maneira prática de testar o ruído durante o trabalho de foco">
        <p>
          Uma preferência pode parecer convincente e ao mesmo tempo ser moldada pela tarefa, hora do dia ou expectativa. Uma pequena comparação repetível é mais útil do que escolher a cor com as reivindicações online mais fortes.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/70">
          <li>Escolha uma tarefa repetível de 20 minutos, como revisão, cartões de memória flash ou um conjunto de problemas práticos.</li>
          <li>Complete-o uma vez em silêncio e uma vez com um som constante em um nível baixo e confortável.</li>
          <li>Mantenha a sala, a dificuldade da tarefa e a hora do dia tão semelhantes quanto possível.</li>
          <li>Registre itens concluídos, erros e uma pontuação simples de distração de 1 a 5.</li>
          <li>Repita vários dias antes de decidir. Pare se o som criar fadiga, irritação ou zumbido.</li>
        </ol>
        <p className="mt-4">
          Este é um experimento de espaço de trabalho, não uma avaliação ou tratamento de TDAH. Um som que ajuda na leitura repetitiva ainda pode interferir no aprendizado do idioma, na conversa ou no raciocínio complexo.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="O que as descobertas significam – e não significam">
        <p>
          Não existe um vencedor baseado em evidências para cada pessoa. O ruído branco e rosa têm evidências limitadas de um pequeno benefício médio no desempenho de tarefas em jovens com TDAH; o ruído marrom ainda não foi testado adequadamente em ensaios elegíveis.
        </p>
        <p className="mt-4">
          Teste um som baixo de cada vez durante uma tarefa repetível, compare-o com o silêncio e mantenha o que parecer útil. Calma pode ajudar nessa experiência, mas não diagnostica nem trata o TDAH.
        </p>
        <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
          <p className="font-semibold text-amber-100">A limitação importante</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Os estudos mediram tarefas laboratoriais curtas, principalmente em crianças e adultos jovens. Eles não mostram que o ruído reduz os sintomas centrais do TDAH, substitui os cuidados estabelecidos ou melhora o desempenho escolar e profissional ao longo de meses.
          </p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Qual ru\u00EDdo de cor \u00E9 melhor para o TDAH?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "N\u00E3o existe uma cor de ru\u00EDdo melhor para o TDAH. Uma meta-an\u00E1lise de 2024 encontrou um pequeno benef\u00EDcio m\u00E9dio do ru\u00EDdo branco ou rosa em tarefas laboratoriais em jovens com TDAH ou sintomas elevados, mas n\u00E3o encontrou estudos eleg\u00EDveis sobre ru\u00EDdo marrom."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O ru\u00EDdo marrom \u00E9 melhor do que o ru\u00EDdo branco para o TDAH?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "N\u00E3o de acordo com as evid\u00EAncias atuais. Algumas pessoas preferem pessoalmente o ru\u00EDdo marrom porque parece mais profundo, mas a revis\u00E3o de 2024 n\u00E3o encontrou estudos eleg\u00EDveis sobre ru\u00EDdo marrom. As respostas individuais variam."
                        }
                    }
                ]
            })
        }}/>
      </ArticleSection>

      <ArticleSection id="sources" title="Evidências e fontes">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/38428577/" target="_blank" rel="noopener noreferrer">
              Revisão sistemática e meta-análise de ruído branco e rosa para desempenho de tarefas em TDAH
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/17683456/" target="_blank" rel="noopener noreferrer">
              Estudo experimental de ruído branco e desempenho cognitivo em crianças com TDAH
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/25393410/" target="_blank" rel="noopener noreferrer">
              Estudo comparando respostas ao ruído branco em todos os níveis de atenção
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>);
}
