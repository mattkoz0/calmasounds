import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidade | Calma",
  description:
    "Leia nossa política de privacidade para entender como o Calma coleta, usa e protege seus dados.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Política de Privacidade </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Última atualização: 13 de abril de 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introdução</h2>
            <p>
              No Calma, estamos comprometidos em proteger sua privacidade. Esta Política
              de Privacidade explica como coletamos, usamos e protegemos suas
              informações quando você visita nosso site (calmasounds.com) e usa
              o aplicativo Calma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Informações que Coletamos</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Dados Pessoais</h3>
              <p>
                Não coletamos nenhum dado pessoal por padrão. Se você entrar em contato com
                nossas equipes de suporte por e-mail, usaremos seu endereço de e-mail apenas para
                responder à sua consulta.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Dados de Uso e Análise</h3>
              <p>
                Usamos o Google Analytics para entender como os visitantes interagem com
                nosso site. Este serviço coleta informações anônimas, como
                seu endereço IP (anonimizado), tipo de navegador e páginas visitadas.
                Esses dados nos ajudam a melhorar a experiência do usuário e a clareza
                do nosso conteúdo.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam
              a analisar o tráfego do site e otimizar sua experiência. Usamos
              cookies analíticos e de desempenho fornecidos pelo Google Analytics.
              Você pode optar por aceitar ou recusar cookies por meio do banner de consentimento
              em nosso site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Como Usamos Suas Informações</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Para fornecer e manter nosso Serviço.</li>
              <li>Para notificá-lo sobre alterações em nosso Serviço.</li>
              <li>Para fornecer atendimento e suporte ao cliente.</li>
              <li>Para monitorar o uso do nosso Serviço e melhorar o seu desempenho.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Segurança de Dados</h2>
            <p>
              A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum
              método de transmissão pela Internet ou método de armazenamento eletrônico
              é 100% seguro. Embora nos esforcemos para usar meios comercialmente
              aceitáveis para proteger suas informações, não podemos garantir
              sua segurança absoluta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Privacidade Infantil</h2>
            <p>
              Nosso Serviço não se destina a menores de 13 anos. Não
              coletamos intencionalmente informações de identificação pessoal de ninguém
              com menos de 13 anos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contate-nos</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em
              contato conosco:
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
