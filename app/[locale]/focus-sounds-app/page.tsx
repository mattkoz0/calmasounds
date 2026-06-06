import { getLocalizedMetadata } from "@/app/utils/seo";
import SoftwareApplicationSchema from '../_components/software-application-schema';
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
  if (locale === 'pl') baseMetadata = (await import('./page-pl')).metadata;
  if (locale === 'de') baseMetadata = (await import('./page-de')).metadata;
  if (locale === 'fr') baseMetadata = (await import('./page-fr')).metadata;
  if (locale === 'ko') baseMetadata = (await import('./page-ko')).metadata;
  if (locale === 'ja') baseMetadata = (await import('./page-ja')).metadata;
  if (locale === 'pt-BR') baseMetadata = (await import('./page-pt-BR')).metadata;
  else baseMetadata = (await import('./page-en')).metadata;
  return getLocalizedMetadata(locale, "/focus-sounds-app", baseMetadata);
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  const schema = (
    <SoftwareApplicationSchema 
      name="Calma - Focus Sounds"
      description="Improve concentration and study better with a dedicated focus sounds app featuring binaural beats and tailored noise colors."
      applicationCategory="ProductivityApplication"
    />
  );
  
  if (locale === 'es') return <>{schema}<EsPage /></>;
  if (locale === 'pl') return <>{schema}<PlPage /></>;
  if (locale === 'de') return <>{schema}<DePage /></>;
  if (locale === 'fr') return <>{schema}<FrPage /></>;
  if (locale === 'ko') return <>{schema}<KoPage /></>;
  if (locale === 'ja') return <>{schema}<JaPage /></>;
  if (locale === 'pt-BR') return <>{schema}<PtPage /></>;
  return <>{schema}<EnPage /></>;
}
