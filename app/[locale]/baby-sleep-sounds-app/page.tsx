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
  else if (locale === 'pl') baseMetadata = (await import('./page-pl')).metadata;
  else if (locale === 'de') baseMetadata = (await import('./page-de')).metadata;
  else if (locale === 'fr') baseMetadata = (await import('./page-fr')).metadata;
  else if (locale === 'ko') baseMetadata = (await import('./page-ko')).metadata;
  else if (locale === 'ja') baseMetadata = (await import('./page-ja')).metadata;
  else if (locale === 'pt-BR') baseMetadata = (await import('./page-pt-BR')).metadata;
  else baseMetadata = (await import('./page-en')).metadata;
  return getLocalizedMetadata(locale, "/baby-sleep-sounds-app", baseMetadata);
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  const schema = (
    <SoftwareApplicationSchema 
      name="Calma - Baby Sleep Sounds"
      description="Gentle shushing, womb sounds and continuous noise for a calmer bedtime sound environment."
      applicationCategory="HealthApplication"
    />
  );
  
  if (locale === 'es') return <>{schema}<EsPage /></>;
  else if (locale === 'pl') return <>{schema}<PlPage /></>;
  else if (locale === 'de') return <>{schema}<DePage /></>;
  else if (locale === 'fr') return <>{schema}<FrPage /></>;
  else if (locale === 'ko') return <>{schema}<KoPage /></>;
  else if (locale === 'ja') return <>{schema}<JaPage /></>;
  else if (locale === 'pt-BR') return <>{schema}<PtPage /></>;
  return <>{schema}<EnPage /></>;
}
