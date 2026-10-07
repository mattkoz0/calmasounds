import SoundLanding, { soundMetadata } from "../_components/sound-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return soundMetadata("pink", (await params).locale);
}

export default async function Page({ params }: Props) {
  return <SoundLanding kind="pink" locale={(await params).locale} />;
}
