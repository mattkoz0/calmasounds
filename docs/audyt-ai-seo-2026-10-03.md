# Audyt SEO w wyszukiwarkach AI — Calma

Data: 3 października 2026. Zakres: 8 języków, kod witryny, HTML lokalnej kompilacji produkcyjnej oraz wybrane publiczne adresy. Audyt obejmuje gotowość do odczytu i cytowania w ChatGPT Search, Google AI Overviews/AI Mode, Bing/Copilot i Perplexity. Nie jest pomiarem rzeczywistej liczby cytowań ani gwarancją rekomendacji przez modele.

## Ocena

Strona ma dobrą bazę: renderowaną przez serwer treść, indeksowalne strony produktu, sitemap, hreflang, FAQ, poradniki i oficjalne linki do sklepów. Największymi problemami były rozbieżne opisy produktu, kilka odrębnych nazw aplikacji w danych strukturalnych oraz dane artykułów dostarczane dopiero po uruchomieniu JavaScript. Te problemy poprawiono lokalnie.

## Ustalenia i poprawki

| Obszar | Ustalenie | Status |
| --- | --- | --- |
| Dostęp robotów | Publiczne robots.txt odpowiada HTTP 200 i zawiera User-Agent: * oraz Allow: /. Publiczna sitemap odpowiada HTTP 200. | Dostęp do odczytu jest dozwolony; polityki nie zmieniano. |
| Odczyt strony publicznej | Żądanie strony angielskiej z nazwą OAI-SearchBot oraz polskiej z nazwą PerplexityBot zwróciło HTTP 200 i H1. | Brak blokady w sprawdzonych żądaniach; nie jest to test z oficjalnych adresów IP robotów. |
| Dane artykułów | Wspólny ArticlePage używał next/script, z domyślnym ładowaniem po rozpoczęciu hydratacji. | JSON-LD artykułu i breadcrumbs trafiają teraz bezpośrednio do HTML. Dodano język artykułu i spójny identyfikator wydawcy. |
| Tożsamość produktu | Podstrony używały nazw takich jak Calma - Sleep Sounds, Calma - White Noise i Calma - Brown Noise. Część miała także drugi, osobny SoftwareApplication. | Jedna nazwa Calma, jeden identyfikator #app i wspólne linki sklepów. Usunięto powielone encje Calmy z grafów stron białego/brązowego szumu i szumów usznych. Inne aplikacje w sekcji More Apps zachowują odrębną tożsamość. |
| Lokalizacja | Wspólny schemat aplikacji miał angielski opis także na stronach innych języków. Domyślna definicja produktu też była angielska. | Wspólne opisy produktu i domyślna definicja są lokalizowane we wszystkich 8 językach. Definicje napisane specjalnie dla konkretnego tematu pozostają tematyczne. |
| Fakty o produkcie | Informacja o wszystkich dźwiękach offline kolidowała z opisem wybranych zapisanych dźwięków. | Właściciel potwierdził dostęp do wszystkich dźwięków offline od razu po instalacji. Ujednolicono opisy funkcji, FAQ stron głównych i schemat aplikacji. |
| Czytelność informacji | Strona główna miała głównie ogólny opis korzyści. | Widoczny blok faktów: 190+ dźwięków, do 3 warstw bezpłatnie/do 6 w PRO, offline po instalacji, Android/iOS, darmowa wersja i opcjonalne jednorazowe PRO. Dane liczbowe pochodzą z istniejącego opisu funkcji; działanie offline potwierdzono w rozmowie. |
| Breadcrumbs | W części stron brązowego szumu i tinnitus nazwa końcowego elementu była skopiowana z białego szumu. | Nazwa odpowiada teraz tytułowi właściwej podstrony. |

Dane dotyczące ceny opisują darmową wersję; tekst wyraźnie wskazuje opcjonalne płatne PRO. Nie dodano wymyślonych ocen użytkowników, recenzentów, kwalifikacji medycznych ani nowych dat publikacji artykułów.

## Co jeszcze zwiększy wiarygodność

1. **Porównania z konkurencją:** na stronach Calma vs Calm i Calma vs BetterSleep dodać źródła z oficjalnych stron porównywanych aplikacji, rzeczywistą datę sprawdzenia i jasną informację, że porównanie publikuje twórca Calmy. Ceny i zakres funkcji wymagają okresowej kontroli. Zwroty „najlepsza alternatywa” zastąpić konkretnym uzasadnieniem dla określonego użytkownika.
2. **Autorstwo poradników:** obecny podpis Calma Editorial Team i autor typu Organization identyfikują markę, ale nie pokazują osoby ani kompetencji autora. Dodać prawdziwą stronę autora, zasady redakcyjne i opis doświadczenia. Weryfikację specjalisty podawać tylko wtedy, gdy rzeczywiście nastąpiła.
3. **Źródła i język obietnic:** angielski poradnik o ADHD już zawiera sekcję badań i ograniczeń, a wspólne komponenty uwzględniają uwagi dla ADHD, tinnitus i snu dzieci. Pozostałe poradniki i tłumaczenia sprawdzić pod kątem podobnego standardu. Zdania o leczeniu lub „najskuteczniejszych” dźwiękach wymagają odpowiedniego dowodu; samo FAQ lub schema nie daje takiego dowodu.
4. **Rozpoznawalność poza własną stroną:** dbać o zgodność nazwy, modelu płatności i funkcji w Google Play, App Store oraz profilach marki. Pozyskiwać prawdziwe recenzje i niezależne wzmianki. Nie zakładać, że same profile społecznościowe zapewniają autorytet.
5. **Daty i aktualność:** obecne daty artykułów pochodzą z istniejącego rejestru redakcyjnego. Ich historycznej prawdziwości nie zweryfikowano. dateModified i lastmod aktualizować przy rzeczywistej zmianie treści, z zachowaniem zgodności strony i sitemap.

## Robots, trening modeli i llms.txt

OAI-SearchBot dotyczy wyszukiwania ChatGPT, a GPTBot zbierania materiałów mogących służyć treningowi. Ustawienia są niezależne. Istniejący wildcard dopuszcza oba; w ramach tego audytu nie zmieniono polityki treningowej. Brak blokady robots.txt nie dowodzi, że CDN przepuszcza wszystkie oficjalne IP. [Oficjalna dokumentacja OpenAI](https://developers.openai.com/api/docs/bots).

Google wskazuje, że do obecności w AI Overviews/AI Mode nie potrzeba specjalnego pliku AI ani dodatkowego schematu. Dlatego brak llms.txt nie jest błędem i nie dodano go jako obietnicy wyższych pozycji. Najważniejsze są indeksowanie, dostępny tekst, przydatna treść i zgodność danych strukturalnych z tym, co widzi czytelnik. [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

Perplexity zaleca dostęp dla PerplexityBot i swoich oficjalnych IP. Nie zmieniono konfiguracji WAF ani CDN, do których audyt nie miał dostępu administracyjnego. [Dokumentacja robotów Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).

## Jak mierzyć efekty po publikacji

- Zweryfikować domenę i sitemap w Google Search Console oraz Bing Webmaster Tools. W Bing sprawdzać dostępny raport AI Performance: cytowane adresy, cytowania i powiązane zapytania. [Bing: AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/).
- W analityce obserwować wizyty odsyłane z ChatGPT, Perplexity i innych asystentów oraz pobrania aplikacji. Część wizyt może nie mieć jednoznacznego referrera, więc nie jest to pełny pomiar widoczności.
- Raz w tygodniu powtarzać stały zestaw zapytań po polsku i angielsku, np. „aplikacja z dźwiękami do snu bez subskrypcji”, „offline sleep sounds app”, „Calma free vs PRO”, „czy wszystkie dźwięki Calma działają offline?”. Zapisać platformę, datę, język, odpowiedź, cytowane URL i zgodność faktów. Uwzględniać zmienność odpowiedzi.
- Porównać dane po 4–8 tygodniach od publikacji. Nie traktować pojedynczej rekomendacji ani pojedynczego jej braku jako trwałej pozycji.

## Automatyczna kontrola

Polecenie: `npm run seo:audit:ai` po `npm run build`. Audyt pobiera początkowy HTML bez uruchamiania JavaScript i sprawdza podstawowe SEO, poprawność JSON-LD, tożsamość Calmy, lokalizację i daty artykułów, zgodność widocznych faktów z opisem strukturalnym oraz żądania z nazwami 5 robotów na stronach głównych 8 języków. Wykrycie braku JSON-LD na zwykłej stronie jest informacją, nie błędem: schema nie jest obowiązkowa dla każdej strony.

Test nie potwierdza indeksowania, prawdziwych cytowań, wszystkich zasad dostępu WAF, merytorycznej prawdziwości całego bloga ani walidacji rich results przez Google. Zmiany są lokalne i nie zostały opublikowane.

Dokumentacja implementacji JSON-LD: [Next.js](https://nextjs.org/docs/app/guides/json-ld). Dalsze wskazówki dotyczące dowodów, przejrzystości treści i cytowań: [Bing AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).

## Wyniki kontroli

- 256 adresów sitemap: 0 problemów w sprawdzanym zakresie.
- 804 bloki JSON-LD sprawdzone w HTML bez JavaScript.
- 120 wersji artykułów: schemat artykułu dostępny w HTML, język, wydawca, canonical i daty obecne.
- 80 stron z encją aplikacji: jedna encja Calmy na stronę, wspólna tożsamość, obie platformy i linki sklepów.
- 40 lokalnych żądań z nazwami robotów: poprawny status, H1 i brak blokad noindex/nosnippet.
- 8 stron press bez JSON-LD: informacja, nie przeszkoda w indeksowaniu czy cytowaniu.
- Kompilacja produkcyjna i ESLint: poprawne.
- Publiczne robots.txt, sitemap oraz dwa sprawdzone żądania stron głównych: HTTP 200.
