# Calma — analiza pierwszego eksportu RankyFy

Aktualna zbiorcza analiza po dodaniu czterech plików keyword research: [CALMA_SEO_rekomendacje_2026-10-07.md](CALMA_SEO_rekomendacje_2026-10-07.md). Kolejność nowych stron w tej analizie: rain, następnie pink; green później.

Data: 2026-10-07.
Źródło: `input/rank-tracking-global-calmasounds.com-2026-10-07.csv`.

## Zakres i ograniczenia

- Eksport zawiera 10 fraz: 7 z pozycją i 3 bez pozycji.
- Wszystkie wiersze dotyczą Google, US, języka angielskiego.
- W próbce są 2 frazy w TOP 20 i 0 w TOP 10.
- Średnia pozycji wynosi 31,86, wyłącznie dla 7 wierszy z pozycją.
- Eksport zawiera 10 fraz. Użytkownik wyjaśnił, że pozostałe są nietrackowane. Nie wymagamy teraz kolejnego eksportu ani nie zakładamy problemu ze stronicowaniem. CSV nie pozwala rozstrzygnąć, czy dla pozostałych nie uruchomiono monitoringu, czy narzędzie nie zapisało jeszcze wyniku.
- Brakuje kolumn urządzenia, wolumenu, trudności, wyświetleń, kliknięć i CTR. CSV nie potwierdza konfiguracji Mobile i nie wystarcza do oceny potencjału ruchu lub konwersji.
- Kolumny zmian 1D, 7D i 30D zawierają NA. To pomiar początkowy, a nie dowód wzrostu lub spadku.
- Pusta pozycja oznacza brak pozycji w eksporcie, a nie potwierdzony brak indeksacji strony.

## Wyniki

| Fraza | Pozycja | Ranking URL |
|---|---:|---|
| brown noise app offline | 14 | /brown-noise-app |
| nature sounds app offline | 16 | /nature-sounds-app |
| sleep sounds app no subscription | 33 | / |
| tinnitus masking app | 33 | /tinnitus-sounds-app |
| green noise app offline | 34 | /nature-sounds-app |
| free sleep sounds app no subscription | 45 | / |
| pink noise app offline | 48 | / |
| sleep sounds offline | brak pozycji | brak URL |
| green noise app for sleep | brak pozycji | brak URL |
| brown noise app for focus | brak pozycji | brak URL |

## Pierwsza strona do optymalizacji: /brown-noise-app

To najlepszy kandydat w tej próbce: pozycja 14 i właściwy landing dla frazy o brown noise. Wybór jest wstępny, bo eksport nie zawiera wolumenu ani wyników wszystkich fraz.

Sprawdzono kod angielskiego landingu i publiczną stronę. Obecny title opisuje mixer i 190+ dźwięków. Meta description zawiera offline, ale H1 i pierwszy akapit nie eksponują tej funkcji. Informacja o offline jest niżej, we wspólnym bloku produktu.

Proponowana mała zmiana:

1. Title: `Brown Noise App — Free Offline Mixer | Calma`.
2. H1: `A brown noise app with offline playback and custom mixes`.
3. Pierwszy akapit:

   > Mix brown noise with rain, nature sounds or other background audio for bedtime and focused work. Calma plays offline without Wi-Fi or mobile data. Start with the free three-layer mixer, adjust each sound separately and choose an optional one-time PRO unlock without a recurring subscription.

4. Zastąpić ogólną kartę „Keep it simple and calm” konkretną informacją o offline; przykładowy H2: `Play brown noise offline`.
5. Dodać FAQ „Does Calma play brown noise offline?” z odpowiedzią zgodną z rzeczywistym działaniem aplikacji, równocześnie aktualizując JSON-LD.
6. Sprawdzić kontekstowe linki z poradników o kolorach szumu i pracy przy dźwiękach; dodać odsyłacz do /brown-noise-app tam, gdzie go brakuje i gdzie pomaga czytelnikowi.

To propozycja do wdrożenia. Kod strony nie został zmieniony w ramach tej analizy.

## Drugi priorytet: /nature-sounds-app

Fraza `nature sounds app offline` ma pozycję 16. Landing już zawiera offline w title, wprowadzeniu i osobnej sekcji. Nie ma podstaw, żeby automatycznie dopisywać te same informacje. Kolejny krok: ocenić wyświetlenia, kliknięcia i zapytania tej strony w aktualnych danych GSC oraz linki prowadzące do niej.

## Trzeci priorytet: frazy sleep / no subscription

Dla dwóch fraz związanych z brakiem subskrypcji rankuje strona główna, a plan wskazuje /sleep-sounds-app. Obie strony mają podobne komunikaty w title. To temat do sprawdzenia, ale pojedynczy pomiar nie dowodzi kanibalizacji. Porównać te zapytania dla obu URL-i w GSC przed zmianą tytułu strony głównej, przekierowaniami lub zmianą canonical.

## Kolejny krok w RankyFy

1. Sprawdzić konfigurację urządzenia; CSV potwierdza US/en/Google, ale nie Mobile.
2. Oprzeć pierwszy wybór strony na dostępnych wynikach. Pozostałe frazy włączyć do analizy, gdy będą dostępne wyniki monitoringu; ich obecny status nie blokuje pracy nad /brown-noise-app.
3. Na dostarczonym zrzucie On-Page SEO pokazuje raporty 10 przeanalizowanych stron i nie ma formularza analizy wybranego URL-a. /brown-noise-app nie jest widoczny na pokazanej części listy. Nie kierować użytkownika ponownie do niepotwierdzonego formularza; korzystać z bezpośredniego audytu strony i kodu.
4. Zachować obecny CSV i proponowane zmiany jako punkt odniesienia przed wdrożeniem.
5. Po publikacji porównywać pomiary w tej samej konfiguracji i sprawdzać wyniki GSC. Pierwsza kontrola po tygodniu, kolejna po 2–4 tygodniach; bez przypisywania pojedynczego ruchu pozycji konkretnej zmianie.

## Źródła weryfikacji treści strony i zasad tytułów

- [Brown noise landing](https://www.calmasounds.com/brown-noise-app)
- [Nature sounds landing](https://www.calmasounds.com/nature-sounds-app)
- [Google: title links](https://developers.google.com/search/docs/appearance/title-link) — tytuł powinien trafnie i zwięźle opisywać stronę; Google może wykorzystać również H1, inne treści i linki. Przetworzenie zmian wymaga ponownego crawlowania i może potrwać od kilku dni do kilku tygodni.

## Weryfikacja ostrzeżeń On-Page SEO ze zrzutów

Raport ze zrzutów dotyczy strony głównej, a nie /brown-noise-app. Zgłasza słabe sygnały E-E-A-T, formaty obrazów i potencjalnie za duże obrazy.

- „E-E-A-T 10/100” to wynik RankyFy, nie ocena udostępniana przez Google. W kodzie strony głównej jest Organization z contactPoint, a w stopce link do /support. Ewentualna sekcja o twórcy produktu powinna zawierać prawdziwe dane. Nie przenosić automatycznie zalecenia podpisu autora artykułu na homepage.
- Sprawdzono aktualny HTML https://www.calmasounds.com/: 14 elementów img, wszystkie 14 używają /_next/image i srcset. Żaden z tych 14 elementów nie ma atrybutu sizes.
- Wykonano żądanie z Accept: image/webp do adresu obrazu /screenshots/3_en.png przez optimizer (w=1920, q=75): HTTP 200, Content-Type image/webp, 20 546 bajtów. Oryginał: HTTP 200, image/png, 263 095 bajtów. Pomiar dotyczy jednego obrazu i nie jest pomiarem transferu całej strony ani Core Web Vitals.
- Ostrzeżenie „14 images served as JPEG/PNG” nie jest potwierdzone przez ten test. Rozszerzenie PNG w parametrze url optymalizera nie określa formatu odpowiedzi HTTP.
- Ostrzeżenie „Oversized Images” samo opisuje analizę wzorca URL/rozszerzenia. Nie jest dowodem zmierzonego rozmiaru plików lub problemu LCP.
- Rzeczywisty kandydat do osobnej poprawy: poprawne sizes dla obrazów o szerokości zależnej od viewportu. Wdrożenie wymaga dopasowania wartości do layoutu, a ocena efektu — sprawdzenia wariantów pobieranych w przeglądarce. Nie ma potrzeby masowej konwersji oryginalnych plików tylko dla wyniku audytu.

Źródła: [Google — E-E-A-T i pomocne treści](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Next.js — Image](https://nextjs.org/docs/app/api-reference/components/image), bezpośrednie żądania HTTP do strony głównej i obrazu oraz lokalny kod.

## Dodatkowy eksport keyword research: keywords-sleepsounds-US.csv

Źródło: `input/keywords-sleepsounds-US.csv`. Przeczytano wszystkie 510 wierszy. Nie znaleziono powtórzonych identycznych fraz.

Ten eksport daje dodatkową, konkretną wartość RankyFy: odkrywanie tematów i wariantów zapytań oraz deklarowanych wolumenów. Nie potwierdza jeszcze jakości szacunków ani organicznej trudności fraz.

### Interpretacja kolumn

- Kolumny: Keyword, Volume, Competition, Competition Score, Low Bid, High Bid.
- Brak źródła danych, daty pomiaru wolumenów, okresu uśredniania i waluty stawek. US jest podane w nazwie pliku, nie w osobnej kolumnie. Wartości Volume poniżej są przepisane z eksportu, a nie niezależnie potwierdzone.
- Układ Competition oraz Low/High Bid przypomina metryki Google Ads Keyword Planner. To wniosek ze struktury danych, nie potwierdzenie dostawcy danych RankyFy. W Google Ads Competition opisuje konkurencję reklamodawców, a nie trudność organicznego rankingu: [definicje Google](https://support.google.com/google-ads/answer/3022575?hl=en).
- Competition Score w każdym wierszu jest stałym kodem kategorii: UNSPECIFIED=0 (62 frazy), LOW=25 (375), MEDIUM=50 (57), HIGH=75 (16). Nie daje dodatkowej informacji ponad nazwę kategorii. Nie traktować 25 jako KD=25 ani 0 jako łatwej frazy.
- `sleep sounds rain` i `rain sounds sleep sounds` mają po 1 500 000. To bardzo duże wartości i podobne warianty. Zweryfikować ich znaczenie przed planowaniem ruchu; nie sumować automatycznie popytu na podobne frazy.
- Żadna z 510 fraz nie zawiera całego słowa app/apps ani offline/subscription. Ten zestaw słabo pokrywa instalacyjny intent i przewagi Calmy wskazane w pierwotnym planie.

### Wybrane frazy i sposób użycia

| Fraza | Volume z CSV | Wstępne zastosowanie |
|---|---:|---|
| free sleep sounds for iphone | 70 | /sleep-sounds-app: doprecyzować dostępność iOS i darmowy zakres; kandydat do monitoringu |
| android sleep sounds | 40 | /sleep-sounds-app: dostępność Android i CTA; kandydat do monitoringu po sprawdzeniu wyników |
| iphone sleep sounds | 320 | Wariant platformowy, ale może obejmować wbudowane funkcje iPhone'a; sprawdzić dokładny intent |
| free sleep sounds | 8100 | Szersza fraza na istniejący landing; nie zakładać, że każdy szuka aplikacji |
| relaxing sleep sounds | 12100 | Supporting content i istniejący landing sleep/relaxation; wymaga oceny wyników wyszukiwania |
| ocean sleep sounds | 33100 | /nature-sounds-app i treści o oceanie; nie tworzyć automatycznie osobnego landingu |
| gentle rain sleep sounds | 18100 | Istniejący poradnik o deszczu i docelowo rain landing, jeśli wyniki uzasadnią osobny URL |
| sleep sounds to drown out snoring | 70 | Wąski temat do sekcji lub poradnika o maskowaniu dźwięków, bez obietnicy leczenia chrapania |

Sprawdzenie przykładowych wyników wyszukiwania pokazało strony aplikacji dla fraz platformowych, m.in. [Sleep Jar iOS](https://sleepjar.com/ios), [Momental iOS](https://momental.ai/download-ios) i [aplikację Android](https://play.google.com/store/apps/details?id=sleep.relax.sleepsounds.music). To wspiera ich rozważenie; nie jest to audyt pełnego TOP 10 Google US Mobile.

### Czego nie priorytetyzować w tym zestawie

Frazy z Alexa/Echo, YouTube/Spotify, nazwami cudzych produktów i sprzętu mają często inne zadanie użytkownika niż instalacja Calmy. Frazy download/mp3 mogą oznaczać pobieranie pliku audio. Szerokie frazy o zdrowiu i dzieciach wymagają osobnej oceny; nie są pierwszym krokiem wynikającym z tego eksportu.

### Następny research w RankyFy

Jeśli ten sam moduł pozwala podać frazę bazową, zebrać wyniki dla:

1. `sleep sounds app`
2. `brown noise app`
3. `white noise app`
4. `sleep sounds app no subscription`

Używać otrzymanych wolumenów do wstępnej selekcji, a organiczną trudność i intent oceniać na podstawie wyników wyszukiwania oraz danych GSC. Nowy eksport nie zmienia pierwszego priorytetu /brown-noise-app na pozycji 14, ale rozszerza ocenę wartości narzędzia o keyword research.
