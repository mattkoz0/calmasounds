import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  size?: number;
  textClassName?: string;
};

export default function SiteLogo({
  size = 40,
  textClassName = "text-lg font-semibold tracking-wide",
}: SiteLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Calma logo"
        width={size}
        height={size}
        className="rounded-xl object-contain"
        priority
      />
      <span className={textClassName}>Calma</span>
    </Link>
  );
}