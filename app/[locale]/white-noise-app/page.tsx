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
  const {locale} = await params;
  if (locale === 'es') return (await import('./page-es')).metadata;
  if (locale === 'pl') return (await import('./page-pl')).metadata;
  if (locale === 'de') return (await import('./page-de')).metadata;
  if (locale === 'fr') return (await import('./page-fr')).metadata;
  if (locale === 'ko') return (await import('./page-ko')).metadata;
  if (locale === 'ja') return (await import('./page-ja')).metadata;
  if (locale === 'pt-BR') return (await import('./page-pt-BR')).metadata;
  return (await import('./page-en')).metadata;
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const schema = (
    <SoftwareApplicationSchema 
      name="Calma - White Noise"
      description="A beautifully simple white noise app for sleep, relaxation and building a calmer audio environment."
      applicationCategory="HealthApplication"
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
