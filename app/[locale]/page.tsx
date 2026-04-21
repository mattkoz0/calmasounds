import EnPage from './page-en';
import EsPage from './page-es';

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return locale === 'es' ? <EsPage /> : <EnPage />;
}