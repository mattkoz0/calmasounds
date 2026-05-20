import EnPage from './page-en';
import PlPage from './page-pl';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale === 'pl') return (await import('./page-pl')).metadata;
  return (await import('./page-en')).metadata;
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  if (locale === 'pl') return <PlPage />;
  // fallback to English for other locales temporarily
  return <EnPage />;
}
