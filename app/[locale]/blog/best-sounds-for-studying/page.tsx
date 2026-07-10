import { getLocalizedMetadata } from "@/app/utils/seo";
import EnPage from './page-en';
import EsPage from './page-es';
import PlPage from './page-pl';
import DePage from './page-de';
import FrPage from './page-fr';
import KoPage from './page-ko';
import JaPage from './page-ja';
import PtPage from './page-pt-BR';


export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let baseMetadata;
  const {locale} = await params;
  if (locale === 'es') baseMetadata = (await import('./page-es')).metadata;
  else if (locale === 'pl') baseMetadata = (await import('./page-pl')).metadata;
  else if (locale === 'de') baseMetadata = (await import('./page-de')).metadata;
  else if (locale === 'fr') baseMetadata = (await import('./page-fr')).metadata;
  else if (locale === 'ko') baseMetadata = (await import('./page-ko')).metadata;
  else if (locale === 'ja') baseMetadata = (await import('./page-ja')).metadata;
  else if (locale === 'pt-BR') baseMetadata = (await import('./page-pt-BR')).metadata;
  else baseMetadata = (await import('./page-en')).metadata;
  return getLocalizedMetadata(locale, "/blog/best-sounds-for-studying", baseMetadata);
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (locale === 'es') return <EsPage />;
  else if (locale === 'pl') return <PlPage />;
  else if (locale === 'de') return <DePage />;
  else if (locale === 'fr') return <FrPage />;
  else if (locale === 'ko') return <KoPage />;
  else if (locale === 'ja') return <JaPage />;
  else if (locale === 'pt-BR') return <PtPage />;
  return <EnPage />;
}
