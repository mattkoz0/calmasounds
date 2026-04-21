import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Política de Privacidad | Calma",
  description:
    "Lee nuestra política de privacidad para entender cómo Calma recopila, utiliza y protege tus datos personales.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Política de Privacidad </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Última actualización: 13 de abril de 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Introducción</h2>
            <p>
              En Calma, nos comprometemos a proteger su privacidad. Esta Política de
              Privacidad explica cómo recopilamos, usamos y protegemos su información
              cuando visita nuestro sitio web (calmasounds.com) y utiliza la
              aplicación Calma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Información que recopilamos</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Datos Personales</h3>
              <p>
                No recopilamos ningún dato personal de forma predeterminada. Si se pone
                en contacto con nuestros equipos de soporte por correo electrónico, utilizaremos
                su dirección de correo electrónico únicamente para responder a su consulta.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Datos de Uso y Análisis</h3>
              <p>
                Utilizamos Google Analytics para comprender cómo interactúan los visitantes con
                nuestro sitio web. Este servicio recopila información anónima como su
                dirección IP (anonimizada), tipo de navegador y páginas visitadas.
                Estos datos nos ayudan a mejorar la experiencia del usuario y la claridad
                de nuestro contenido.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo y
              que nos ayudan a analizar el tráfico del sitio y optimizar su experiencia. Utilizamos
              cookies de rendimiento y analíticas proporcionadas por Google Analytics.
              Puede elegir aceptar o rechazar las cookies a través del banner de 
              consentimiento en nuestro sitio web.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cómo utilizamos su información</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Para proporcionar y mantener nuestro Servicio.</li>
              <li>Para notificarle sobre cambios en nuestro Servicio.</li>
              <li>Para brindar atención y soporte al cliente.</li>
              <li>Para monitorear el uso de nuestro Servicio y mejorar su rendimiento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Seguridad de Datos</h2>
            <p>
              La seguridad de sus datos es importante para nosotros, pero recuerde que 
              ningún método de transmisión a través de Internet o método de almacenamiento 
              electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente 
              aceptables para proteger su información, no podemos garantizar su absoluta 
              seguridad en todo momento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Privacidad de Menores</h2>
            <p>
              Nuestro Servicio no está dirigido a nadie menor de 13 años. No recopilamos 
              a sabiendas información de identificación personal de nadie menor de 13 años.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contáctenos</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad, comuníquese con
              nosotros en:
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
