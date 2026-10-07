# Calma — rekomendacje SEO i konwersji po analizie eksportów

Data: 2026-10-07. Zakres: cztery eksporty keyword research w input, eksport rank trackingu, kod strony i wybrane publiczne URL-e. Dokument opisuje rekomendacje z analizy. Następnie wdrożono pierwszą partię zmian w kodzie; zakres i wyniki sprawdzenia opisuje [raport wdrożenia](CALMA_SEO_wdrozenie_2026-10-07.md). Zmiany nie zostały opublikowane na hostingu.

## Wniosek

Pierwszy pakiet: poprawa brown noise i white noise, trafne linki z poradników, lepsze przyciski pobrania i pomiar ich kliknięć. Następnie nowy landing rain sounds i landing pink noise. Green noise może poczekać. Szerokie frazy o deszczu nie uzasadniają tworzenia wielu podobnych stron.

## Dane wejściowe

| Plik | Wiersze |
|---|---:|
| keywords-sleep sounds app-US.csv | 1295 |
| keywords-rain noise for sleep-US.csv | 789 |
| keywords-sound of rainfall to sleep-US.csv | 439 |
| keywords-sleepsounds-US.csv | 510 |
| Łącznie | 3033 |

Po usunięciu powtórzonych fraz: 2393 unikalne zapytania. Nie sumować wolumenów powtarzających się fraz ani automatycznie dodawać wolumenów podobnych wariantów.

Wszystkie cztery pliki mają tę samą strukturę: Keyword, Volume, Competition, Competition Score, Low Bid, High Bid. Competition Score przyjmuje wyłącznie 0/25/50/75. Jak ustalono w poprzedniej analizie, nie jest to potwierdzony organiczny Keyword Difficulty. Brakuje daty danych, okresu uśredniania, źródła i waluty stawek. US pochodzi z nazw plików. Wartości Volume są szacunkami z eksportu, nie prognozą ruchu dla Calmy.

| Fraza | Volume z eksportu | Docelowy URL |
|---|---:|---|
| white noise app | 9900 | /white-noise-app |
| white noise app free | 3600 | /white-noise-app |
| free sleep sounds app | 1000 | /sleep-sounds-app |
| rain sounds app | 1000 | /rain-sounds-app — nowy |
| pink noise app | 1000 | /pink-noise-app — nowy |
| brown noise app | 880 | /brown-noise-app |
| sound machine app | 880 | /sound-mixer-app |
| brown noise for sleep app | 590 | /brown-noise-app |
| app for nature sounds | 390 | /nature-sounds-app |
| green noise sleep app | 170 | na razie /nature-sounds-app |
| free sleep sounds app no subscription | 30 | /sleep-sounds-app; sprawdzić wybór URL-a w GSC |
| offline white noise app | 20 | /white-noise-app |

Nie każda fraza bazowa znajduje się w eksporcie. Brak np. dokładnego sleep sounds app, nature sounds app lub sound mixer app nie oznacza zerowego popytu.

## 1. Istniejące landingi: konkretny produkt zamiast wspólnego szablonu

Kolejność: brown noise, white noise, sleep sounds, sound mixer. Nature sounds już dobrze eksponuje offline i brak subskrypcji; tam bardziej przydatne mogą być linki i dodatkowe przykłady.

### Brown noise

RankyFy: brown noise app offline na pozycji 14, właściwy URL /brown-noise-app. To wstępny priorytet z dostępnego pomiaru, bez gwarancji wejścia do TOP 10.

- Proponowany title: Brown Noise App — Free Offline Mixer | Calma.
- Proponowany H1: A brown noise app with offline playback and custom mixes.
- Wprowadzenie powinno od razu mówić o brown noise, regulacji warstw, offline i darmowym zakresie.
- Zamiast ogólnej sekcji o elegancji: konkretny przykład brown noise + rain i informacje o odtwarzaniu offline.
- Dodać FAQ o offline i darmowym zakresie, zachowując zgodność JSON-LD z widoczną odpowiedzią.

### White noise

W eksporcie white noise app ma 9900, white noise app free 3600. Obecny title już zawiera free; nie trzeba go zmieniać tylko dla zmiany.

- H1 i pierwszy akapit są niemal identyczne jak na brown noise. Opisać specyfikę white noise i funkcje aplikacji własnym tekstem.
- Przykładowy H1: A free white noise app with offline playback and custom mixing.
- Dodać czytelne odpowiedzi: co jest darmowe, jakie są limity warstw, czy działa na iPhone/Android, jak działa timer i offline.
- Nie tworzyć oddzielnych landingów dla free white noise app, white noise app android ani white noise app iphone. To warianty obsługiwane przez istniejący URL.

### Sleep i sound mixer

- Sleep landing już eksponuje free/offline/no subscription. Zachować tę podstawę; dodać konkretny przykład użycia i precyzyjny zakres darmowej wersji.
- Sound mixer: pokazać kroki tworzenia miksu i sterowania głośnością, a także sekcję telefonu jako sound machine. Fraza sound machine app jest lepiej dopasowana do produktu niż ogólne audio editing.
- Potwierdzić faktyczny model offline przed zmianą opisów: w treściach występuje zarówno dostępność po instalacji, jak i po zapisaniu/pobraniu dźwięków. Ujednolicić tekst zgodnie z rzeczywistym działaniem aplikacji.
- Zamiast ogólnych obietnic: konkretne funkcje, screenshot dopasowany do danej strony i krótki sample dźwięku, jeśli pomaga wybrać produkt. Audio ładować na żądanie; nie uruchamiać automatycznie.

## 2. Linki z istniejących poradników do właściwego landingu

Linki w stopce już są. Uzupełnienie powinno dotyczyć kontekstu artykułu i kolejnego kroku czytelnika, nie zwiększania licznika linków.

- Noise colors guide: linki przy opisach white, brown i pink do odpowiednich landingów. Pink dopiero po publikacji.
- Poradniki o deszczu: link do rain landing po jego publikacji.
- Artykuł o wyborze aplikacji white noise już ma link do white noise landing; zachować go.
- Poradniki o wieczornej rutynie i dźwiękach do snu: link do sleep sounds landing.
- Home lub odpowiednia sekcja wyboru dźwięku: widoczne linki do rain i pink po publikacji.

Google zaleca linki kontekstowe z opisowym tekstem. Nie narzuca magicznej liczby linków na stronę: [zalecenia Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## 3. Dwa nowe landingi: rain, następnie pink

Potwierdzono HTTP 404 dla /rain-sounds-app i /pink-noise-app. Publiczne wyniki wyszukiwania zawierają aplikacje i landingi produktowe dla tych tematów. To uzasadnia rozważenie osobnych stron, a nie osobnego URL-a dla każdego wariantu frazy.

### /rain-sounds-app

Proponowany title: Rain Sounds App — Free Offline Mixing | Calma.

Treść: rodzaje deszczu faktycznie dostępne w Calmie, regulacja głośności i warstw, rain + brown noise jako przykład miksu, timer, faktyczne offline, zakres free/PRO, screenshot, sample na żądanie, oba sklepy. Linki z dwóch istniejących poradników o deszczu.

Rain sounds app ma w eksporcie 1000, rain sounds for sleep app 210. Rain rain sleep sounds app to zapytanie zawierające nazwę konkurencyjnego produktu — nie traktować go jako zwykłej frazy generycznej.

### /pink-noise-app

Proponowany title: Pink Noise App — Free Offline Mixing | Calma.

Treść: charakter dźwięku, sample, krótkie porównanie z white/brown, przykład miksowania, funkcje aplikacji i oba sklepy. Link z istniejącego guide o kolorach szumu. Pink noise app ma 1000, pink noise app for sleep 260.

Green noise sleep app ma 170, a nature landing już rankuje na green noise app offline (#34). Najpierw wspierać istniejący URL i poradnik; osobny green landing niżej w kolejności.

Nowe strony dodać do sitemap, mapowania routingu i sensownych linków. Dla języków bez gotowej wersji nie generować fikcyjnych hreflangów ani wielu kopii angielskiej treści. Zakres tłumaczeń dopasować do obecnej architektury aplikacji i gotowych treści.

## 4. Ułatwić pobranie aplikacji na obu platformach

W analizowanych artykułach CTA przekazane do wspólnego ArticlePage wskazuje Google Play, ale komponent już wcześniej zamieniał ten adres na lokalną stronę /download, która rozpoznaje urządzenie. Nie było więc blokady pobierania na iPhone. Jawne przyciski obu sklepów pozwalają czytelnikowi bezpośrednio wybrać platformę.

- W bloku pobrania artykułów pokazać App Store i Google Play albo wykorzystać sprawdzoną ścieżkę wyboru platformy.
- W landingach przy CTA jasno podać: darmowy zakres, opcjonalne PRO, brak wymaganej subskrypcji i konta, zgodnie z faktycznym produktem.
- Zachować osobny, trafny link do landingu produktowego obok bezpośredniego pobrania.
- Dodać oznaczenia miejsc CTA: hero, inline, end. Dla wielu linków landingów obecny tracking zapisuje tylko page.
- Pomiar kliknięcia do sklepu nie jest pomiarem instalacji. Ocena instalacji wymaga danych ze sklepów i zgodnej atrybucji.

## 5. Doprecyzować istniejący pomiar, zamiast tworzyć go od nowa

Kod już wysyła store_click z parametrami store, page_path i link_location oraz cta_click dla oznaczonych elementów. Analytics uruchamia się po zgodzie. Nie zweryfikowano, czy zdarzenia faktycznie docierają do konta GA4.

- Sprawdzić store_click w GA4 przy testowym kliknięciu po zgodzie.
- Raportować kliknięcia do sklepu i ich udział w sesjach osobno dla landingów, platform i ruchu Organic Search.
- Poprawić oznaczenia miejsc CTA.
- Obecny kod automatycznie dodaje do linków Google Play utm_medium=organic_landing i utm_campaign=seo niezależnie od rzeczywistego źródła wejścia. To etykieta ustawiana przez stronę, nie dowód organicznego pozyskania. Używać neutralnej kampanii strony lub przenosić prawdziwe dane pozyskania; źródła ruchu w GA4 analizować osobno.

To poprawki pomiaru i konwersji, bez bezpośredniej obietnicy wzrostu pozycji w Google.

## 6. Techniczne poprawki i spójność informacji

- Responsive screenshots: dopasować sizes do layoutu. W poprzednim sprawdzeniu home wszystkie 14 obrazów miało srcset, ale nie sizes. Jeden screenshot już był serwowany jako WebP; brak podstaw do masowej konwersji PNG tylko dla oceny RankyFy. [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image#sizes).
- Sprawdzić aktualną indeksację najważniejszych URL-i w GSC. Historyczny eksport w gsc_data/2026-09-09 pokazywał 42 URL-e zeskanowane bez indeksacji i 16 wykrytych bez indeksacji. Nie wiadomo z tych zestawień, które konkretne URL-e dotyczyły problemu ani jaki jest stan teraz. Nie usuwać automatycznie przekierowań lub poprawnych noindexów.
- Live check 13 URL-i: 10 istniejących stron zwracało HTTP 200, self-canonical i index/follow; rain, pink i green zwracały 404. To sprawdzenie dostępności i metadanych, nie dowód indeksacji całej strony.
- Ujednolicić widoczne FAQ z JSON-LD; np. brown noise zawiera obecnie różne odpowiedzi o ADHD w tekście i danych strukturalnych. Usunąć nieuzasadnione obietnice, jasno rozdzielać funkcję aplikacji od dowodów naukowych.
- Informacje o twórcy i kontakt już są częściowo w press/support/schema. Można je lepiej pokazać czytelnikowi; nie wymyślać kwalifikacji ani recenzji.
- Nie dopisywać keywords wyłącznie do meta keywords ani nie zwiększać tekstu do arbitralnej liczby słów. Google nie ma preferowanej długości tekstu: [Google — pomocne treści](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Istniejące URL-e wymagające rozdzielenia zamiaru

Plan początkowy odradzał tworzenie offline i no-subscription landingów, ale oba URL-e już istnieją. Nie tworzyć ich ponownie ani nie dodawać trzeciego odpowiednika w blogu bez uzasadnienia.

- /sleep-sounds-app: główny landing aplikacji do snu.
- /offline-sleep-sounds-app: konkretny scenariusz bez internetu i podróży.
- /best-sleep-sounds-app-without-subscription: model cenowy i porównanie zakresu dostępu.

Dla fraz sleep/no subscription tracker pokazuje home (#33 i #45). Sprawdzić zapytania dla wszystkich powyższych URL-i w aktualnym GSC. Jeden ranking URL w jednym pomiarze nie dowodzi kanibalizacji. Scalanie, redirect i zmiana canonical wymagają danych o stronach i zapytaniach.

## Kolejność najbliższych wdrożeń

1. Zachować baseline; sprawdzić aktualną indeksację i działanie store_click.
2. Poprawić treść brown/white noise, CTA artykułów i konkretne linki do istniejących landingów.
3. Doprecyzować tracking CTA i kampanii; poprawić sizes jako małą zmianę techniczną.
4. Opublikować rain landing i linki do niego, następnie pink landing.
5. Porównywać wyniki po 7, 14 i 28 dniach: zapytania/wyświetlenia/kliknięcia w GSC, pozycje w stałej konfiguracji trackera oraz organiczne store_click w GA4. Raportować metryki osobno, bez traktowania korelacji jako dowodu przyczyny.

Mapa 21 wybranych fraz z propozycjami działań: CALMA_SEO_keyword_map_2026-10-07.csv.
