import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin świadczenia usług | Calma",
  description:
    "Zapoznaj się z regulaminem korzystania z aplikacji Calma, naszymi zobowiązaniami dotyczącymi prywatności oraz zasadami użytkowania.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Regulamin świadczenia usług </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Ostatnia aktualizacja: 13 kwietnia 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Akceptacja warunków</h2>
            <p>
              Uzyskując dostęp do strony internetowej oraz aplikacji Calma i korzystając z nich, 
              akceptujesz i zgadzasz się na przestrzeganie warunków i postanowień niniejszej 
              umowy. Jeśli nie zgadzasz się na powyższe warunki, prosimy o zaprzestanie 
              korzystania z serwisu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Licencja na użytkowanie</h2>
            <p>
              Calma udziela użytkownikowi osobistej, niewyłącznej, niezbywalnej i odwołalnej 
              licencji na korzystanie z aplikacji do użytku osobistego, niekomercyjnego. 
              Zabrania się dekompilacji, inżynierii wstecznej lub prób wydobycia kodu 
              źródłowego aplikacji.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Treści i prawa autorskie</h2>
            <p>
              Wszystkie pejzaże dźwiękowe, grafiki oraz projekty interfejsu są własnością 
              intelektualną Calma. Możesz tworzyć spersonalizowane miksy na własny użytek, 
              ale nie możesz redystrybuować treści audio jako samodzielnych plików ani 
              części innych produktów.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Wyłączenie odpowiedzialności</h2>
            <p>
              Usługa Calma jest świadczona w stanie, w jakim się znajduje („as is”). 
              Chociaż dążymy do zapewnienia wysokiej jakości doznań wspierających sen 
              i relaks, nie gwarantujemy konkretnych wyników zdrowotnych. Calma nie jest 
              urządzeniem medycznym i nie powinna zastępować profesjonalnej porady lekarskiej 
              ani leczenia zaburzeń snu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Ograniczenie odpowiedzialności</h2>
            <p>
              W żadnym wypadku Calma nie ponosi odpowiedzialności za jakiekolwiek szkody 
              wynikające z korzystania lub braku możliwości korzystania z usług, 
              nawet jeśli zostaliśmy powiadomieni o możliwości wystąpienia takich szkód.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Zmiany w regulaminie</h2>
            <p>
              Zastrzegamy sobie prawo do modyfikacji niniejszego regulaminu w dowolnym momencie. 
              Dalsze korzystanie z serwisu po wprowadzeniu zmian oznacza akceptację nowego 
              Regulaminu świadczenia usług.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Informacje kontaktowe</h2>
            <p>
              Jeśli masz jakiekolwiek pytania dotyczące niniejszego Regulaminu, skontaktuj się z nami:
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
