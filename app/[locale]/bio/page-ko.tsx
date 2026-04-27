import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaGooglePlay, FaApple, FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Calma 링크 및 앱 다운로드 | 바이오',
  description: 'Calma 앱과 소셜 미디어로 연결되는 모든 공식 링크를 확인하세요.',
  alternates: {
    canonical: 'https://www.calmasounds.com/ko/bio',
  },
};

export default function BioPage() {
  const links = [
    {
      title: 'Google Play에서 다운로드',
      href: 'https://play.google.com/store/apps/details?id=pl.mitysoft.calma',
      icon: <FaGooglePlay className="h-5 w-5" />,
      primary: true
    },
    {
      title: 'App Store에서 다운로드',
      href: 'https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923',
      icon: <FaApple className="h-5 w-5" />,
      primary: true
    },
    {
      title: '공식 웹사이트',
      href: '/ko',
      icon: null,
      primary: false
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram className="h-6 w-6" />, href: 'https://www.instagram.com/calma.app.official', label: 'Instagram' },
    { icon: <FaTiktok className="h-6 w-6" />, href: 'https://www.tiktok.com/@.calma.app', label: 'TikTok' },
    { icon: <FaYoutube className="h-6 w-6" />, href: 'https://www.youtube.com/@CalmaApp', label: 'YouTube' },
    { icon: <FaFacebook className="h-6 w-6" />, href: 'https://www.facebook.com/profile.php?id=61580760185966', label: 'Facebook' },
    { icon: <FaEnvelope className="h-6 w-6" />, href: '/ko/support', label: 'Support' }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-6 overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl">
          <Image
            src="/logo.png"
            alt="Calma Logo"
            width={120}
            height={120}
            className="h-[120px] w-[120px] object-cover"
            priority
          />
        </div>
        
        <h1 className="text-3xl font-bold">Calma</h1>
        <p className="mt-3 text-white/70">당신만의 평온함, 디자인되다</p>

        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-lg font-semibold transition hover:scale-[1.02] ${
                link.primary 
                  ? 'bg-white text-slate-950' 
                  : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {link.icon}
              {link.title}
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition hover:scale-110 hover:text-white"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-white/40">
          Calma는 평온한 수면과 집중을 위해 설계된 앱입니다.
        </p>
      </section>
    </main>
  );
}
