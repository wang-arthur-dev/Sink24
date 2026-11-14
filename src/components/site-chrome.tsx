import Image from "next/image";
import Link from "next/link";
import {
  BoxIcon,
  DropletIcon,
  MessageIcon,
  PhoneIcon,
  RefreshIcon,
  TrashIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/icons";
import { services, site, smsHref, telHref } from "@/lib/site";

const nav = [
  { href: "/#services", label: "서비스" },
  { href: "/#brands", label: "취급 브랜드" },
  { href: "/cases", label: "작업 사례" },
  { href: "/faq", label: "자주 묻는 질문" },
  { href: "/contact", label: "문의" },
];

export const serviceIcons = {
  repair: WrenchIcon,
  move: TruckIcon,
  removal: TrashIcon,
  parts: BoxIcon,
  tradein: RefreshIcon,
  prevent: DropletIcon,
};

export function TopBar() {
  return (
    <div className="bg-ink text-xs text-white/80 sm:text-sm">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 md:px-6">
        <p className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-sky shadow-[0_0_0_3px] shadow-sky/30" />
          <strong className="font-bold text-white">{site.tagline}</strong>
        </p>
        <p className="hidden items-center gap-5 sm:flex">
          <span>문자 주시면 30분 내 회신</span>
          <a href={telHref} className="flex items-center gap-1.5 font-bold text-white">
            <PhoneIcon className="size-3.5" />
            {site.phone}
          </a>
        </p>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-navy/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
          <Link href="/" aria-label={`${site.name} 홈`}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={1032}
              height={329}
              preload
              className="h-9 w-auto md:h-11"
            />
          </Link>
          <nav className="hidden gap-8 text-[15px] font-medium md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={telHref}
            className="flex items-center gap-1.5 rounded-xl bg-sky-soft px-3 py-2 text-sm font-bold whitespace-nowrap text-ink shadow-md shadow-sky/30 hover:bg-sky md:gap-2 md:px-6 md:py-3.5 md:text-base"
          >
            <PhoneIcon className="size-4 shrink-0" />
            {site.phone}
          </a>
        </div>
      </div>
      <div className="border-b border-navy/10">
        {/* 모바일에서는 상단 nav가 숨겨지므로 페이지 링크를 먼저 노출 */}
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 text-sm font-medium whitespace-nowrap [scrollbar-width:none] md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block px-3 py-3.5 hover:text-brand">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mx-auto hidden max-w-6xl justify-between px-6 text-[15px] font-medium whitespace-nowrap md:flex">
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            return (
              <li key={s.id}>
                <Link href="/#services" className="flex items-center gap-2 px-3 py-4 hover:text-brand">
                  <Icon className="size-4 text-sky" />
                  {s.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-navy/10 pb-20 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-navy/60 md:flex-row md:items-center md:justify-between md:px-6">
        <Image
          src="/logo.png"
          alt={site.name}
          width={1032}
          height={329}
          className="h-8 w-auto self-start md:self-auto"
        />
        <div className="flex flex-col gap-1 md:items-end">
          <p className="flex gap-4">
            {nav.slice(2).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-navy">
                {item.label}
              </Link>
            ))}
          </p>
          <p>
            {site.tagline} · 문의 <a href={telHref} className="font-medium text-navy">{site.phone}</a>
          </p>
          <p>© {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-navy/10 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={telHref}
        className="flex items-center justify-center gap-2 rounded-xl bg-sky-soft py-3.5 font-bold text-ink"
      >
        <PhoneIcon className="size-5" />
        전화하기
      </a>
      <a
        href={smsHref}
        className="flex items-center justify-center gap-2 rounded-xl bg-ink py-3.5 font-bold text-white"
      >
        <MessageIcon className="size-5" />
        문자하기
      </a>
    </div>
  );
}
