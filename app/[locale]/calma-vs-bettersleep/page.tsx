import { getLocalizedMetadata } from "@/app/utils/seo";
import EnPage from './page-en';
import PlPage from './page-pl';
import EsPage from './page-es';
import DePage from './page-de';
import FrPage from './page-fr';
import KoPage from './page-ko';
import JaPage from './page-ja';
import PtBrPage from './page-pt-BR';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let baseMetadata;
  const {locale} = await params;
  if (locale === 'pl') baseMetadata = (await import('./page-pl')).metadata;
  if (locale === 'es') baseMetadata = (await import('./page-es')).metadata;
  if (locale === 'de') baseMetadata = (await import('./page-de')).metadata;
  if (locale === 'fr') baseMetadata = (await import('./page-fr')).metadata;
  if (locale === 'ko') baseMetadata = (await import('./page-ko')).metadata;
  if (locale === 'ja') baseMetadata = (await import('./page-ja')).metadata;
  if (locale === 'pt-BR') baseMetadata = (await import('./page-pt-BR')).metadata;
  else baseMetadata = (await import('./page-en')).metadata;
  return getLocalizedMetadata(locale, "/calma-vs-bettersleep", baseMetadata);
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (locale === 'pl') return <PlPage />;
  if (locale === 'es') return <EsPage />;
  if (locale === 'de') return <DePage />;
  if (locale === 'fr') return <FrPage />;
  if (locale === 'ko') return <KoPage />;
  if (locale === 'ja') return <JaPage />;
  if (locale === 'pt-BR') return <PtBrPage />;
  // fallback to English for other locales temporarily
  return <EnPage />;
}
