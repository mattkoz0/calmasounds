# Calma — wdrożenie zmian SEO i pobierania aplikacji

Data: 2026-10-07. Zmiany wykonano i sprawdzono w lokalnym projekcie. Nie opublikowano ich na produkcji.

## Wykonany zakres

- Dwie nowe angielskie strony: `/rain-sounds-app` i `/pink-noise-app`. Każda ma odrębny opis zastosowań, próbkę audio ładowaną na żądanie, screenshoty biblioteki i miksera, FAQ, przyciski obu sklepów oraz linki do powiązanych poradników i produktów.
- Własne title, description, canonical, Open Graph i dane strukturalne nowych stron. FAQ korzysta z tych samych odpowiedzi w HTML i JSON-LD. Sitemap i hreflang obejmują wyłącznie istniejącą wersję angielską. Zmiana języka na tych stronach prowadzi do strony głównej wybranego języka.
- Angielskie landingi brown noise i white noise mają konkretniejsze opisy, odpowiedzi o offline i darmowym zakresie, próbki audio oraz powiązania z rain i pink noise. Sleep sounds precyzuje darmowe trzy warstwy i opcjonalne sześć w PRO. Sound mixer pokazuje kroki tworzenia miksu i użycie telefonu jako sound machine.
- Kontekstowe linki z pięciu angielskich poradników do właściwych landingów. Linki do nowych stron dodano też na angielskiej stronie głównej i w stopce.
- Wspólny blok pobrania na blogu pokazuje jawne przyciski App Store i Google Play we wszystkich obsługiwanych językach. Wcześniejszy przycisk już prowadził przez `/download` z rozpoznaniem urządzenia; nie blokował pobrania na iPhone.
- Oznaczenia `hero`, `end` i `article_end` umożliwiają rozróżnianie miejsca kliknięcia. Automatycznie dodawane parametry Google Play mają neutralne `utm_medium=referral` i `utm_campaign=website_download`; istniejące parametry kampanii pozostają zachowane. `/download` zachowuje jawne parametry wejścia, w tym kampanie QR.
- Poprawiony atrybut `sizes` screenshotów na ośmiu wersjach strony głównej i pięciu angielskich landingach pozwala Next/Image dobierać rozmiar do siatki. Nie wykonywano masowej konwersji obrazów na podstawie ostrzeżeń RankyFy.

## Weryfikacja

- `npm run build`: poprawny build produkcyjny i sprawdzenie TypeScript.
- `npm run lint -- --quiet`: bez błędów.
- `npm run seo:audit`: 258 URL-i z sitemap; wszystkie HTTP 200, bez noindex, brakujących canonical i powtórzonych canonical.
- `npm run seo:verify`: testy parametrów kampanii, kliknięć sklepów, zmiany języka, metadata, zgodności FAQ, sitemap, przycisków na blogu i dostępności audio przeszły.
- `git diff --check`: bez błędów whitespace.

Test `seo:verify` wymaga uruchomionej lokalnej aplikacji, domyślnie `npm run start -- -p 3126`. Inny adres można podać jako `npm run seo:verify -- http://localhost:3000`.

## Po publikacji

1. Sprawdzić nowe adresy na domenie produkcyjnej i zgłosić oba do sprawdzenia URL-a w GSC. Nie zmieniać istniejących adresów landingów.
2. Dodać `rain sounds app` i `pink noise app` do monitoringu RankyFy dla Google US / English, jeżeli nie są jeszcze śledzone.
3. Potwierdzić w GA4 odbiór `cta_click` i `store_click` po udzieleniu zgody analitycznej. Kliknięcie sklepu mierzy przejście do sklepu, a nie instalację aplikacji.
4. Porównywać wyświetlenia, kliknięcia i zapytania dla poszczególnych URL-i w GSC oraz udział przejść do sklepów. Testy lokalne nie potwierdzają indeksacji, wzrostu pozycji ani odbioru zdarzeń w rzeczywistym GA4.

Nowe tłumaczenia, landing green noise oraz masowe tworzenie stron dla wariantów słów kluczowych nie należą do tej partii wdrożenia.
