import Link from "next/link";

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  sounds: string;
  soundsText: string;
  mixer: string;
  mixerText: string;
  offline: string;
  offlineText: string;
  extras: string;
  extrasText: string;
  cta: string;
  note: string;
};

const copy: Record<string, Copy> = {
  en: {
    eyebrow: "What you get in Calma",
    title: "190+ sounds, one flexible mixer",
    intro: "Build a soundscape for sleep, focus or a quieter break instead of settling for one fixed recording.",
    sounds: "190+ sounds",
    soundsText: "Noise colors, rain, nature, water, ASMR, home ambience and more.",
    mixer: "Up to 6 layers",
    mixerText: "Mix up to 3 sounds in the free version or 6 with PRO and set each volume separately.",
    offline: "Offline playback",
    offlineText: "Keep selected sounds available without a connection and use a fade-out sleep timer.",
    extras: "More than a sound list",
    extrasText: "Night Sky, bedtime reminders, Brainwave Lab and BreathSync help shape a personal routine.",
    cta: "Try Calma free",
    note: "No account required. PRO is available as an optional one-time unlock — no recurring subscription required.",
  },
  pl: {
    eyebrow: "Co znajdziesz w Calma",
    title: "Ponad 190 dźwięków i elastyczny mikser",
    intro: "Twórz własne tła do snu, skupienia i odpoczynku zamiast wybierać tylko jedno gotowe nagranie.",
    sounds: "Ponad 190 dźwięków",
    soundsText: "Kolory szumu, deszcz, natura, woda, ASMR, odgłosy domu i więcej.",
    mixer: "Do 6 warstw",
    mixerText: "Łącz do 3 dźwięków bezpłatnie lub 6 w PRO i osobno ustawiaj ich głośność.",
    offline: "Odtwarzanie offline",
    offlineText: "Zachowaj wybrane dźwięki bez połączenia i użyj wyłącznika z łagodnym wyciszaniem.",
    extras: "Więcej niż biblioteka",
    extrasText: "Night Sky, przypomnienia o porze snu, Brainwave Lab i BreathSync pomagają budować własną rutynę.",
    cta: "Wypróbuj Calmę za darmo",
    note: "Konto nie jest wymagane. PRO to opcjonalne jednorazowe odblokowanie — bez wymaganej subskrypcji.",
  },
  es: {
    eyebrow: "Qué incluye Calma",
    title: "Más de 190 sonidos y un mezclador flexible",
    intro: "Crea ambientes para dormir, concentrarte o descansar en lugar de limitarte a una sola grabación.",
    sounds: "Más de 190 sonidos",
    soundsText: "Colores de ruido, lluvia, naturaleza, agua, ASMR, ambientes del hogar y más.",
    mixer: "Hasta 6 capas",
    mixerText: "Mezcla hasta 3 sonidos gratis o 6 con PRO y ajusta cada volumen por separado.",
    offline: "Reproducción sin conexión",
    offlineText: "Guarda sonidos seleccionados y usa un temporizador con apagado gradual.",
    extras: "Más que una biblioteca",
    extrasText: "Night Sky, recordatorios, Brainwave Lab y BreathSync ayudan a crear una rutina personal.",
    cta: "Prueba Calma gratis",
    note: "No necesitas una cuenta. PRO es un desbloqueo único opcional, sin suscripción recurrente obligatoria.",
  },
  de: {
    eyebrow: "Das bietet Calma",
    title: "Über 190 Sounds und ein flexibler Mixer",
    intro: "Erstelle eigene Klangwelten für Schlaf, Fokus oder eine ruhige Pause statt nur eine Aufnahme abzuspielen.",
    sounds: "Über 190 Sounds",
    soundsText: "Rauschfarben, Regen, Natur, Wasser, ASMR, Alltagsgeräusche und mehr.",
    mixer: "Bis zu 6 Ebenen",
    mixerText: "Mische bis zu 3 Sounds kostenlos oder 6 mit PRO und regle jede Lautstärke einzeln.",
    offline: "Offline-Wiedergabe",
    offlineText: "Speichere ausgewählte Sounds und nutze einen Timer mit sanftem Ausblenden.",
    extras: "Mehr als eine Bibliothek",
    extrasText: "Night Sky, Schlafenszeit-Erinnerungen, Brainwave Lab und BreathSync unterstützen deine Routine.",
    cta: "Calma kostenlos testen",
    note: "Kein Konto nötig. PRO ist optional einmalig freischaltbar — kein laufendes Abo erforderlich.",
  },
  fr: {
    eyebrow: "Ce que propose Calma",
    title: "Plus de 190 sons et un mixeur flexible",
    intro: "Créez vos ambiances pour dormir, vous concentrer ou faire une pause au lieu d'écouter un seul enregistrement.",
    sounds: "Plus de 190 sons",
    soundsText: "Couleurs de bruit, pluie, nature, eau, ASMR, ambiances de maison et plus encore.",
    mixer: "Jusqu'à 6 couches",
    mixerText: "Mélangez jusqu'à 3 sons gratuitement ou 6 avec PRO et réglez chaque volume séparément.",
    offline: "Écoute hors ligne",
    offlineText: "Gardez certains sons disponibles sans connexion et utilisez une minuterie avec fondu.",
    extras: "Plus qu'une bibliothèque",
    extrasText: "Night Sky, les rappels, Brainwave Lab et BreathSync aident à créer votre routine.",
    cta: "Essayer Calma gratuitement",
    note: "Aucun compte requis. PRO est un déblocage unique facultatif, sans abonnement récurrent obligatoire.",
  },
  ko: {
    eyebrow: "Calma에서 제공하는 기능",
    title: "190개 이상의 사운드와 유연한 믹서",
    intro: "하나의 녹음에 그치지 않고 수면, 집중, 휴식을 위한 나만의 사운드스케이프를 만드세요.",
    sounds: "190개 이상의 사운드",
    soundsText: "다양한 노이즈 컬러, 빗소리, 자연, 물, ASMR, 생활 환경음 등을 제공합니다.",
    mixer: "최대 6개 레이어",
    mixerText: "무료 버전에서는 3개, PRO에서는 6개까지 믹스하고 각각의 볼륨을 조절하세요.",
    offline: "오프라인 재생",
    offlineText: "선택한 사운드를 연결 없이 듣고 부드럽게 줄어드는 수면 타이머를 사용하세요.",
    extras: "사운드 목록 그 이상",
    extrasText: "Night Sky, 취침 알림, Brainwave Lab, BreathSync로 나만의 루틴을 만들 수 있습니다.",
    cta: "Calma 무료로 사용해 보기",
    note: "계정이 필요 없습니다. PRO는 선택 가능한 일회성 잠금 해제이며 정기 구독이 필수가 아닙니다.",
  },
  ja: {
    eyebrow: "Calmaでできること",
    title: "190種類以上のサウンドと柔軟なミキサー",
    intro: "1つの録音だけでなく、睡眠、集中、休憩のための自分だけのサウンドスケープを作れます。",
    sounds: "190種類以上のサウンド",
    soundsText: "ノイズカラー、雨、自然、水、ASMR、生活環境音などを収録しています。",
    mixer: "最大6レイヤー",
    mixerText: "無料版では3音、PROでは6音まで重ね、それぞれの音量を調整できます。",
    offline: "オフライン再生",
    offlineText: "選んだサウンドを通信なしで再生し、フェードアウト付きタイマーを使えます。",
    extras: "サウンド集だけではない機能",
    extrasText: "Night Sky、就寝リマインダー、Brainwave Lab、BreathSyncで自分の習慣を整えられます。",
    cta: "Calmaを無料で試す",
    note: "アカウントは不要です。PROは任意の買い切りで、継続サブスクリプションは必須ではありません。",
  },
  "pt-BR": {
    eyebrow: "O que você encontra no Calma",
    title: "Mais de 190 sons e um mixer flexível",
    intro: "Crie ambientes para dormir, focar ou fazer uma pausa em vez de ficar preso a uma única gravação.",
    sounds: "Mais de 190 sons",
    soundsText: "Cores de ruído, chuva, natureza, água, ASMR, ambientes domésticos e muito mais.",
    mixer: "Até 6 camadas",
    mixerText: "Misture até 3 sons gratuitamente ou 6 com o PRO e ajuste cada volume separadamente.",
    offline: "Reprodução offline",
    offlineText: "Mantenha sons selecionados disponíveis sem conexão e use o timer com redução gradual.",
    extras: "Mais que uma biblioteca",
    extrasText: "Night Sky, lembretes, Brainwave Lab e BreathSync ajudam a criar uma rotina pessoal.",
    cta: "Experimente o Calma grátis",
    note: "Não é preciso criar uma conta. O PRO é um desbloqueio único opcional, sem assinatura recorrente obrigatória.",
  },
};

export default function ProductHighlights({ locale }: { locale: string }) {
  const text = copy[locale] ?? copy.en;
  const downloadHref = locale === "en" ? "/download" : `/${locale}/download`;
  const cards = [
    [text.sounds, text.soundsText],
    [text.mixer, text.mixerText],
    [text.offline, text.offlineText],
    [text.extras, text.extrasText],
  ];

  return (
    <section className="bg-slate-950 px-6 pb-20 text-white" aria-labelledby="product-highlights-title">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-white/[0.03] p-8 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">{text.eyebrow}</p>
        <h2 id="product-highlights-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{text.title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/70">{text.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href={downloadHref}
            data-cta-location="product_facts"
            className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            {text.cta}
          </Link>
          <p className="max-w-2xl text-sm leading-6 text-white/55">{text.note}</p>
        </div>
      </div>
    </section>
  );
}
