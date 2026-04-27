import EnPage from './page-en';
import EsPage from './page-es';
import PlPage from './page-pl';
import DePage from './page-de';
import FrPage from './page-fr';
import KoPage from './page-ko';

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (locale === 'es') return <EsPage />;
  if (locale === 'pl') return <PlPage />;
  if (locale === 'de') return <DePage />;
  if (locale === 'fr') return <FrPage />;
  if (locale === 'ko') return <KoPage />;
  return <EnPage />;
}