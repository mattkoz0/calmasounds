# Calma — przegląd SEO i poprawki, 29.10.2026

Kontynuacja [wdrożenia z 07.10](CALMA_SEO_wdrozenie_2026-10-07.md). Dane źródłowe: [gsc_data/2026-10-29](gsc_data/2026-10-29/) (eksport GSC, okres „ostatnie 3 miesiące”, ok. 29.07–28.10). Następny przegląd: **koniec listopada 2026**.

## Wykonane działania

| Co | Gdzie | Stan |
|---|---|---|
| Przekierowanie `calmasounds.com` → `www` zmienione z 307 na **308** | Vercel → Domains | Zweryfikowane na żywo |
| DNS zaktualizowany do nowych wartości Vercela: A `216.198.79.1`, CNAME `www` → `f9f74083f8edf542.vercel-dns-017.com` | Namecheap | Zweryfikowane (8.8.8.8, 1.1.1.1, HTTPS na nowych IP) |
| Angielski akapit pod H1 na stronach głównych **DE i FR** przetłumaczony | `app/[locale]/page-de.tsx`, `page-fr.tsx` | Commit `644e82b` |
| Widoczne `\"` zamiast cudzysłowu w 21 plikach artykułów (EN, PL, DE, FR, ES, PT-BR, KO) zamienione na `&quot;` | `app/[locale]/blog/*/page-*.tsx` | Commit `644e82b` |
| Nieczytelne hiszpańskie tłumaczenia przepisane z angielskich oryginałów: **green-noise-for-sleep**, **guided-breathing-techniques**, **how-to-build-a-bedtime-routine**; poprawki punktowe w **binaural-beats-for-sleep-and-focus** | `app/[locale]/blog/*/page-es.tsx` | Commit `13cebbb` |
| Eksport GSC z 29.10 dodany do repo | `gsc_data/2026-10-29/` | Commit `e5bbec5` |

Wszystko wypchnięte na `main` 29.10. Przed publikacją przeszły: lint, `npm run build` i `npm run seo:audit` (258 URL-i, 0 problemów). Ten sam audyt na produkcji przed zmianami też dał 0 problemów.

**Do zrobienia ręcznie po publikacji** (GSC → Sprawdzanie URL-a → „Poproś o zindeksowanie”): `/de`, `/fr`, `/pt-BR`, `/es/blog/green-noise-for-sleep`, `/es/blog/guided-breathing-techniques`.

## Stan wyjściowy (baseline do porównania)

### Ruch z wyszukiwarki (3 miesiące do 28.10)

| Urządzenie | Kliknięcia | Wyświetlenia | CTR | Śr. pozycja |
|---|---:|---:|---:|---:|
| Mobile | 114 | 8 831 | 1,29% | 15,2 |
| Desktop | 34 | 12 053 | 0,28% | 37,1 |
| Tablet | 7 | 178 | 3,93% | 10,1 |

Trend tygodniowy: kliknięcia wzrosły z ok. 5/tydz. (sierpień) do 13–27/tydz. (październik), średnia pozycja poprawiła się z ok. 35 do ok. 21. Wzrost zaczął się przed wdrożeniem z 07.10, więc nie przypisujemy go jednej zmianie.

| Typ strony | Stron z wyświetleniami | Kliknięcia | Wyświetlenia |
|---|---:|---:|---:|
| Strony produktowe | 127 | 139 | 11 114 |
| Blog | 80 | 16 | 10 285 |

### Indeksowanie

| | Sierpień | 23.10 |
|---|---:|---:|
| Zindeksowane | 253 | **175** |
| Niezindeksowane | 95 | **178** |
| „Zeskanowana, ale niezindeksowana” | 42 (09.09) | **99** |

Spadek zaczął się ok. 18–25.09. Między 09.09 a 07.10 w kodzie strony nic się nie zmieniało.

Z 99 „zeskanowanych, niezindeksowanych” stron 76 jest w sitemap. To prawie same tłumaczenia: 57 artykułów i 18 stron produktowych (najwięcej pt-BR, ja, pl, es), a do tego strony główne `/de` i `/pt-BR`. Pozostałe 23 to pliki `.m4a`, favicon i stare adresy, czyli szum.

Pozostałe przyczyny zostały sprawdzone i nie wymagają działań:
- **Przekierowania (36):** domena bez www, http i stare slugi artykułów.
- **noindex (19):** zamierzony na `/download`, `/bio`, `/privacy-policy`, `/terms-of-service`, `/support` oraz plik `.m4a`.
- **404 (2):** `/pl/rain-sounds-app` i `/ja/rain-sounds-app`. Te wersje nie istnieją i nic do nich nie linkuje.
- **Duplikat z innym canonical (2):** `/ko/tinnitus-sounds-app` i `/ko/nature-sounds-app`. Ostatnio skanowane w maju, więc dane są nieaktualne. Można zlecić indeksację.

### Wybrane strony i frazy

| Strona / fraza | Wyświetlenia | Kliknięcia | Pozycja |
|---|---:|---:|---:|
| `/white-noise-app` | 2 453 | 4 | 34,0 |
| `/blog/rain-sounds-vs-white-noise` | 1 840 | 1 | 8,6 |
| `/blog/brown-noise-vs-white-noise-vs-pink-noise` | 2 331 | 0 | 45,9 |
| `/rain-sounds-app` (nowa) | 18 | 1 | 6,6 |
| `/pink-noise-app` (nowa) | brak | brak | — |
| fraza „white noise app” | 691 | 0 | 32,9 |
| fraza „brown noise app” | 192 | 0 | 27,9 |
| fraza „free sleep sounds app” | 140 | 0 | 24,1 |
| fraza „is rain considered white noise” (+ warianty) | 305 (+ ok. 400) | 0 | ok. 7,5 |

## Wnioski

1. **Technicznie strona jest w porządku.** Canonical, sitemap, hreflang, robots i przekierowania działają, a audyt nie zgłasza problemów.
2. **Główny problem to spadek liczby zindeksowanych stron**, głównie tłumaczeń. Google nie podaje powodu. Prawdopodobne czynniki:
   - słaba jakość części tłumaczeń (4 hiszpańskie artykuły były nieczytelne lub bardzo niezgrabne),
   - angielski tekst na stronach głównych DE i FR,
   - duża liczba podobnych stron (ok. 105 tłumaczeń artykułów) przy niewielkim popycie i małym autorytecie domeny.

   Wyrywkowo sprawdzone tłumaczenia PL, DE, FR i PT-BR są poprawne. Poza DE i FR nie ma angielskich resztek.
3. **Blog daje wyświetlenia, ale prawie nie daje kliknięć.** Dla „is rain white noise” artykuł odpowiada już w pierwszym zdaniu, więc Google najpewniej pokazuje odpowiedź bezpośrednio w wynikach. Zmiana tytułu niewiele tu da.
4. **`/white-noise-app` to największa szansa.** Fraza ma największy popyt, ale strona jest na pozycji 33–34, więc drobne poprawki niewiele zmienią. Potrzebne jest porównanie z konkurencją z pierwszej strony wyników.
5. **RankyFy nie jest już dostępny.** Pozycje fraz bierzemy z eksportów GSC. Darmowe uzupełnienia:
   - Bing Webmaster Tools (słowa kluczowe, raport cytowań w AI),
   - Ahrefs Webmaster Tools (linki zewnętrzne, audyt),
   - Screaming Frog w wersji darmowej (do 500 URL-i),
   - Google Keyword Planner,
   - PageSpeed Insights.

## Otwarte tematy

- **Daty modyfikacji w sitemap** (`app/sitemap.ts`, `routeModifiedDates`) są wspólne dla wszystkich języków artykułu, dlatego po poprawkach ES ich nie zmieniano. Gdyby poprawki tłumaczeń miały być częstsze, warto rozważyć daty osobne dla każdego języka.
- **Stare slugi artykułów** pod prefiksem języka (np. `/pl/blog/rain-sounds-vs-white-noise`) przekierowują przez next-intl kodem 307, a nie 308. Priorytet niski, bo tych adresów nie ma w sitemap.
- **Tłumaczenia rain/pink:** `/rain-sounds-app` i `/pink-noise-app` istnieją tylko po angielsku.
- **Niezałatwione z audytów 03.10:**
  - strona autora i zasady redakcyjne (artykuły podpisuje tylko „Calma Editorial Team”),
  - źródła i data sprawdzenia w porównaniach Calma vs Calm i vs BetterSleep,
  - przegląd obietnic w treściach o ADHD, szumach usznych i śnie dzieci,
  - pomiar Core Web Vitals (dzienny limit PageSpeed API był wyczerpany; raporty Lighthouse w repo są z lipca),
  - przywrócenie danych strukturalnych filmu (VideoObject).
- **Niezweryfikowane z listy po wdrożeniu 07.10:** zgłoszenie `/rain-sounds-app` i `/pink-noise-app` do indeksacji w GSC oraz to, czy do GA4 docierają zdarzenia `store_click` i `cta_click`.

## Plan na przegląd pod koniec listopada

1. **Wyeksportować z GSC** do `gsc_data/2026-11-XX/`, w tym samym układzie folderów co 29.10:
   - Skuteczność: ostatnie 3 miesiące, a dodatkowo ostatnie 28 dni w porównaniu z poprzednimi 28 dniami,
   - Indeksowanie stron: podsumowanie i `przyczyny/<przyczyna>/Tabela.csv` dla każdej przyczyny, łącznie ze „Strona wykryta – obecnie niezindeksowana”.
2. **Porównać z baseline powyżej:**
   - liczbę zindeksowanych stron i „zeskanowanych, niezindeksowanych”,
   - czy `/de`, `/fr`, `/pt-BR` i 4 poprawione artykuły ES wyszły z listy niezindeksowanych,
   - kliknięcia, wyświetlenia i pozycje stron `/white-noise-app`, `/rain-sounds-app`, `/pink-noise-app` i `/brown-noise-app`.
3. **Decyzja o tłumaczeniach.** Jeśli liczba zindeksowanych stron dalej spada, rozważyć jedną z dwóch dróg:
   - wycofanie z sitemap i noindex tłumaczeń artykułów, które w danym języku od miesięcy nie mają żadnych wyświetleń,
   - systematyczny przegląd jakości pozostałych tłumaczeń (JA, KO i PT-BR nie były sprawdzane w całości).
4. **Dla `/white-noise-app`:** analiza konkurencji z pierwszej strony wyników i plan rozbudowy treści.

Wyniki porównania wpisywać jako ustalenia z datą, bez traktowania zbieżności w czasie jako dowodu przyczyny.
