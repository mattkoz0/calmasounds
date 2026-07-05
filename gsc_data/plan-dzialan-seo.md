# Plan Działań SEO — CalmaSound.com
**Data analizy:** 5 lipca 2026  
**Okres danych GSC:** Ostatnie 3 miesiące (kwiecień–lipiec 2026)  
**Cel:** Maksymalizacja wyświetleń, pozycji i klikalności (CTR)

---

## 1. PODSUMOWANIE DANYCH

### Ogólne statystyki
| Metryka | Wartość |
|---------|---------|
| **Łączne kliknięcia** | 22 |
| **Łączne wyświetlenia** | 18 978 |
| **Średni CTR** | 0,12% |
| **Średnia pozycja** | ~30 |

### Trend wyświetleń
- **Kwiecień 2026:** ~10-30 wyświetleń/dzień
- **Maj 2026:** Skok do 100-280 wyświetleń/dzień (efekt indeksowania nowych artykułów)
- **16 czerwca 2026:** SPIKE 4 261 wyświetleń (prawdopodobnie viral query "is rain considered white noise")
- **Lipiec 2026:** Stabilizacja na ~150-230 wyświetleń/dzień

### Kluczowy problem
**CTR = 0,12%** — mamy tysiące wyświetleń, ale prawie zero kliknięć. Użytkownicy widzą nasze wyniki w Google, ale ich NIE KLIKAJĄ. Problem leży w:
1. Pozycji (większość zapytań ma pozycję 30-80, czyli strona 3-8 Google)
2. Tytułach i opisach (meta description), które nie przyciągają uwagi
3. Braku Rich Snippets (FAQ Schema nie jest jeszcze aktywne dla wielu stron)

---

## 2. TOP ZAPYTANIA — ANALIZA I PRIORYTETY

### PRIORYTET 1: "is rain considered white noise" (KLASTER)
**STATUS:** Nasz #1 generator ruchu. Artykuł `rain-sounds-vs-white-noise` został przebudowany z FAQ Schema 28 czerwca 2026.

| Zapytanie | Wyświetlenia | Pozycja | CTR |
|-----------|-------------|---------|-----|
| is rain considered white noise | 4 846 | 8.91 | 0% |
| is rain white noise | 512 | 10.65 | 0% |
| is rain sounds considered white noise | 273 | 11.75 | 0% |
| can rain be considered white noise | 191 | 10.83 | 0% |
| is rain sound considered white noise | 123 | 9.86 | 0% |
| is the sound of rain considered white noise | 109 | 11.58 | 0% |
| **SUMA KLASTRA** | **~6 500** | **~10** | **0%** |

**AKCJA:** Artykuł jest już na pozycji ~9-11 (pierwsza strona Google!) ale nadal ma 0% CTR. Problem:
- [ ] **Meta title i description muszą być zmienione na bardziej klikalne.** Obecny tytuł jest zbyt techniczny. Zmień na format prowokujący kliknięcie np.: `"Is Rain Considered White Noise? The Answer Will Surprise You"` lub `"Is Rain White Noise? Here's What Science Actually Says"`.
- [ ] **Zweryfikuj, czy FAQ Schema się już wyświetla w Google.** Wejdź w Google i wpisz "is rain considered white noise" — sprawdź, czy pod naszym linkiem widać rozwijane pytania i odpowiedzi. Jeśli nie, problem jest techniczny i wymaga debugowania.
- [ ] **Dodaj do artykułu sekcję z tabelą porównawczą** (Rain vs White Noise vs Pink Noise) — tabele generują featured snippety.

**Plik:** `app/[locale]/blog/rain-sounds-vs-white-noise/page-en.tsx`

---

### PRIORYTET 2: "best sounds for sleep" (KLASTER)
**STATUS:** Artykuł przebudowany 28 czerwca 2026 z FAQ Schema.

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| best sleep sound | 112 | 44.97 |
| good sounds to sleep to | 98 | 37.64 |
| best sound to sleep | 91 | 45.63 |
| noises to help you sleep | 90 | 40.13 |
| best noises for sleep | 89 | 46.45 |
| sounds to sleep better | 88 | 36.33 |
| what sounds make you sleep | 57 | 43.44 |
| what sound makes you sleep | 56 | 38.62 |
| sounds that help you sleep | 55 | 33.6 |
| best sounds for sleep | 44 | 38.61 |
| **SUMA KLASTRA** | **~2 700** | **~40** |

**AKCJA:** Pozycja ~40 to strona 4 Google — zbyt daleko na kliknięcia. Trzeba agresywnie poprawić pozycję:
- [ ] **Wzbogać artykuł o tabelę porównawczą "Top 5 Sleep Sounds Ranked"** — Google faworyzuje tabele jako featured snippets.
- [ ] **Dodaj sekcję "Expert Tip"** z konkretnymi radami (np. "Set volume to 40-50dB for optimal sleep induction"). Google premiuje unique content.
- [ ] **Wzmocnij linkowanie wewnętrzne.** Upewnij się, że artykuł jest linkowany z:
  - Strony głównej (hero sekcja lub sekcja "Popular Articles")
  - Artykułu `rain-sounds-vs-white-noise` (cross-link)
  - Artykułu `brown-noise-vs-white-noise` (cross-link)
  - Artykułu `white-noise-for-sleep` (cross-link)
- [ ] **Rozważ dodanie infografiki (obrazka)** — strony z obrazkami mają wyższy engagement, co Google premiuje.

**Plik:** `app/[locale]/blog/best-sounds-for-sleep/page-en.tsx`

---

### PRIORYTET 3: "brown noise vs white noise" (KLASTER)
**STATUS:** Artykuł przebudowany 28 czerwca 2026 z FAQ Schema.

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| pink noise vs white noise | 116 | 70.73 |
| brown noise vs white noise | 108 | 73.3 |
| white noise vs pink noise | 84 | 70.01 |
| white noise vs brown noise | 57 | 79.4 |
| brown noise vs pink noise | 20 | 74.35 |
| white noise vs pink noise vs brown noise | 19 | 81.11 |
| **SUMA KLASTRA** | **~1 600** | **~75** |

**AKCJA:** Pozycja ~75 to strona 7-8 Google — bardzo daleko. Przebudowa z 28 czerwca powinna pomóc, ale konieczne jest dodatkowe wsparcie:
- [ ] **Priorytet: Zmniejsz pozycję z ~75 do <20.** Wymaga to agresywnego linkowania wewnętrznego + rozbudowy treści.
- [ ] **Dodaj do artykułu infografikę/tabelę** wizualnie porównującą widmo częstotliwości każdego szumu (White=flat, Pink=slope, Brown=steep slope). Google uwielbia takie tabele.
- [ ] **Dodaj sekcję "Which noise color should you use? Take the quiz"** — interaktywne elementy zwiększają czas spędzony na stronie (dwell time), co bezpośrednio wpływa na ranking.
- [ ] **Upewnij się, że artykuł celuje w kluczowe warianty zapytań**, w tym: "brown noise vs white noise adhd" (12 wyświetleń, poz. 66).

**Plik:** `app/[locale]/blog/brown-noise-vs-white-noise-vs-pink-noise/page-en.tsx`

---

### PRIORYTET 4: "white noise app" (KLASTER BRANDOWY)
**STATUS:** Strona produktowa istnieje (`/white-noise-app`), ale pozycja ~32 to za daleko.

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| white noise app | 307 | 32.91 |
| whitenoise app | 92 | 35.61 |
| white noise machine app | 70 | 46.46 |
| best free white noise app | 50 | 25.28 |
| best white noise app | 50 | 35.16 |
| free white noise app | 28 | 27.32 |
| white noise apps | 24 | 29.04 |
| best white noise apps | 22 | 22.59 |
| **SUMA KLASTRA** | **~700** | **~32** |

**AKCJA:**
- [ ] **Przebuduj stronę `/white-noise-app` pod kątem SEO.** Dodaj:
  - Schema `SoftwareApplication` z ocenami (aggregateRating) — to generuje złote gwiazdki w Google
  - Sekcję "Why Calma is the Best Free White Noise App in 2026"
  - Tabelę porównawczą z konkurencją (Calma vs Noisli vs myNoise)
  - FAQ Schema z pytaniami typu "What is the best free white noise app?"
- [ ] **Zoptymalizuj meta title** na: `Best Free White Noise App (2026) — No Ads, No Subscription | Calma`
- [ ] **Zoptymalizuj meta description** na: `Looking for a free white noise app without ads? Calma offers 50+ sounds, custom mixing, and offline mode — completely free. Download now.`

**Plik:** `app/[locale]/white-noise-app/page-en.tsx` (i inne lokalizacje)

---

### PRIORYTET 5: "tinnitus app" (KLASTER MEDYCZNY)
**STATUS:** Strona produktowa istnieje (`/tinnitus-sounds-app`), 851 wyświetleń, 1 kliknięcie. Ogromny potencjał!

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| tinnitus white noise app | 64 | 39.28 |
| tinnitus sound generator app | 54 | 47.09 |
| sound masking tinnitus app | 53 | 47.34 |
| color noise tinnitus app | 50 | 29.64 |
| tinnitus masking app | 42 | 44.43 |
| tinnitus sleep app | 39 | 42.46 |
| white noise app for tinnitus | 27 | 37.81 |
| tinnitus sound app | 25 | 31.96 |
| free white noise app for tinnitus | 25 | 35.56 |
| best white noise app for tinnitus | 21 | 40 |
| best app for tinnitus relief | 21 | 56.33 |
| **SUMA KLASTRA** | **~850** | **~40** |

**AKCJA:**
- [ ] **Przebuduj stronę `/tinnitus-sounds-app` z FAQ Schema.** Dodaj pytania:
  - "What is the best free app for tinnitus?"
  - "Does white noise help tinnitus?"
  - "What frequency helps tinnitus?"
- [ ] **Przebuduj artykuł `/blog/sounds-for-tinnitus-relief`** (95 wyświetleń, poz. 28) — rozszerz treść, dodaj FAQ Schema.
- [ ] **Zoptymalizuj meta title strony produktowej** na: `Best Free Tinnitus Sound Therapy App (2026) | Calma`
- [ ] **Dodaj sekcję z konfigurowalnymi częstotliwościami.** Użytkownicy szukają "tinnitus frequency test app" (12 wyświetleń) — jeśli oferujesz taką funkcję w aplikacji, wyraźnie o tym napisz.
- [ ] **Rozważ dodanie Schema MedicalWebPage** (ostrożnie, ale Google to respektuje dla stron o zdrowiu).

**Pliki:**
- `app/[locale]/tinnitus-sounds-app/` (strona produktowa)
- `app/[locale]/blog/sounds-for-tinnitus-relief/` (artykuł)

---

### PRIORYTET 6: "white noise for sleep" (KLASTER)
**STATUS:** Artykuł ma aż 1009 wyświetleń, 1 kliknięcie, pozycja 37.

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| why does white noise help you sleep | 70 | 70.59 |
| white noise sound for sleeping | 47 | 16.47 |
| white noise to help sleep | 21 | 26.24 |
| best white noise for sleep | 20 | 36.3 |
| does white noise help you sleep | 20 | 66.95 |
| white noise to sleep to | 19 | 23.79 |
| **SUMA KLASTRA** | **~1 000** | **~37** |

**AKCJA:**
- [ ] **Przebuduj artykuł `/blog/white-noise-for-sleep`** analogicznie do poprzednich filarów:
  - Dodaj FAQ Schema z pytaniami "Why does white noise help you sleep?", "Is white noise safe to sleep with all night?", "What volume should white noise be for sleep?"
  - Skróć wstęp, dodaj szybkie odpowiedzi w formacie Q&A
  - Dodaj tabelę "White Noise vs Pink Noise vs Brown Noise for Sleep"
  - Dodaj cross-linki do artykułów `rain-sounds-vs-white-noise` i `best-sounds-for-sleep`

**Plik:** `app/[locale]/blog/white-noise-for-sleep/page-en.tsx` (i 4 inne lokale)

---

### PRIORYTET 7: "sounds for studying" (KLASTER)
**STATUS:** 410 wyświetleń, 2 kliknięcia, pozycja 24.87 — najlepszy CTR spośród artykułów!

| Zapytanie | Wyświetlenia | Pozycja |
|-----------|-------------|---------|
| study sounds | 38 | 15.42 |
| sounds for studying | 15 | 15.73 |
| best noise for studying | 33 | 29.76 |
| best sounds for studying | 8 | 21.12 |
| which sound is best for studying | 9 | 19 |
| **SUMA KLASTRA** | **~410** | **~20** |

**AKCJA:**
- [ ] **Wzmocnij artykuł `/blog/best-sounds-for-studying`.** Jest już na pozycji ~20, potrzebuje jedynie:
  - FAQ Schema z "What is the best sound for studying?", "Does brown noise help studying?"
  - Sekcji porównawczej "Best Noises for Studying: Brown vs White vs Lo-fi"
  - Cross-linków z artykułu o brown noise i white noise

**Plik:** `app/[locale]/blog/best-sounds-for-studying/page-en.tsx`

---

### PRIORYTET 8: "calma app" (BRAND)
**STATUS:** 14 wyświetleń, 0 kliknięć, pozycja 7.71 — blisko TOP 1, ale brak kliknięć.

**AKCJA:**
- [x] **SoftwareApplication Schema z `sameAs` dodane 28 czerwca 2026** — czekamy na efekty.
- [ ] **Upewnij się, że strona główna ma dobrze sformatowany Knowledge Panel.** Sprawdź w Google po wpisaniu "calma app" czy pojawia się panel po prawej stronie z informacjami o aplikacji. Jeśli nie, wzmocnij `sameAs` o dodatkowe linki (YouTube, TikTok, Instagram, Facebook).

**Plik:** `app/[locale]/page-*.tsx` (strony główne)

---

## 3. PROBLEMY TECHNICZNE GSC

| Problem | Liczba stron | Status | Akcja |
|---------|-------------|--------|-------|
| Strona zawiera przekierowanie | 11 | Niepowodzenie | ✅ Zbadane 28.06 — pożądane zachowanie (redirect do sklepów + kanonikalizacja domeny). **IGNORUJ.** |
| Duplikat, Google wybrał inną kanoniczną | 2 | Nie rozpoczęto | ⚠️ **Sprawdź które 2 strony to dotyczą. Prawdopodobnie wersje bez/z www lub trailing slash.** |
| Duplikat, użytkownik nie oznaczył kanonicznej | 1 | Rozpoczęto | ⚠️ **Sprawdź który URL. Prawdopodobnie brakuje tagu `<link rel="canonical">`** |
| Strona wykryta – niezindeksowana | 7 | Rozpoczęto | ⚠️ **Wejdź w GSC → Indeksowanie → kliknij "Strona wykryta" → skopiuj 7 URL-i i wklej je agentowi, żeby zbadał problem.** |
| Zeskanowana, nie zindeksowana | 13 | Powodzenie ✅ | ✅ Status "Powodzenie" — walidacja przeszła pomyślnie. |

### Akcje do podjęcia w GSC:
- [ ] Sprawdź "Duplikat — Google wybrał inną kanoniczną" — wklej 2 adresy URL tutaj do analizy
- [ ] Sprawdź "Duplikat — użytkownik nie oznaczył kanonicznej" — wklej adres URL
- [ ] Sprawdź "Strona wykryta — niezindeksowana" — wklej 7 adresów URL
- [ ] Poproś o reindeksację dla stron, które zostały zmodyfikowane 28 czerwca

---

## 4. ANALIZA GEOGRAFICZNA

### Największe rynki (wg wyświetleń)
| Kraj | Wyświetlenia | Kliknięcia | CTR |
|------|-------------|-----------|-----|
| 🇺🇸 USA | 12 465 | 1 | 0.01% |
| 🇬🇧 UK | 2 265 | 1 | 0.04% |
| 🇨🇦 Kanada | 938 | 0 | 0% |
| 🇪🇸 Hiszpania | 290 | 4 | 1.38% |
| 🇫🇷 Francja | 239 | 1 | 0.42% |
| 🇩🇪 Niemcy | 227 | 2 | 0.88% |
| 🇦🇺 Australia | 226 | 0 | 0% |
| 🇧🇷 Brazylia | 175 | 2 | 1.14% |

### Wnioski:
- **USA i UK** generują 78% całego ruchu, ale mają niemal zerowy CTR → **priorytet optymalizacji anglojęzycznych tytułów i meta description**
- **Hiszpania i Brazylia** mają najwyższy CTR (1-3%) → hiszpańskie i portugalskie treści wyraźnie lepiej konwertują, warto w nie inwestować
- **Kanada i Australia** (angielskojęzyczne) — duży ruch bez kliknięć, poprawy meta title automatycznie wpłyną na te kraje

---

## 5. ANALIZA URZĄDZEŃ

| Urządzenie | Wyświetlenia | Kliknięcia | CTR |
|------------|-------------|-----------|-----|
| 📱 Mobile | 10 297 | 15 | 0.15% |
| 💻 Desktop | 8 635 | 6 | 0.07% |
| 📟 Tablet | 46 | 1 | 2.17% |

**Wniosek:** Mobile generuje 54% ruchu ale desktop 46% — konieczna optymalizacja pod oba urządzenia. Desktop ma 2x gorszy CTR niż mobile → wynik wygląda gorzej na desktopie.

---

## 6. PLAN WYKONANIA — KOLEJNOŚĆ DZIAŁAŃ

### Faza 1: Quick Wins (natychmiastowy efekt)
**Cel:** Poprawić CTR na stronach, które już są na pierwszej stronie Google.

1. **✅ DONE (5.07.2026) — Przepisz meta title i description dla `rain-sounds-vs-white-noise`**
   - Stary tytuł: "Is Rain Considered White Noise? (The Scientific Answer)"
   - Nowy tytuł: **"Is Rain Considered White Noise? Here's What Science Says"**
   - Nowy description: **"No — rain is NOT white noise. The surprising truth: rain is actually pink noise, and it may help you sleep better. Listen to audio samples and see the difference."**
   - Zmieniono we wszystkich 5 wersjach językowych (EN, DE, ES, FR, PT-BR)
   - Plik: `app/[locale]/blog/rain-sounds-vs-white-noise/page-en.tsx` — pole `metadata.title` i `metadata.description`

2. **✅ DONE (5.07.2026) — Dodaj `SameAs` do Schema na stronach głównych dla YouTube, TikTok, Instagram, Facebook**
   - Wzmocniono Knowledge Panel we wszystkich 8 wersjach językowych
   - Plik: Wszystkie `app/[locale]/page-*.tsx` — obiekt `softwareAppJsonLd.sameAs`
   - Dodano do istniejącej tablicy `sameAs`:
     ```
     "https://www.youtube.com/@CalmaApp",
     "https://www.tiktok.com/@.calma.app",
     "https://www.instagram.com/calma.app.official",
     "https://www.facebook.com/profile.php?id=61580760185966"
     ```

### Faza 2: Przebudowa artykułów (1-2 tygodnie)
**Cel:** Przesunąć artykuły z pozycji ~40 na pozycję <15.

3. **✅ DONE (5.07.2026) — Przebuduj `/blog/white-noise-for-sleep` (1 009 wyświetleń, poz. 37)**
   - Wdrożono potężne FAQ Schema na bazie zapytania o najwyższym potencjale ("why does white noise help you sleep")
   - Dodano tabelę porównawczą (White vs Pink vs Brown Noise) optymalizując pod kątem Featured Snippets (pozycja 0)
   - Przepisano meta tagi we wszystkich 5 językach i stworzono bogatszą strukturę treści (H2/H3)
   - Pliki: `app/[locale]/blog/white-noise-for-sleep/page-{en,de,es,fr,pt-BR}.tsx`

4. **✅ DONE (5.07.2026) — Przebuduj stronę produktową `/tinnitus-sounds-app` (851 wyświetleń, poz. 37)**
   - Stworzono dedykowany i połączony Graf Schema (SoftwareApplication dla oceny 4.8 + Breadcrumbs + FAQPage).
   - Przepisano meta title i opis w sposób agresywny, pod kątem wskaźnika klikalności (CTR) i pytań użytkowników.
   - Wdrożono we wszystkich 8 wersjach językowych za pomocą zautomatyzowanego skryptu (EN, DE, ES, FR, PL, PT-BR, JA, KO).
   - Pliki: `app/[locale]/tinnitus-sounds-app/page-{locale}.tsx`

5. **Przebuduj `/blog/sounds-for-tinnitus-relief`** (95 wyświetleń, poz. 28)
   - Dodaj FAQ Schema
   - Rozszerz treść o sekcję o częstotliwościach
   - Pliki: `app/[locale]/blog/sounds-for-tinnitus-relief/page-*.tsx`

### Faza 3: Przebudowa stron produktowych (2-3 tygodnie)
**Cel:** Zdominować zapytania o "white noise app", "brown noise app", "nature sounds app".

6. **Przebuduj `/white-noise-app`** (1 387 wyświetleń, poz. 31)
   - Pełna optymalizacja SEO: nowy tytuł, description, FAQ Schema, tabela porównawcza z konkurencją
   - Dodaj `aggregateRating` do Schema
   - Pliki: `app/[locale]/white-noise-app/` (wszystkie lokalizacje)

7. **Przebuduj `/brown-noise-app`** (246 wyświetleń, poz. 20)
   - FAQ Schema z "What is the best brown noise app?"
   - Pliki: `app/[locale]/brown-noise-app/` (wszystkie lokalizacje)

8. **Wzmocnij `/blog/best-sounds-for-studying`** (410 wyświetleń, poz. 24 — już blisko TOP 20!)
   - Dodaj FAQ Schema
   - Minimalna inwestycja, duży potencjalny zysk
   - Pliki: `app/[locale]/blog/best-sounds-for-studying/page-*.tsx`

### Faza 4: Ekspansja content (3-4 tygodnie)
**Cel:** Zaatakować nowe klastry zapytań, które jeszcze nie mają dedykowanych stron.

9. **Stwórz nowy artykuł: "Best White Noise for ADHD Sleep"**
   - Klaster "ADHD + noise" generuje znaczący ruch:
     - "white noise adhd" (8 wyświetleń, poz. 25)
     - "best noise for adhd sleep" (5 wyświetleń, poz. 33)
     - "adhd sleep noises" (9 wyświetleń, poz. 20)
     - "brown noise and adhd" (5 wyświetleń, poz. 44)
   - Nowy slug: `/blog/best-noise-for-adhd`
   - FAQ Schema z "Does brown noise help ADHD?", "What color noise is best for ADHD sleep?"

10. **Rozważ nowy artykuł: "White Noise for Babies — Is It Safe?"**
    - Artykuł już istnieje (`/blog/white-noise-for-babies`) ale ma słabe wyniki
    - Przebuduj z FAQ Schema
    - Dodaj sekcję o bezpieczeństwie (rodzice tego szukają)

---

## 7. TECHNICZNE CHECKLIST DO NATYCHMIASTOWEGO WDROŻENIA

- [x] Dodaj do sameAs linki do YouTube, TikTok, Instagram, Facebook (skrypt Node.js po wszystkich `page-*.tsx`) — ✅ 5.07.2026
- [x] Przepisz meta title dla `rain-sounds-vs-white-noise` (wszystkie 5 wersji językowych) — ✅ 5.07.2026
- [x] Przepisz meta title dla `best-sounds-for-sleep` (wszystkie 5 wersji językowych) — ✅ już zrobione 28.06
- [x] Przepisz meta title dla `brown-noise-vs-white-noise-vs-pink-noise` (wszystkie 5 wersji językowych) — ✅ już zrobione 28.06
- [x] Sprawdź w Google, czy FAQ Rich Snippets wyświetlają się dla artykułów przebudowanych 28.06 (trzeba poczekać na indeksację, ale zrobimy test Live)
- [x] Przebuduj `white-noise-for-sleep` z FAQ Schema (5 wersji językowych) — ✅ 5.07.2026
- [x] Przebuduj `tinnitus-sounds-app` z połączonym Grafem Schema (SoftwareApplication+FAQ) i Meta (8 wersji językowych) — ✅ 5.07.2026
- [ ] Przebuduj `sounds-for-tinnitus-relief` z FAQ Schema (8 wersji językowych)
- [ ] Przebuduj `best-sounds-for-studying` z FAQ Schema (5 wersji językowych)
- [ ] Stwórz nowy artykuł `best-noise-for-adhd` (5 wersji językowych)
- [ ] Po każdym wdrożeniu: `npm run build` → `git push` → GSC "Poproś o zindeksowanie"

---

## 8. KPI DO ŚLEDZENIA (cel na 3 miesiące)

| Metryka | Obecna wartość | Cel na październik 2026 |
|---------|---------------|------------------------|
| Wyświetlenia/dzień | ~200 | ~500 |
| Kliknięcia/dzień | ~0.2 | ~5 |
| Średni CTR | 0.12% | >1% |
| Średnia pozycja | ~30 | <20 |
| Strony w TOP 10 | ~3 | ~10 |
| FAQ Rich Snippets aktywne | 0 | 5+ |

---

> **UWAGA DLA GEMINI PRO:** Przy wykonywaniu powyższych zadań, zawsze:
> 1. Zachowuj istniejącą strukturę komponentów (`ArticlePage`, `ArticleSection`, `AudioPlayer`).
> 2. Po każdej modyfikacji uruchamiaj `npm run build` i weryfikuj brak błędów.
> 3. Wykonuj zmiany we wszystkich wersjach językowych jednocześnie (EN, DE, ES, FR, PT-BR).
> 4. Commituj z opisowym komunikatem git, np.: `feat(seo): add FAQ Schema to white-noise-for-sleep across 5 locales`.
> 5. Nie usuwaj istniejących komponentów multimedialnych (AudioPlayer, YouTubeEmbed).
> 6. Schema JSON-LD powinien być typu `FAQPage` z `mainEntity` zawierającym `Question` + `AcceptedAnswer`.
> 7. W meta description zawsze stosuj format "pytanie + obietnica odpowiedzi + wezwanie do działania".
