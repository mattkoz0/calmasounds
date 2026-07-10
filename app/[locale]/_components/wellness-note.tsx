type Topic = "adhd" | "tinnitus" | "baby";

const copy: Record<string, Record<Topic, string>> = {
  en: {
    adhd: "Sound preferences and responses vary. Background noise may support some people, but it is not an ADHD treatment or a substitute for professional care.",
    tinnitus: "Sound masking may make tinnitus less noticeable for some people, but this app does not diagnose or treat tinnitus. Seek medical advice for new, sudden, one-sided or worsening symptoms.",
    baby: "Keep the device away from the cot and use a low volume. Sound should not replace safe-sleep guidance or advice from your child's healthcare professional.",
  },
  pl: {
    adhd: "Preferencje i reakcje na dźwięk są indywidualne. Tło dźwiękowe może pomagać niektórym osobom, ale nie jest leczeniem ADHD ani zamiennikiem profesjonalnej opieki.",
    tinnitus: "Maskowanie dźwiękiem może u części osób zmniejszać odczuwalność szumu, ale aplikacja nie diagnozuje ani nie leczy szumów usznych. Nowe, nagłe, jednostronne lub nasilające się objawy skonsultuj z lekarzem.",
    baby: "Trzymaj urządzenie z dala od łóżeczka i ustaw niską głośność. Dźwięk nie zastępuje zasad bezpiecznego snu ani porady specjalisty opiekującego się dzieckiem.",
  },
  es: {
    adhd: "Las preferencias y respuestas al sonido varían. El ruido de fondo puede ayudar a algunas personas, pero no trata el TDAH ni sustituye la atención profesional.",
    tinnitus: "El enmascaramiento puede hacer que los acúfenos se noten menos en algunas personas, pero la app no los diagnostica ni los trata. Consulta síntomas nuevos, repentinos, unilaterales o que empeoren.",
    baby: "Mantén el dispositivo lejos de la cuna y a bajo volumen. El sonido no sustituye las pautas de sueño seguro ni el consejo del profesional sanitario del bebé.",
  },
  de: {
    adhd: "Klangvorlieben und Reaktionen sind individuell. Hintergrundgeräusche können manchen Menschen helfen, sind aber keine ADHS-Behandlung und ersetzen keine fachliche Betreuung.",
    tinnitus: "Klangmaskierung kann Tinnitus für manche weniger auffällig machen, diagnostiziert oder behandelt ihn aber nicht. Neue, plötzliche, einseitige oder zunehmende Beschwerden bitte ärztlich abklären.",
    baby: "Halte das Gerät vom Babybett entfernt und stelle es leise ein. Klänge ersetzen weder Empfehlungen zum sicheren Schlaf noch medizinischen Rat.",
  },
  fr: {
    adhd: "Les préférences et les réactions au son varient. Un fond sonore peut aider certaines personnes, mais il ne traite pas le TDAH et ne remplace pas un suivi professionnel.",
    tinnitus: "Le masquage sonore peut rendre les acouphènes moins perceptibles chez certaines personnes, mais l'app ne les diagnostique ni ne les traite. Consultez pour tout symptôme nouveau, soudain, unilatéral ou aggravé.",
    baby: "Gardez l'appareil loin du lit et utilisez un volume faible. Le son ne remplace pas les recommandations de sommeil sûr ni l'avis du professionnel de santé de l'enfant.",
  },
  ko: {
    adhd: "소리에 대한 선호와 반응은 사람마다 다릅니다. 배경음이 일부 사람에게 도움이 될 수 있지만 ADHD 치료나 전문적인 진료를 대신하지 않습니다.",
    tinnitus: "사운드 마스킹으로 일부 사람은 이명을 덜 느낄 수 있지만 앱은 이명을 진단하거나 치료하지 않습니다. 새로 생기거나 갑작스럽고 한쪽에만 있거나 심해지는 증상은 진료를 받으세요.",
    baby: "기기를 아기 침대에서 떨어뜨리고 낮은 볼륨으로 사용하세요. 사운드는 안전 수면 지침이나 의료 전문가의 조언을 대신하지 않습니다.",
  },
  ja: {
    adhd: "音の好みや反応には個人差があります。背景音が役立つ場合もありますが、ADHDの治療や専門家のケアに代わるものではありません。",
    tinnitus: "サウンドマスキングで耳鳴りが気になりにくくなる人もいますが、本アプリは診断や治療を行いません。新しい、突然の、片側だけの、または悪化する症状は医療機関に相談してください。",
    baby: "端末をベビーベッドから離し、低い音量で使ってください。音は安全な睡眠の指針や医療専門家の助言に代わるものではありません。",
  },
  "pt-BR": {
    adhd: "Preferências e respostas ao som variam. O ruído de fundo pode ajudar algumas pessoas, mas não trata TDAH nem substitui o cuidado profissional.",
    tinnitus: "O mascaramento pode tornar o zumbido menos perceptível para algumas pessoas, mas o app não diagnostica nem trata a condição. Procure orientação para sintomas novos, súbitos, unilaterais ou que piorem.",
    baby: "Mantenha o aparelho longe do berço e use volume baixo. O som não substitui orientações de sono seguro nem o aconselhamento do profissional de saúde da criança.",
  },
};

export default function WellnessNote({ locale, topic }: { locale: string; topic: Topic }) {
  return (
    <aside className="bg-slate-950 px-6 pb-12 text-white" aria-label="Important information">
      <p className="mx-auto max-w-4xl rounded-2xl border border-amber-300/20 bg-amber-300/5 px-5 py-4 text-sm leading-6 text-white/70">
        {copy[locale]?.[topic] ?? copy.en[topic]}
      </p>
    </aside>
  );
}
