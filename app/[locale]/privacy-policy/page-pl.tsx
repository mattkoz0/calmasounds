import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Calma",
  description:
    "Przeczytaj naszą politykę prywatności, aby dowiedzieć się, jak Calma zbiera, wykorzystuje i chroni Twoje dane.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Polityka Prywatności </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Ostatnia aktualizacja: 13 kwietnia 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Wprowadzenie</h2>
            <p>
              W Calma dbamy o ochronę Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, 
              w jaki sposób zbieramy, wykorzystujemy i zabezpieczamy Twoje informacje podczas 
              wizyt na naszej stronie internetowej (calmasounds.com) oraz podczas korzystania 
              z aplikacji Calma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Informacje, które zbieramy</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Dane osobowe</h3>
              <p>
                Domyślnie nie zbieramy żadnych danych osobowych. Jeśli skontaktujesz się z naszym 
                zespołem wsparcia drogą mailową, wykorzystamy Twój adres e-mail wyłącznie w celu 
                odpowiedzi na Twoje zapytanie.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Dane o użytkowaniu i analityka</h3>
              <p>
                Korzystamy z Google Analytics, aby zrozumieć, w jaki sposób odwiedzający 
                wchodzą w interakcję z naszą stroną. Usługa ta gromadzi anonimowe informacje, 
                takie jak zanonimizowany adres IP, typ przeglądarki oraz odwiedzane strony. 
                Dane te pomagają nam ulepszać doświadczenia użytkowników oraz przejrzystość 
                naszych treści.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Pliki Cookies</h2>
            <p>
              Cookies to małe pliki tekstowe przechowywane na Twoim urządzeniu, które pomagają nam 
              analizować ruch na stronie i optymalizować Twoje doświadczenia. Korzystamy z 
              plików cookies wydajnościowych i analitycznych dostarczanych przez Google Analytics. 
              Możesz zaakceptować lub odrzucić pliki cookies za pośrednictwem banera zgody na naszej stronie.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Jak wykorzystujemy Twoje informacje</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aby świadczyć i utrzymywać naszą Usługę.</li>
              <li>Aby powiadamiać Cię o zmianach w naszej Usłudze.</li>
              <li>Aby zapewnić obsługę klienta i wsparcie.</li>
              <li>Aby monitorować korzystanie z naszej Usługi i poprawiać jej wydajność.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Bezpieczeństwo danych</h2>
            <p>
              Bezpieczeństwo Twoich danych jest dla nas ważne, ale pamiętaj, że żadna metoda 
              transmisji przez Internet ani metoda elektronicznego przechowywania nie jest 
              w 100% bezpieczna. Chociaż dążymy do stosowania komercyjnie akceptowalnych 
              środków ochrony Twoich informacji, nie możemy zagwarantować ich całkowitego bezpieczeństwa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Prywatność dzieci</h2>
            <p>
              Nasza usługa nie jest skierowana do osób poniżej 13 roku życia. Nie zbieramy 
              świadomie danych umożliwiających identyfikację osób poniżej 13 lat.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
            <p>
              Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, skontaktuj się z nami:
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
