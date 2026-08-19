# Calma — plan pozyskania użytkowników (ASO + treść)

> Ten dokument zastąpił poprzedni „plan treści na 52 tygodnie". Powód jest
> w §1: dane pokazały, że wąskim gardłem nie jest liczba artykułów, tylko to,
> że nikt nas nie znajduje ani nie klika. Blog zostaje, ale jako **najmniejszy
> z trzech kanałów**, a nie jako całość strategii.
>
> Kalendarz 52 tematów nie poszedł do kosza — jest w **Załączniku A** jako pula
> do wykorzystania w wolnym tempie.

---

## 1. Diagnoza — skąd ta wersja planu

Trzy kroki, każdy oparty na danych, każdy przeczący poprzedniemu założeniu.

**Krok 1 — Google Search Console, 3 miesiące (2026-04-20 → 2026-07-19).**
24 902 wyświetlenia, **31 kliknięć**, CTR 0,12 %, średnia pozycja ~30.
Wyświetlenia urosły 25× w kwartał (153 → ~200/dzień), kliknięcia stoją na
~10/miesiąc od maja. Pierwszy wniosek: to nie jest problem „za mało treści".

**Krok 2 — jak wygląda SERP (sprawdzone ręcznie, mobile, incognito).**
Na zapytaniu `sleep sounds app` pięć ekranów przewijania nie zawiera **ani
jednego zwykłego wyniku organicznego**: trzy reklamy, pakiet Apps z App Store,
„Więcej pytań", wynik Google Play, powiązane wyszukiwania, Przegląd od AI.
Dopiero potem: apps.apple.com, play.google.com i domeny producentów
(sleepjar.com, rainrainapp.com, endel.io).
Na zapytaniu `is rain considered white noise` (9 049 wyświetleń, **0 kliknięć**,
poz. 9,26) jesteśmy tuż pod karuzelą wideo — formalnie top 10, praktycznie
kilka przewinięć w dół.
Na zapytaniu `calma` nie ma nas w ogóle: jest klinika psychiatryczna w Gdańsku,
restauracja, dostawca fotowoltaiki, marka T-shirtów, słownik hiszpańsko-polski
i piosenka Pedro Capó z 3,2 mld wyświetleń. **Ruch brandowy nie istnieje.**

Drugi wniosek: „pozycja 6" w GSC to na telefonie 4–6 przewinięć. Dlatego strona
główna na pozycji 3,8 ma CTR 0,6 %, a `/sound-mixer-app` na pozycji 6,2 — 0,5 %.
Norma dla tych pozycji to 5–20 %. Jesteśmy 10–20× poniżej i **dotyczy to
każdej strony**, nie tylko bloga.

**Krok 3 — sklepy (publiczne API iTunes Lookup/Search + strona Google Play).**

| Aplikacja | Oceny | Śr. |
|---|---:|---:|
| BetterSleep | 390 576 | 4,7 |
| White Noise Lite (TMSOFT) | 272 161 | 4,8 |
| White Noise Deep Sleep Sounds | 205 483 | 4,8 |
| Rain Rain Sleep Sounds | 136 015 | 4,8 |
| Sleep Sounds by Sleep Pillow | 89 538 | 4,9 |
| **Calma** | **0** | — |

Calma nie występuje w top 25 dla żadnej istotnej frazy: `sleep sound mixer`,
`sleep mixer`, `sound mixer sleep`, `green noise`, `tinnitus sounds`,
`noise colors`, `binaural beats`, `brown noise`, `rain mixer`. Na własną nazwę
`calma` jest na **20. pozycji**, za „Calma: ADHD Planner" (5 ocen).

**Ale** dla frazy `sleep mixer` trzy pierwsze aplikacje mają **po zero ocen**
(*Sleep Sounds Mixer*, *SleepMixer*, *Sleep Mixer: Ambient Sounds*), a przy
`sound mixer sleep` pierwsza ma 3 oceny. Aplikacja bez ocen **może** się tam
wybić — jeśli metadane pasują. Nasze nie pasują (§3.1).

> **Zastrzeżenie metodologiczne:** API wyszukiwania iTunes nie odwzorowuje
> dokładnie rankingu App Store, a pola słów kluczowych (100 znaków) nie widać
> publicznie. Traktuj powyższe jako mocny sygnał, nie jako pomiar. Po zmianach
> z §3.2 zweryfikuj ręcznie, wyszukując w samej aplikacji App Store.

### 1.1 Wniosek

Google Search jest kanałem, w którym **nie mamy czym wygrać w krótkim terminie**:
pierwszy ekran należy do reklam, sklepów i AI, a marka jest niewyszukiwalna.
Sklepy są kanałem, w którym **przegrywamy z powodów, które da się naprawić
w tygodniach** — złe metadane i zero ocen.

Dlatego kolejność wysiłku odwraca się o 180°.

### 1.2 Aktualizacja GSC — 2026-08-03

Nowy eksport obejmuje **2026-05-02 → 2026-08-01**. Źródłem prawdy dla sum jest
`Wykres.csv`: **25 705 wyświetleń, 40 kliknięć, CTR 0,156 %, średnia pozycja
26,0**. To niewielka poprawa względem poprzedniego, w dużej części
nakładającego się okna (24 902 / 31 / 0,12 % / ~30), a nie dowód trwałego
trendu. Lepsze porównanie krótkoterminowe daje ostatnie 14 dni z poprzednimi
14 dniami: **3 598 vs 3 308 wyświetleń (+8,8 %), 11 vs 8 kliknięć (+37,5 %),
CTR 0,306 % vs 0,242 %, pozycja 30,8 vs 33,4**.

W dniach 16–19 czerwca wystąpił jednorazowy skok do 8 992 wyświetleń bez
kliknięcia. Nie wolno używać go jako baseline'u wzrostu ani spadku. Rytm
końca lipca jest stabilniejszy: około 200–400 wyświetleń i 0–2 kliknięcia
dziennie.

**Walidacja eksportu:** pliki wymiarowe GSC nie sumują się identycznie.
`Strony.csv` pokazuje 28 132 wyświetlenia i 41 kliknięć, a `Zapytania.csv`
tylko 18 103 i 5 (1000 wierszy, anonimizacja i limit eksportu). Dlatego:

- sumy i trend bierzemy z `Wykres.csv`;
- `Strony.csv`, `Zapytania.csv`, kraje i urządzenia służą do ustalania
  kolejności, nie do raportowania łącznego wyniku;
- przed zmianą tytułu konkretnej strony potrzebny jest raport GSC z dwoma
  wymiarami **Strona + Zapytanie** dla ostatnich 28 dni i poprzednich 28 dni.

Najważniejsze sygnały z nowego eksportu:

| Sygnał | Dane | Decyzja |
|---|---:|---|
| Pytania „czy deszcz to biały szum” | 7 159 wyśw., 0 kliknięć | Nie rozbudowywać; intencja kończy się w SERP-ie |
| `/blog/rain-sounds-vs-white-noise` | 9 466 wyśw., poz. 9,29, 0 kliknięć | Utrzymać, bez dalszej inwestycji poza jednym testem snippetu |
| `/sound-mixer-app` | 595 wyśw., poz. 6,23, 5 kliknięć, CTR 0,84 % | Najlepszy EN quick win; chronić temat i testować snippet |
| `/es/sleep-sounds-app` | 356 wyśw., poz. 9,17, 6 kliknięć, CTR 1,69 % | Najmocniejszy wzór lokalizacji; wzmacniać linkami ES |
| `/focus-sounds-app` | 378 wyśw., poz. 10,34, CTR 0,26 % | Blisko top 10; optymalizacja tytułu/sekcji po raporcie Strona + Zapytanie |
| `/nature-sounds-app` | 455 wyśw., poz. 17,35, CTR 0,44 % | Rozbudować dopasowanie do `nature sounds app` |
| EN: white noise / tinnitus / sleep | poz. 22–49, duży wolumen, CTR 0,06–0,12 % | Najpierw lepsze landingi i linkowanie, nie nowe artykuły |
| Pozostałe locale łącznie | mały wolumen, zwykle wyższy CTR niż EN | Priorytet ES; punktowe poprawki DE/PT-BR/FR, bez masowej produkcji |

Klaster fraz zawierających `app` ma co najmniej **3 489 wyświetleń i 2
kliknięcia**. To ważniejsza pula niż kolejne pytania definicyjne. Widoczne
okazje to m.in. `sleep sounds app` (poz. 26,86), `nature sounds app` (20,56),
`brown noise app` (26,05), `best free white noise app` (28,96) i
`focus sounds app` (16,35). Aktualny SERP potwierdza też, że Calma jest już
indeksowana jako zwykły wynik dla `sound mixer app`, obok bezpośrednich
konkurentów. Ten landing jest więc stroną do obrony i wzmocnienia, nie do
łączenia z ogólnym `/sleep-sounds-app`.

---

## 2. Podział wysiłku

| Priorytet | Kanał | Czego wymaga | Czas do efektu |
|---|---|---|---|
| **1** | **ASO — metadane w sklepach** (§3.2) | kilka dni, zero kosztu | dni–tygodnie |
| **2** | **ASO — oceny** (§3.3) | zmiana w kodzie aplikacji | tygodnie–miesiące |
| **3** | **Rankingi i outreach** (§4) | kilkanaście maili + press kit | tygodnie |
| **4** | **Strona i blog** (§5) | ~1 tekst/miesiąc + naprawy | 12+ miesięcy |

Reguła nadrzędna: **dopóki aplikacja ma mniej niż 100 ocen, priorytet 4 nie
zabiera czasu priorytetom 1–3.** Blog ma się nie zatrzymać, ale też nie rosnąć.

---

## 3. Kanał 1 — ASO

### 3.1 Stan faktyczny

| Pole | Obecna treść | Ocena |
|---|---|---|
| iOS nazwa | `Calma: Sleep Sounds & Relax` (27/30) | „sleep sounds" należy do apki z 205 tys. ocen |
| iOS podtytuł | `White noise, rain & nature` (26/30) | trzy kolejne frazy head, wszystkie zajęte |
| Play tytuł | `Calma: Sleep Sounds & Mixer` | jedyne miejsce z wyróżnikiem — i niespójne z iOS |
| Oceny | 0 (iOS), poniżej progu wyświetlania (Play) | blokuje wszystko |
| Wydanie / aktualizacje | 2026-04-22; iOS 2026-05-08, Play 2026-06-24 | iOS bez aktualizacji od 2,5 mies. |

Trzy realne przewagi produktu — **mikser warstw, jednorazowa opłata zamiast
subskrypcji, tryb offline** — nie występują w nazwie ani podtytule na iOS.
Metadane celują dokładnie w te frazy, których nie da się wygrać, i pomijają te,
które stoją otworem.

### 3.2 Przecelowanie metadanych (zadanie #1)

Propozycja do wdrożenia i weryfikacji — nie dogmat, tylko hipoteza oparta na
§1 krok 3. Znaki policzone, mieszczą się w limitach Apple (30/30/100):

```
iOS nazwa       Calma: Sleep Sound Mixer            (24/30)
iOS podtytuł    White & brown noise, rain, fan      (30/30)
iOS keywords    machine,offline,timer,pink,green,tinnitus,focus,study,
                baby,ocean,ambient,nature,binaural,breathing   (98/100)

Play tytuł      Calma: Sleep Sound Mixer            (24/30)
Play short      Mix white noise, brown noise and rain. Offline timer.
                No subscription.                    (70/80)
```

Zasady, według których to zbudowano:
- **Żadne słowo nie powtarza się** między nazwą, podtytułem i keywords — Apple
  i tak indeksuje je łącznie, a powtórzenie to zmarnowany znak.
- Nazwa przejmuje niszę, którą realnie da się zająć (`mixer`), zamiast walczyć
  o `sleep sounds` z aplikacją mającą 205 tys. ocen.
- Podtytuł zbiera kolory szumu i konkretne dźwięki.
- Keywords biorą wszystko, czego nie zmieściliśmy: `machine` (bo ludzie szukają
  *sound machine* / *noise machine*), tryb offline, timer, przypadki użycia.

**Ryzyko utraty rozpoznawalności marki przy zmianie nazwy: zerowe.** Nie ma
czego tracić — 0 ocen, brak w top 25 dla czegokolwiek, 20. miejsce na własną
nazwę. To jedyny moment, kiedy taka zmiana nic nie kosztuje.

Po wdrożeniu: zanotuj datę, odczekaj 2–3 tygodnie, sprawdź ręcznie w App Store
pozycje na `sleep mixer`, `sound mixer`, `sleep sound mixer`, `noise mixer`.

### 3.3 Oceny (zadanie #2 — wymaga zmiany w aplikacji)

Zero ocen po trzech miesiącach od premiery to najpilniejsza rzecz w całym
przedsięwzięciu — ważniejsza niż cokolwiek na stronie. Bez ocen nie ruszy
żaden ranking i żadna konwersja z listingu.

- iOS: `SKStoreReviewController` / `requestReview` (Apple dopuszcza maks.
  3 prośby na 365 dni na użytkownika). Android: In-App Review API.
- **Moment wyzwolenia to sedno.** Nie przy pierwszym uruchomieniu. Po
  **pozytywnym zdarzeniu**: zapisaniu własnego miksu, trzeciej sesji, albo
  zakończeniu sesji dłuższej niż 20 minut. Człowiek, który właśnie zbudował
  swój miks, jest w najlepszym możliwym nastroju.
- Nie pytaj podczas odtwarzania w nocy — to najgorszy możliwy moment.
- Cel etapowy: **50 ocen** (wtedy Apple pokazuje średnią), potem 250.

### 3.4 Rytm i mierzenie

- Aktualizacja aplikacji co 4–6 tygodni; przy każdej wolno przetestować jedną
  zmianę metadanych. Nie zmieniaj dwóch rzeczy naraz, bo nie będzie wiadomo,
  co zadziałało.
- Metryki (App Store Connect / Play Console): **wyświetlenia listingu,
  współczynnik konwersji instalacji, liczba ocen, źródło (search vs browse)**.
- To są prawdziwe KPI tego dokumentu. GSC z §6 jest dopiero drugi.

---

## 4. Kanał 2 — rankingi i outreach

Wyniki organiczne, których nie zajmują sklepy, zajmują zestawienia typu
„najlepsze aplikacje z białym szumem 2026". Wejście do nich nie wymaga
pokonania ani Google, ani Apple'a — wymaga jednego maila.

Cele zidentyfikowane przy analizie SERP-a:
`top10.com/white-noise-apps`, `bestapp.com/best-white-noise-apps`,
`slonoise.com/resources/best-white-noise-apps-2026`,
`momental.ai/resources/best-white-noise-apps`.
Kolejne znajdziesz wyszukując `best white noise apps 2026`,
`best sleep sound apps`, `white noise app no subscription`.

> Uwaga: `momental.ai` i `slonoise.com` to **konkurenci**, którzy tym samym
> content marketingiem zabierają ruch, o który walczymy blogiem. Ich obecność
> w tych wynikach to dowód, że kanał działa — tylko oni robią to od dawna.

Co trzeba mieć przed wysyłką:
- **Press kit** — mamy `/press` (8 wersji językowych, z modelem biznesowym:
  *„darmowa z jednorazowym odblokowaniem premium, bez subskrypcji"*). To jest
  nasz najmocniejszy argument w zestawieniach, gdzie reszta to subskrypcje.
- Zestaw screenów i ikona w wysokiej rozdzielczości.
- Jedno zdanie pozycjonujące, to samo wszędzie: mikser warstw, offline,
  jednorazowa opłata.
- Kod promocyjny do pełnej wersji dla autora zestawienia.

Rytm: **10–15 zgłoszeń w pierwszym miesiącu**, potem 5 miesięcznie. Zapisuj
w prostym arkuszu: adresat, data, odpowiedź, efekt.

---

## 5. Kanał 3 — strona i blog (ograniczony)

### 5.1 Czego **nie** robimy

- **Nie inwestujemy w `is rain considered white noise`.** 9 049 wyświetleń,
  0 kliknięć, tytuł i FAQ już zoptymalizowane, a i tak nic. Nawet #1 nie
  pomoże: kto pyta „czy deszcz to biały szum", nie szuka aplikacji.
- **Nie tworzymy stron pod pytania yes/no** („is X …?"). Ten kształt zapytania
  domyka się w SERP-ie. Jeśli temat jest ważny — wchodzi jako sekcja
  w istniejącym artykule.
- **Nie walczymy o `sleep sounds app` i `white noise app`.** Te SERP-y należą
  do listingów sklepów i aplikacji ze 100 tys. ocen. Wracamy do nich, gdy
  kanał 1 zacznie działać.
- **Nie piszemy 52 artykułów rocznie w 8 wersjach.** To 416 plików. Rachunek
  z §1 tego nie uzasadnia.

### 5.2 Co robimy — sprint SEO po eksporcie 2026-08-03

Nie wykonujemy już kolejki „jedno dowolne zadanie miesięcznie”. Najpierw
zamykamy pomiar i szybkie poprawki na stronach, które już mają widoczność.
Nowa kolejność:

#### P0 — ten tydzień: pomiar i indeksacja

1. **Wyeksportuj GSC Strona + Zapytanie**, osobno dla ostatnich 28 dni i
   poprzednich 28 dni, Search type: Web. Dla pięciu najważniejszych landingów
   (`/sound-mixer-app`, `/focus-sounds-app`, `/nature-sounds-app`,
   `/sleep-sounds-app`, `/white-noise-app`) zapisz 10 głównych fraz, pozycję,
   CTR i urządzenie. Obecny eksport nie pozwala wiarygodnie przypisać frazy do
   URL-a.
2. **Oczyść indeks z adresów użytkowych:** ustaw spójne `noindex,follow` dla
   `/bio`, `/terms-of-service`, `/privacy-policy` i `/support`, a następnie
   usuń je z sitemap. Obecnie samo `/bio` ma 152 wyświetlenia, regulamin 73,
   prawie wszystko bez kliknięć. `/press` zostaje indeksowalny, bo wspiera
   outreach i sygnały encji.
3. **Zablokuj indeksowanie wyników optymalizatora obrazów** `/_next/image`
   przez `X-Robots-Tag: noindex` (bez blokowania źródłowych obrazów i image
   sitemap). Eksport zawiera cztery takie URL-e jako wyniki Web. Po wdrożeniu
   sprawdź nagłówek przez `curl` i inspekcję URL w GSC.
4. **Nie zmieniaj jeszcze pięciu tytułów naraz.** Zanotuj datę każdego deploya
   i testuj jedną rodzinę URL-i przez minimum 14 dni; inaczej nie da się
   przypisać efektu.

**Status 2026-08-03:** punkty 2–3 wdrożone i zweryfikowane na produkcyjnym
buildzie (`noindex, follow` dla stron użytkowych, brak tych tras w sitemap,
`X-Robots-Tag: noindex` dla `/_next/image`; `/press` pozostał w sitemap).
Dodano też brakującą trasę `/press` do `next-intl`; pełny crawl 256 URL-i
sitemap zakończył się wynikiem: 0 błędów HTTP, 0 `noindex`, 0 brakujących i 0
zduplikowanych canonicali.
Punkt 1 wykonany: raporty Strona + Zapytanie zapisano w
`gsc_data/page_queries/`. Wnioski: `/sound-mixer-app` poprawił CTR z 0,62 % do
3,67 % i nie wymaga zmiany; fraza `focus sounds app` poprawiła pozycję z 18,29
do 15,31; `/es/sleep-sounds-app` utrzymuje CTR 1,82 %. Te trzy strony zostają
bez zmian. `/sleep-sounds-app` urósł z 222 do 493 wyświetleń, ale nadal ma 0
kliknięć; to następny kontrolowany test.

#### P1 — następne 2 tygodnie: strony na granicy top 10

1. **Broń `/sound-mixer-app` (poz. 6,23):** po raporcie Strona + Zapytanie
   przetestuj krótszy title z frazą na początku i wyróżnikiem produktu
   (`offline`, `mix`, `no subscription`). Nie zmieniaj slugu ani canonicala.
   Dodaj 3–5 kontekstowych linków do tej strony z artykułów o śnie, nauce i
   kolorach szumu, z różnymi naturalnymi anchorami.

   **Decyzja 2026-08-03:** nie zmieniać snippetu. W porównaniu 28/28 dni CTR
   wzrósł z 0,62 % do 3,67 %, a kliknięcia z 1 do 4. Obserwować i chronić URL.
2. **Przepchnij `/focus-sounds-app` (10,34) do top 10:** dopasuj H1 i pierwsze
   100 słów do faktycznych fraz z raportu; dodaj linki z
   `/blog/best-sounds-for-studying`, artykułu ADHD i strony miksera. Zachowaj
   ostrożny język YMYL — bez obietnic leczenia ADHD.
3. **Wzmocnij `/es/sleep-sounds-app`:** dodaj linki z hiszpańskiego home,
   huba bloga i 2–3 tematycznie najbliższych artykułów. To obecnie najlepsza
   kombinacja wolumenu i CTR w locale; nie przepisywać działającego snippetu.
4. **Test CTR tylko na realnych okazjach:** `/fr/blog/best-free-white-noise-app`
   (155 wyśw., poz. 9,05, 0 kliknięć), `/offline-sleep-sounds-app` (82 / 9,96 /
   0) oraz `/pt-BR/white-noise-app` (83 / 10,0 / 0). Najpierw potwierdź frazę
   w raporcie Strona + Zapytanie, potem zmień title i description w danym
   locale.

5. **Test EN `/sleep-sounds-app` rozpoczęty 2026-08-03:** 493 wyświetlenia vs
   222 w poprzednim okresie, 0 kliknięć w obu. Frazy dominujące: `sleep sounds
   app` (112), `free sleep sounds app` (48), `sleep noise app` (44). Title,
   description, H1 i intro dopasowano do intencji `free`, `offline` i `no
   subscription`; zmieniono trzy sekcje korzyści i ostrożnościowe FAQ. Nie
   zmieniać ponownie przez minimum 14 dni.

### 5.2.1 Handoff tygodnia — stan na 2026-08-03

**Materiały źródłowe:** pełny eksport GSC znajduje się w `gsc_data/`, a
porównania 28/28 dni dla sześciu landingów w `gsc_data/page_queries/`.

**Wykonane w kodzie:**

- `noindex, follow` dla `/bio`, `/privacy-policy`, `/terms-of-service` i
  `/support` we wszystkich locale;
- usunięcie powyższych stron użytkowych z sitemap;
- `X-Robots-Tag: noindex` dla `/_next/image` bez blokowania źródłowych obrazów;
- dodanie brakującej trasy `/press` do routingu `next-intl`;
- optymalizacja EN `/nature-sounds-app` pod `nature sounds app`, z komunikacją
  miksera, offline i braku subskrypcji oraz bez niepopartych obietnic zdrowotnych;
- optymalizacja EN `/sleep-sounds-app` pod `sleep sounds app`, `free sleep
  sounds app` i `sleep noise app`, również z poprawionym FAQ/schema;
- daty modyfikacji obu landingów ustawione na 2026-08-03 w sitemap;
- dodany powtarzalny test `npm run seo:audit` (`tools/audit-seo.ps1`).

**Zweryfikowane:** `npm run lint`, `npm run build` i `git diff --check`
przechodzą. Crawl obejmuje 256 URL-i sitemap: 0 odpowiedzi innych niż 200,
0 stron `noindex`, 0 brakujących canonicali i 0 zduplikowanych canonicali.

**Świadome decyzje „bez zmian”:**

- `/sound-mixer-app` — CTR 0,62 % → 3,67 %, kliknięcia 1 → 4; chronić wynik;
- `/focus-sounds-app` — `focus sounds app` poprawiło pozycję 18,29 → 15,31;
- `/es/sleep-sounds-app` — CTR 1,82 %, działającego snippetu nie przepisywać;
- `/white-noise-app` — frazy są głównie na pozycjach 25–40; obecnie problemem
  jest ranking/autorytet, nie brak dokładnej frazy w title i H1;
- `/blog/rain-sounds-vs-white-noise` — wysoka widoczność na pytania yes/no,
  ale 0 kliknięć; nie inwestować kolejnej pracy w ten klaster.

**Pozostało po publikacji:**

1. Wdrożyć aktualny stan repozytorium na produkcję i zapisać dokładną datę oraz
   godzinę deploya.
2. W GSC ponownie przesłać `https://www.calmasounds.com/sitemap.xml`.
3. W Inspekcji URL poprosić o indeksację `/nature-sounds-app` i
   `/sleep-sounds-app`.
4. Nie zmieniać title, description, H1 ani głównej treści tych dwóch landingów
   przez minimum 14 pełnych dni od deploya.

**Zamrożone do następnego pomiaru:** nowe artykuły, masowe zmiany metadata,
scalanie artykułu o kolorach szumu i kolejne przebudowy landingów. Wyjątek:
awaria, błędny canonical, przypadkowy `noindex`, 404 lub inny defekt techniczny.

### 5.2.2 Wynik przeglądu 14-dniowego — 2026-08-19

**Deploy potwierdzony.** Odpytanie produkcji 2026-08-19 pokazuje na obu
landingach nowe tytuły z testu, status 200, `index, follow` i poprawny
canonical. Data deploya: **2026-08-03**. Okna porównania: **19.07–01.08**
(przed) vs **04–17.08** (po) — po 14 pełnych dni, bez dnia deploya.
Dane: `gsc_data/{komputer,mobilne,tablet}/`, z podziałem na urządzenia.

**Tło całej witryny** (suma `Wykres.csv` z trzech urządzeń):

| Okres | Wyświetlenia | Kliknięcia | CTR |
|---|---:|---:|---:|
| 19.07–01.08 | 3 598 | 11 | 0,306 % |
| 04–17.08 | 3 055 | 8 | 0,262 % |
| **Zmiana** | **−15,1 %** | **−27,3 %** | −0,044 pp |

Cały serwis spadł w tym okresie. To jest właściwy mianownik — bez niego każdy
spadek na pojedynczej stronie wygląda groźniej, niż jest.

**Wynik obu testowanych landingów:**

| URL | Wyświetlenia | Kliknięcia | Poz. ważona | Udział w pokrytych wyśw. |
|---|---:|---:|---:|---:|
| `/sleep-sounds-app` | 227 → 59 (**−74,0 %**) | 0 → 0 | 27,13 → 24,18 | 10,57 % → 3,57 % |
| `/nature-sounds-app` | 29 → 7 (−75,9 %) | 0 → 0 | 21,03 → 21,00 | 1,35 % → 0,42 % |

**Wnioski:**

1. **`/sleep-sounds-app` — test nieudany.** Spadek −74 % przy tle −15,1 %.
   Udział strony w pokrytych wyświetleniach spadł trzykrotnie, więc to nie jest
   efekt trendu serwisu, tylko regres tej konkretnej strony. Cel testu —
   kliknięcia — nie został osiągnięty: **0 przed i 0 po**. Zgodnie z §6 to jest
   raport o porażce, nawet gdyby pozycja wyglądała lepiej.
2. **Mechanizm: zawężenie footprintu zapytań.** Przed zmianą desktop notował
   **54 różne frazy**, w tym `night sounds app` na poz. 18,38 — najlepszej
   w całym zestawie. Po zmianie mobile ma już tylko 4 frazy. `sleep noise app`
   (12 wyśw.) zniknął całkowicie, `sleep sounds app` spadł 30 → 3. Przepisanie
   pod `free` / `offline` / `no subscription` odcięło ogon zapytań, nie
   dokładając ani jednego kliknięcia.
3. **Poprawy pozycji nie traktować jako sukcesu.** Wzrost 27,13 → 24,18 jest
   w znacznej części artefaktem składu: strona straciła wyświetlenia na
   niżej rankujących frazach, więc średnia sama się podniosła. Mobile stoi
   płasko (26,55 → 26,60), poprawa siedzi wyłącznie w desktopie
   (27,39 → 23,69). Bez raportu Strona + Zapytanie za okres „po" nie da się
   rozdzielić realnego wzrostu od efektu składu i **nie będzie takiego
   raportu** — dalszego eksportu nie zbieramy.
4. **`/nature-sounds-app` — brak rozstrzygnięcia i nie warto go szukać.**
   29 → 7 wyświetleń to szum statystyczny; przy takich wolumenach żadna
   decyzja nie jest uprawniona. Pozycja stoi płasko (21,03 → 21,00).
   Strona nie wymaga cofania zmian ani dalszej pracy.

**Ograniczenia tego pomiaru — świadomie zaakceptowane:**

- `Strony.csv` pokrywa 66 % / 64 % wyświetleń desktopowych i 48 % / 37,5 %
  mobilnych (anonimizacja GSC). Dlatego wnioski opieramy na **udziale
  w wyświetleniach pokrytych**, nie na liczbach bezwzględnych.
- Żadne kliknięcie w obu okresach nie zostało przypisane do konkretnej strony
  w eksporcie — wszystkie 11 i 8 kliknięć siedzi poniżej progu anonimizacji.
- Brak wymiaru Strona + Zapytanie za okres „po", więc analiza fraz opiera się
  na eksporcie z 15 sierpnia (`gsc_data/page_queries/`).
- Porównanie 28 dni przed/po nie zostanie wykonane. Decyzję podejmujemy na
  danych 14/14, przyjmując wyższy margines błędu.

**Decyzje:**

1. **Przywrócić szerokość tematyczną `/sleep-sounds-app`** — jedna edycja:
   oddać w treści (H2, sekcje, FAQ) warianty `sleep noise app`,
   `night sounds app`, `sleeping sounds app`, które strona obsługiwała przed
   3 sierpnia. **Nie ruszać title ani description** — desktopowa poprawa
   pozycji jest niepewna, ale nie ma powodu jej ryzykować.
2. **Po tej edycji zamknąć temat obu landingów.** Dwa tygodnie testu dały zero
   kliknięć na stronie, która nigdy żadnego nie miała. Kolejna iteracja tej
   samej strony nie jest uzasadniona rachunkiem z §1.
3. **P1 i P2 dla pozostałych landingów zostają zamrożone.** Nie uruchamiamy
   testów `/focus-sounds-app`, ES-owych linków ani testów CTR na FR/PT-BR,
   dopóki kanał 1 (§3) nie ruszy. Pomiar właśnie pokazał, ile kosztuje cykl
   testowy i ile daje.
4. **Priorytet przechodzi na §3.2 i §3.3** — metadane w sklepach i mechanizm
   próśb o ocenę. To jest zgodne z regułą nadrzędną z §2: dopóki aplikacja ma
   mniej niż 100 ocen, priorytet 4 nie zabiera czasu priorytetom 1–3.

**Czego nie robimy:** nie zbieramy dalszych eksportów GSC pod te dwa testy,
nie cofamy metadanych `/nature-sounds-app`, nie przepisujemy po raz trzeci
żadnego z tych landingów.

#### P2 — 30 dni: landingi komercyjne na pozycjach 17–39

1. **Rozbuduj `/nature-sounds-app`** pod faktyczne zastosowania i warianty
   `nature sounds app` / `nature sound app`; dodaj porównanie funkcji, sekcję
   offline/mikser i linki z treści o deszczu, oceanie i lesie. Cel: z poz. 17,35
   do top 10, nie tylko poprawa CTR.

   **Test EN rozpoczęty 2026-08-03:** skrócony title z frazą na początku,
   dopasowane H1 i intro, dodane wyróżniki `mix`, `offline` i brak subskrypcji;
   usunięte poboczne frazy o nauce oraz niepoparte obietnice zdrowotne z FAQ.
   Nie zmieniać ponownie do końca 14-dniowego okna obserwacji.
2. **Zbuduj klastry linków do istniejących landingów:**
   `/sleep-sounds-app` (21,9), `/brown-noise-app` (23,07),
   `/white-noise-app` (33,17) i `/tinnitus-sounds-app` (38,74). Każdy artykuł
   informacyjny ma wskazywać jeden główny landing; landing linkuje z powrotem
   tylko do 2–4 najlepszych poradników. Unikamy siatki „wszystko do wszystkiego”.
3. **Rozstrzygnij kanibalizację kolorów szumu:** landing
   `/white-noise-brown-noise-pink-noise` ma poz. 16,69, a artykuł porównawczy
   66,08 przy 2 184 wyświetleniach. Landing przejmuje temat porównania. Artykuł
   przeprofiluj na intencję edukacyjną (jak wybrać i testować kolor) albo scal
   do landingu i zastosuj `301`; decyzję podejmij po raporcie Strona + Zapytanie.
4. **Nie rozbudowuj klastra tinnitus samą objętością.** Ma co najmniej 1 536
   wyświetleń i tylko 1 kliknięcie, a główne strony są na pozycjach 29–46.
   Najpierw popraw architekturę, dopasowanie intencji i zaufanie/YMYL; nowe
   teksty dopiero po wzroście istniejących URL-i.

#### P3 — 60–90 dni: treść i autorytet

1. Publikuj **maksymalnie 1–2 nowe klastry miesięcznie**, nie pojedyncze
   osierocone teksty. Pierwszeństwo mają zapytania komercyjne i porównawcze,
   dla których raport Strona + Zapytanie pokaże pozycję 11–30. Temat bez
   potwierdzonego popytu nie wyprzedza naprawy strony już widocznej.
2. Zdobądź linki i wzmianki do `/sound-mixer-app`, strony głównej i press kitu
   przez rankingi aplikacji (§4). To trudniejszy do skopiowania sygnał niż
   kolejny artykuł definicyjny.
3. Po 28 dniach raportuj osobno: kliknięcia non-brand, CTR landingów
   komercyjnych, liczbę fraz w top 10 i top 20 oraz kliknięcia do sklepów.
   Nie raportuj sukcesu samym wzrostem wyświetleń.

**Warunek zakończenia sprintu:** żadna zmiana nie jest uznana za sukces bez
porównania 28 dni przed/po, z uwzględnieniem urządzenia i kraju. Cel pierwszego
cyklu: utrzymać `/sound-mixer-app` w top 10, wprowadzić co najmniej dwa kolejne
landingi do top 10 i podnieść 28-dniowy CTR całej witryny powyżej **0,35 %**.

### 5.3 Zasady redakcyjne (bez zmian — działają)

- **To edukacja o dźwięku i śnie, nie porada medyczna.** Żadnych „wyleczy
  bezsenność", „leczy tinnitus", „#1 na świecie", zmyślonych badań.
- Ton: **spokojny, uczciwy, evidence-aware** (blog już się tak przedstawia).
- Gdy jest badanie — podaj co pokazało **i jego ograniczenia**. Lepiej „bywa
  pomocne u części osób" niż „udowodniono, że".
- Tematy zdrowotne (tinnitus, niemowlęta, ADHD, lęk, głośność) kończą się
  disclaimerem. To **YMYL**: błąd = kara SEO **i** realna szkoda.
- Przy każdym „śpij z dźwiękiem" wspominamy o bezpiecznym poziomie głośności.
- Jeden miękki CTA do landingu / sklepu. Sklepowe CTA obsługuje `ArticlePage`.

### 5.4 Jak opublikować artykuł w tym repo

Stan faktyczny — Next.js App Router, `next-intl`, 8 locale:

```
app/[locale]/blog/                → hub (page-en.tsx … page-pt-BR.tsx)
app/[locale]/blog/<slug>/         → page.tsx (dispatcher) + 8 × page-<locale>.tsx
app/[locale]/blog/_components/    → ArticlePage, ArticleSection, AudioPlayer
```

1. Skopiuj najbliższy tematycznie artykuł jako wzór (np.
   `app/[locale]/blog/green-noise-for-sleep/`). Docelowo utrzymuj
   `app/[locale]/blog/_template/` — prefiks `_` wyklucza folder z routingu,
   tak jak `_components`.
2. Napisz `page-en.tsx` (metadata + `articleJsonLd` + `ArticlePage` + sekcje),
   potem 7 pozostałych locale, na końcu `page.tsx` (dispatcher).
3. **Routing:** wpis w [i18n/routing.ts](i18n/routing.ts) → `pathnames`.
   Jeśli slug jest tłumaczony (pl/de/es/fr/pt-BR) — pełny obiekt w
   `pathnamesMapping` w [app/utils/seo.ts](app/utils/seo.ts). ko/ja zostają
   na slugu EN.
4. **Sitemap:** trasa w `routes` **i** data w `routeModifiedDates`
   w [app/sitemap.ts](app/sitemap.ts).
5. **Metadane redakcyjne** w [article-page.tsx](app/[locale]/blog/_components/article-page.tsx):
   wpis w `editorialDates`, slug w `articleTopicClusters`, tytuł
   w `topicTranslations.titles` dla 8 locale.
6. **Hub:** karta w `app/[locale]/blog/page-<locale>.tsx` (8 plików).
7. **Linkowanie:** `relatedArticles` w nowym artykule + link zwrotny
   z istniejącego.
8. `npm run build` (pathnames są typowane — literówka w `href` wywali build).

> **Definition of done:** artykuł istnieje w 8 locale, ma wpis w routingu,
> sitemapie, `editorialDates`, klastrze i na hubie. Brak któregokolwiek =
> strona sierota.

Schematy JSON-LD są bezpieczne — `ArticlePage` automatycznie dokłada
`BlogPosting`, gdy artykuł go nie ma ([article-page.tsx:266-280](app/[locale]/blog/_components/article-page.tsx#L266-L280)).
Cztery artykuły mają jako główny schemat `FAQPage` i są jednocześnie czterema
najgorszymi pod względem CTR — to nie jest defekt techniczny, ale wzorzec
redakcyjny (Q&A na pytania yes/no) wart porzucenia, patrz §5.1.

### 5.5 Higiena techniczna

- `app/[locale]/test/` — jeśli to pozostałość, usuń albo dodaj `noindex`.
- `/press` jest w `routes` w [app/sitemap.ts:34](app/sitemap.ts#L34), ale
  **nie ma go** w `pathnames` w `routing.ts` ani w `pathnamesMapping`
  w `seo.ts`. Do sprawdzenia, czy 8 wersji językowych faktycznie działa —
  press kit jest teraz częścią kanału 2 (§4), więc musi być sprawny.
- Przy każdym nowym artykule: wszystkie 8 wersji muszą wskazywać na siebie
  w hreflang (robi to `getLocalizedMetadata` + `sitemap.ts`, ale tylko jeśli
  trasa jest w obu miejscach).

### 5.6 Polityka językowa

- Locale: `en` (domyślne), `es`, `pl`, `de`, `fr`, `ko`, `ja`, `pt-BR`.
- Publikujemy komplet 8 wersji naraz — publikacja „tylko EN" zostawia dziury
  w hreflang.
- Slugi tłumaczymy dla `pl/de/es/fr/pt-BR`; `ko/ja` zostają na slugu EN.
- **Priorytet ręcznego przeglądu: `es`.** Hiszpański dał 645 wyświetleń
  i **7 z 31 kliknięć serwisu** (CTR 1,1 % — ~9× średnia).
  `/es/sleep-sounds-app` to druga najklikańsza strona w całym serwisie.
  Polski dał **52 wyświetlenia i 1 kliknięcie** — nie inwestuj tam czasu
  redakcyjnego tylko dlatego, że to nasz język.
- Kolejność uwagi wg danych: **en → es → fr / pt-BR → ja / ko / de → pl.**

---

## 6. KPI

**Metryki główne (App Store Connect / Play Console):**

| Metryka | Dziś | Cel 3 mies. | Cel 6 mies. |
|---|---:|---:|---:|
| Liczba ocen (iOS) | **0** | 50 | 250 |
| Pozycja w App Store na `sleep mixer` | brak w top 25 | top 10 | top 3 |
| Wyświetlenia listingu | — (zmierz baseline!) | +100 % | +300 % |
| Konwersja instalacji z listingu | — | 3 % | 5 % |
| Wzmianki w rankingach | 0 | 3 | 8 |

**Metryki pomocnicze (GSC)** — baseline 2026-04-20 → 2026-07-19:
24 902 wyświetlenia · 31 kliknięć · CTR 0,12 % · poz. ~30.

- **CTR, nie wyświetlenia.** Wyświetlenia urosły 25× i nie dały ani jednego
  kliknięcia więcej. Raport, w którym rosną wyświetlenia a stoją kliknięcia,
  jest raportem o porażce.
- **Mobile osobno** — mobile poz. 14,4 / 22 klik., desktop poz. 37,0 / 7 klik.
- **`es` osobno** — najwyższy CTR w serwisie.
- Cel 6 mies. dla strony: CTR **0,8 %**, ~120 kliknięć/mies.

> **Rytm przeglądu:** raz w miesiącu. Najpierw sklepy, potem GSC. Jeśli po
> pół roku oceny stoją na zerze, problemem nie jest marketing tylko produkt
> albo moment proszenia o ocenę — i wtedy wracamy do §3.3, a nie do pisania.

---

## Załącznik A — pula 52 tematów

Nie jest to zobowiązanie ani harmonogram. To lista przemyślanych tematów
z frazami i hakiem konwersyjnym, z której bierzemy **maks. 1 miesięcznie**
(§5.2 poz. 5), zaczynając od góry. Kolejność: najpierw to, co najbliżej
decyzji zakupowej i najdalej od zabetonowanych SERP-ów.

Filary i landingi docelowe:
**A** Sen → `/sleep-sounds-app` · **B** Kolory szumu → `/white-noise-app`,
`/brown-noise-app` · **C** Skupienie/ADHD → `/focus-sounds-app` ·
**D** Natura/relaks → `/nature-sounds-app`, `/relaxing-sounds` ·
**E** Tinnitus → `/tinnitus-sounds-app` · **F** Niemowlęta →
`/baby-sleep-sounds-app` · **G** Technika dźwięku → `/sound-mixer-app`,
`/offline-sleep-sounds-app` · **H** Wybór apki →
`/best-sleep-sounds-app-without-subscription`, `/download`

| # | Filar | Temat (EN) | Fraza główna |
|---|---|---|---|
| 1 | H | White noise machine vs a phone app | white noise machine vs app |
| 2 | G | How to layer two sounds into one soundscape | sleep sound mixer |
| 3 | H | What to look for in a sleep sound app (checklist) | best sleep sounds app |
| 4 | E | Which noise color works best for tinnitus? | best noise color for tinnitus |
| 5 | G | Why your sleep sound stops at 3am: ads, loops and auto-stop | sleep sounds that play all night |
| 6 | H | Sleep apps without a paywall: what you actually get free | sleep sounds app without subscription |
| 7 | G | Offline sleep sounds: why airplane mode matters | offline sleep sounds app |
| 8 | H | YouTube white noise vs a dedicated app | youtube white noise for sleep |
| 9 | A | How loud should white noise be at night? | white noise volume for sleeping |
| 10 | E | Sound enrichment for tinnitus at night | tinnitus at night |
| 11 | G | Seamless loops: why a bad loop wakes you up | seamless white noise loop |
| 12 | C | Sound for deep work: 90-minute focus blocks | focus sounds for work |
| 13 | B | Pink noise for deep sleep: what the research shows | pink noise for sleep |
| 14 | H | Streaming sleep playlists vs a sound app | spotify sleep sounds |
| 15 | F | Safe white noise volume and distance for babies | white noise volume for baby |
| 16 | A | Sleeping next to a snorer: masking snoring with sound | sounds to block out snoring |
| 17 | E | Masking vs habituation: two ways sound helps tinnitus | tinnitus masking vs habituation |
| 18 | G | Headphones or speaker: sleeping with sound safely | sleeping with headphones |
| 19 | C | Studying with sound — and when silence wins | background noise for studying |
| 20 | D | Ocean waves vs rain: which one calms you faster? | ocean sounds vs rain sounds |
| 21 | A | Blocking street noise in a city apartment | how to block out street noise |
| 22 | B | Fan noise vs white noise | fan sound for sleeping |
| 23 | C | Open-plan office: masking conversation you can't tune out | office noise masking |
| 24 | G | Playing sound all night: battery, background audio, DND | playing sound all night phone |
| 25 | A | The 20-minute wind-down that helps you fall asleep faster | how to fall asleep faster |
| 26 | D | Thunderstorm sounds: why distant rumble calms us | thunderstorm sounds for sleeping |
| 27 | B | Grey noise explained | grey noise |
| 28 | F | Weaning your baby off white noise | how to wean baby off white noise |
| 29 | C | Coffee shop ambience: does it really help you work? | coffee shop sounds for studying |
| 30 | A | Sleep timer or all night: which is better? | should white noise play all night |
| 31 | D | Forest sounds and the calm of sound bathing | forest sounds for relaxation |
| 32 | B | Is white noise safe to use every night? | is white noise safe |
| 33 | A | Shift work: how to sleep during the day | how to sleep during the day |
| 34 | E | Misophonia and sound sensitivity: a gentle primer | misophonia sounds |
| 35 | D | Fireplace and crackling sounds for winter calm | fireplace sounds relaxing |
| 36 | C | Sound and the Pomodoro method | pomodoro background sound |
| 37 | A | Sleep sounds for travel, hotels and flights | sleep sounds for travel |
| 38 | B | Blue and violet noise explained | blue noise violet noise |
| 39 | F | Toddlers who fight bedtime: sound as a cue | toddler sleep sounds |
| 40 | D | Sounds for meditation and breathwork | meditation background sounds |
| 41 | A | Bedtime anxiety: calming a racing mind with sound | sounds for sleep anxiety |
| 42 | C | Sounds for reading, writing and coding | best background noise for coding |
| 43 | B | The noise color cheat sheet | noise colors chart |
| 44 | F | White noise for naps vs night sleep (babies) | white noise for baby naps |
| 45 | D | Water sounds: river, stream and waterfall | water sounds for sleep |
| 46 | B | Brown noise for anxiety and overstimulation | brown noise for anxiety |
| 47 | A | Do sleep sounds change your dreams? | does white noise affect dreams |
| 48 | D | Birdsong and the calm of early morning | bird sounds relaxing |
| 49 | C | Sensory overload and quiet time | sensory overload sounds |
| 50 | A | Power naps: 20 minutes of sound that actually works | power nap sounds |
| 51 | D | Calming sounds for pets home alone | sounds to calm dogs |
| 52 | G | Gentle wake-ups: alarms, fades and morning sound | gentle alarm sounds |

---

## Załącznik B — co już jest opublikowane

15 artykułów (stan `editorialDates`), pogrupowanych wg `articleTopicClusters`.
**Sprawdź tę listę, zanim napiszesz cokolwiek nowego** — jedna intencja
wyszukiwania = jedna strona.

| Klaster | Artykuły |
|---|---|
| Sleep | `best-sounds-for-sleep`, `white-noise-for-sleep`, `how-to-build-a-bedtime-routine`, `white-noise-for-babies` |
| Noise colors | `rain-sounds-vs-white-noise`, `brown-noise-vs-white-noise-vs-pink-noise`, `green-noise-for-sleep`, `best-free-white-noise-app` |
| Focus / ADHD | `best-sounds-for-studying`, `best-color-noise-for-adhd`, `binaural-beats-for-sleep-and-focus` |
| Nature | `benefits-of-nature-sounds-for-relaxation`, `rain-sounds-for-better-sleep-and-focus`, `guided-breathing-techniques` |
| Tinnitus | `sounds-for-tinnitus-relief` |

Klastry F (niemowlęta), G (technika) i H (wybór apki) nie istnieją w kodzie.
Nowy klaster zakładaj dopiero przy **trzecim** artykule w temacie — każdy
kosztuje nazwę i tłumaczenia tytułów × 8 locale.
