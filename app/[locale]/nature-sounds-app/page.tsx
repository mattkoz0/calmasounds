import SoftwareApplicationSchema from '../_components/software-application-schema';
import EnPage from './page-en';
import EsPage from './page-es';
import PlPage from './page-pl';
import DePage from './page-de';
import FrPage from './page-fr';
import KoPage from './page-ko';
import JaPage from './page-ja';
import PtPage from './page-pt-BR';

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const schema = (
    <SoftwareApplicationSchema 
      name="Calma - Nature Sounds"
      description="A beautifully simple app for nature sounds and relaxation."
      applicationCategory="LifestyleApplication"
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
