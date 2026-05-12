import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Termos de Serviço | Calma",
  description:
    "Leia os termos de serviço para o uso do Calma, incluindo nosso compromisso com a sua privacidade e as regras de uso do aplicativo.",
    alternates: {
    canonical: "https://www.calmasounds.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Termos de Serviço </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Última atualização: 13 de abril de 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site e aplicativo Calma, você
              aceita e concorda em ficar vinculado aos termos e disposições deste
              acordo. Se você não concordar em cumprir com o acima, por favor, não
              use este serviço.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Uso da Licença</h2>
            <p>
              O Calma concede a você uma licença pessoal, não exclusiva, intransferível e
              revogável para usar o aplicativo para seu uso pessoal e não comercial.
              Você não pode descompilar, fazer engenharia reversa ou tentar derivar
              o código-fonte do aplicativo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Conteúdo e Direitos Autorais</h2>
            <p>
              Todas as paisagens sonoras, gráficos e designs de interface são de
              propriedade intelectual do Calma. Você pode criar mixagens pessoais para
              seu próprio uso, mas não pode redistribuir o conteúdo de áudio como
              arquivos independentes ou partes de outros produtos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Isenção de Responsabilidade</h2>
            <p>
              O Calma é fornecido "como está". Embora tenhamos o objetivo de fornecer uma experiência de
              alta qualidade para sono e relaxamento, não garantimos resultados
              de saúde específicos. O Calma não é um dispositivo médico e não deve substituir
              conselhos ou tratamentos médicos profissionais para distúrbios do sono.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitação de Responsabilidade</h2>
            <p>
              Em nenhum caso o Calma será responsável por quaisquer danos decorrentes
              do uso ou incapacidade de usar os serviços, mesmo se tivermos sido
              notificados sobre a possibilidade de tais danos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Seu
              uso contínuo do serviço após quaisquer alterações constitui a sua
              aceitação dos novos Termos de Serviço.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Informações de Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:
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
