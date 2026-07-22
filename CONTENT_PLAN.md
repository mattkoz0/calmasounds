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

### 5.2 Co robimy — utrzymanie i naprawy

Kolejka, po jednej pozycji na miesiąc, w tej kolejności:

| # | Zadanie | Uzasadnienie |
|---|---|---|
| 1 | **Rozstrzygnij kanibalizację kolorów szumu** — landing `/white-noise-brown-noise-pink-noise` stoi na poz. **14,7**, artykuł `/blog/brown-noise-vs-white-noise-vs-pink-noise` na **67,2** przy 1 953 wyświetleniach. Google wybrał landing. Przeprofiluj artykuł albo scal i `301` | Największa strata przy najmniejszym koszcie |
| 2 | **Dodaj wyraźne CTA do sklepu w czterech najczęściej wyświetlanych artykułach** | 15 tys. wyświetleń/kwartał przechodzi przez strony, które nic nie sprzedają |
| 3 | **Audyt `title`/`description` pod mobilny SERP** (≤60 zn., fraza z przodu, obietnica zamiast opisu) | Jednorazowo, 15 artykułów |
| 4 | **Rozbuduj `/blog/best-sounds-for-sleep`** (2 883 wyśw., poz. 41,8) | Realny popyt, płytka strona |
| 5 | Nowe artykuły z Załącznika A — **maks. 1/miesiąc**, tylko long-tail i porównania | Podtrzymanie, nie ekspansja |

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
