# Listy URL-i z raportu indeksowania — 2026-09-09

Eksport CSV z GSC (`indeksowanie/Problemy krytyczne.csv`) podaje tylko liczby,
bez adresów. Adresy trzeba wyciągnąć ręcznie:

**GSC → Indeksowanie stron → kliknij przyczynę → Eksportuj → arkusz „Tabela".**

Zapisz tutaj trzy pliki (nazwy dowolne, skrypt czyta pierwszy URL z wiersza):

| Plik | Przyczyna | Strony |
|---|---|---:|
| `crawled-not-indexed.csv` | Strona zeskanowana, ale jeszcze nie zindeksowana | 42 |
| `page-with-redirect.csv` | Strona zawiera przekierowanie | 33 |
| `discovered-not-indexed.csv` | Strona wykryta – obecnie niezindeksowana | 16 |

Potem:

```
npm run seo:triage -- -Csv "gsc_data/2026-09-09/indeksowanie/urls/*.csv"
```

Skrypt porówna adresy z żywą sitemapą i podzieli je na:

- **InSitemap** — prawdziwy problem, idzie do Inspekcji URL;
- **EnPrefix** / **Apex** / **NoindexRoute** — znany, zamierzony szum;
- **Other** — stare slugi lub parametry, obejrzeć ręcznie.

Kryterium zakończenia jest w [CONTENT_PLAN.md](../../../../CONTENT_PLAN.md) §5.2.3:
wiemy, ile z 42 adresów jest w sitemapie, i mamy dla nich odpowiedź
„defekt, naprawiamy X" albo „brak defektu, zostawiamy".
