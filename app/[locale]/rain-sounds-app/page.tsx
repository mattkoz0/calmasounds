import SoundLanding, { soundMetadata } from "../_components/sound-landing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  return soundMetadata("rain", (await params).locale);
}

export default async function Page({ params }: Props) {
  return <SoundLanding kind="rain" locale={(await params).locale} />;
}
