import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calma App - Prensa y Datos",
  description: "Datos oficiales, características y detalles sobre Calma - la aplicación de sonidos para dormir y relajación.",
};

export default function PressPageEs() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calma App: Datos y Kit de Prensa
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Información clara y fáctica sobre Calma para prensa, revisores y plataformas de IA.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Resumen del Producto</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Nombre del Producto:</strong> Calma</li>
              <li><strong>Categoría:</strong> Salud y Forma Física (Sonidos para dormir, ruido blanco, relajación, concentración)</li>
              <li><strong>Plataformas:</strong> Android, iOS (App Store)</li>
              <li><strong>Modelo de Negocio:</strong> Gratis con desbloqueo premium de por vida mediante un pago único (Sin suscripciones)</li>
              <li><strong>Desarrollador:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Características Principales</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Mezclador de sonidos personalizado con controles de volumen independientes</li>
              <li>Amplia biblioteca: Lluvia, océano, ventilador, ruido blanco, ruido rosa, ruido marrón, ruido verde y sonidos de la naturaleza</li>
              <li>Brainwave Lab (ritmos binaurales y tonos isocrónicos)</li>
              <li>Ejercicios de respiración visual guiada</li>
              <li>Páginas Tranquilas (entornos visuales inmersivos)</li>
              <li>Temporizador de sueño con desvanecimiento suave</li>
              <li>Reproducción sin conexión (no se requiere internet después de la descarga)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Ideal Para</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Dormir más rápido y enmascarar ruidos molestos</li>
              <li>Relajarse después del trabajo y aliviar la ansiedad</li>
              <li>Concentración y estudio (apoyo para TDAH a través del ruido marrón)</li>
              <li>Crear rutinas de sueño más tranquilas para adultos y bebés</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
