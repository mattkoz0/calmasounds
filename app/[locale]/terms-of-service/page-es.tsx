import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Términos de Servicio | Calma",
  description:
    "Lee los términos de servicio para el uso de Calma, incluyendo nuestro compromiso con tu privacidad y las reglas de uso de la aplicación.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Términos de Servicio </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Última actualización: 13 de abril de 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web y la aplicación Calma, usted 
              acepta y acepta estar sujeto a los términos y disposiciones de este
              acuerdo. Si no está de acuerdo en cumplir con lo anterior, no 
              use este servicio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Licencia de Uso</h2>
            <p>
              Calma le otorga una licencia personal, no exclusiva, intransferible 
              y revocable para usar la aplicación para su uso personal y no comercial.
              No puede descompilar, aplicar ingeniería inversa ni intentar derivar 
              el código fuente de la aplicación.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Contenido y Derechos de Autor</h2>
            <p>
              Todos los paisajes sonoros, gráficos y diseños de interfaz son 
              propiedad intelectual de Calma. Puede crear mezclas personales para 
              su uso, pero no puede redistribuir el contenido de audio como archivos
              independientes o partes de otros productos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Descargo de Responsabilidad</h2>
            <p>
              Calma se proporciona "tal cual". Si bien nuestro objetivo es brindar una
              experiencia de alta calidad para el sueño y la relajación, no garantizamos
              resultados de salud específicos. Calma no es un dispositivo médico y no
              debe reemplazar el consejo o tratamiento médico profesional para los
              trastornos del sueño.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso Calma será responsable por los daños que surjan 
              del uso o la imposibilidad de usar los servicios, incluso si nos 
              han notificado la posibilidad de dicho daño.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Cambios en los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. El uso continuado del servicio después de cualquier cambio
              constituye su aceptación de los nuevos Términos de Servicio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Información de Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos, comuníquese con nosotros en:
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
