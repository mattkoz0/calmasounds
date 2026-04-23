import EnPage from './page-en';
import EsPage from './page-es';
import PlPage from './page-pl';
import DePage from './page-de';

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (locale === 'es') return <EsPage />;
  if (locale === 'pl') return <PlPage />;
  if (locale === 'de') return <DePage />;
  return <EnPage />;
}