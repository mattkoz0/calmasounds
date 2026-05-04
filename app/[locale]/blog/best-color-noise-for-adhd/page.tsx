import EnPage from './page-en';

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  // As this is a new article, we only have English for now.
  // Other locales will fallback to English until translated.
  
  return <EnPage />;
}
