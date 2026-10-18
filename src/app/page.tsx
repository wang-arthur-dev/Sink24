import Image from "next/image";
import {
  ArrowIcon,
  BoxIcon,
  CheckIcon,
  ClockIcon,
  DropletIcon,
  MessageIcon,
  PhoneIcon,
  RefreshIcon,
  ShieldIcon,
  TrashIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/icons";
import { getLatestPosts } from "@/lib/blog";
import {
  brands,
  highlights,
  services,
  site,
  smsHref,
  steps,
  symptoms,
  telHref,
} from "@/lib/site";

const nav = [
  { href: "#services", label: "서비스" },
  { href: "#brands", label: "취급 브랜드" },
  { href: "#process", label: "진행 과정" },
  { href: "#blog", label: "작업 사례" },
  { href: "#contact", label: "문의" },
];

const serviceIcons = {
  repair: WrenchIcon,
  move: TruckIcon,
  removal: TrashIcon,
  parts: BoxIcon,
  tradein: RefreshIcon,
  prevent: DropletIcon,
};

const highlightIcons = {
  brands: ShieldIcon,
  reply: ClockIcon,
  restore: TrashIcon,
  parts: BoxIcon,
};

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Symptoms />
        <Services />
        <Brands />
        <Process />
        <BlogPosts />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

function TopBar() {
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

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-navy/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
          <a href="#" aria-label={`${site.name} 홈`}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={1032}
              height={329}
              preload
              className="h-9 w-auto md:h-11"
            />
          </a>
          <nav className="hidden gap-8 text-[15px] font-medium md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-brand">
                {item.label}
              </a>
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
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 text-sm font-medium whitespace-nowrap [scrollbar-width:none] md:justify-between md:px-6 md:text-[15px]">
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            return (
              <li key={s.id}>
                <a href="#services" className="flex items-center gap-2 px-3 py-3.5 hover:text-brand md:py-4">
                  <Icon className="size-4 text-sky" />
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(59,191,229,0.25),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(31,123,199,0.35),transparent_50%)]" />
      <Image
        src="/logo-mark.png"
        alt=""
        width={326}
        height={322}
        loading="eager"
        className="pointer-events-none absolute -right-32 top-1/2 w-[30rem] -translate-y-1/2 opacity-20 md:right-0 md:w-[38rem]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-36 md:px-6 md:pt-28 md:pb-44">
        <h1 className="text-4xl leading-tight font-black tracking-tight md:text-6xl">
          <span className="block sm:inline">음식물처리기</span>{" "}
          <span className="whitespace-nowrap">고장 · 이사 · 철거</span>
          <br />
          <span className="text-sky">싱크24</span>가 해결합니다.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          칼날 교체, 막힘 · 소음 · 누수 점검부터 이전설치, 철거 후 원상복구까지.{" "}
          <br className="hidden md:block" />
          블랙홀을 비롯한 전 브랜드를 취급합니다.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={telHref}
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-soft px-7 py-4 text-lg font-bold text-ink shadow-lg shadow-sky/30 hover:bg-sky"
          >
            <PhoneIcon className="size-5" />
            {site.phone}
          </a>
          <a
            href={smsHref}
            className="flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-lg font-bold ring-1 ring-white/40 hover:bg-white/10"
          >
            <MessageIcon className="size-5" />
            문자로 문의하기
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
          {["문자 주시면 30분 내 회신", "전 브랜드 취급"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <CheckIcon className="size-4 text-sky" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="relative z-10 mx-auto -mt-24 max-w-6xl px-4 md:-mt-20 md:px-6">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {highlights.map((h) => {
          const Icon = highlightIcons[h.id];
          return (
            <li
              key={h.id}
              className="flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-xl shadow-navy/5 md:flex-row md:items-center md:gap-4 md:p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-sky">
                <Icon className="size-6" />
              </span>
              <div>
                <p className="text-lg font-black tracking-tight md:text-xl">{h.title}</p>
                <p className="mt-0.5 text-xs text-navy/60 md:text-sm">{h.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold text-sky">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight md:text-[2.75rem] md:leading-tight">{title}</h2>
      {desc && <p className={`mt-4 ${dark ? "text-white/70" : "text-navy/60"}`}>{desc}</p>}
    </div>
  );
}

function Symptoms() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionTitle eyebrow="증상 체크" title="이런 증상이 있으신가요?" />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {symptoms.map((s) => (
          <li key={s.title} className="rounded-2xl border border-navy/10 p-6 hover:border-sky">
            <span className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
              <CheckIcon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-mist/60 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="서비스" title="수리부터 설치, 철거까지 한 번에" />
        <a
          href={telHref}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 rounded-2xl bg-sky-soft px-6 py-5 text-lg font-black text-ink shadow-lg shadow-sky/30 hover:bg-sky md:text-xl"
        >
          <PhoneIcon className="size-5" />
          {site.phone} · 바로 연결
        </a>
        <p className="mt-3 text-center text-sm text-navy/55">
          모델명과 증상만 말씀해 주시면 상담해 드립니다
        </p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            return (
              <li key={s.id} className="rounded-2xl border border-navy/10 bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-navy/65">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="취급 브랜드"
          title="전 브랜드 취급"
          desc="목록에 없는 모델도 문의 주시면 확인해 드립니다."
          dark
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <li
              key={b}
              className="flex h-14 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-medium md:text-[15px]"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <SectionTitle eyebrow="진행 과정" title="이렇게 진행됩니다" />
      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-navy/10 p-7">
            <span className="text-sm font-black text-sky">STEP {String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-navy/60">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

async function BlogPosts() {
  const posts = await getLatestPosts();
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-mist/60 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="작업 사례"
          title="최근 작업 소식"
          desc="네이버 블로그에 올린 작업 사례와 관리 팁을 확인해 보세요."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.link} className={i >= 3 ? "hidden sm:block" : undefined}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white hover:border-sky"
              >
                {post.thumbnail && (
                  <div className="aspect-[4/3] overflow-hidden bg-mist">
                    {/* 네이버 썸네일은 리퍼러가 있으면 403이라 next/image 대신 no-referrer img 사용 */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.thumbnail}
                      alt=""
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold text-sky">{post.category}</p>
                  <h3 className="mt-2 line-clamp-2 text-lg leading-snug font-bold group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
                  <p className="mt-auto pt-4 text-xs text-navy/45">{post.date}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-10 flex w-fit items-center gap-1.5 rounded-xl border border-navy/15 bg-white px-6 py-3.5 font-bold hover:border-sky"
        >
          블로그에서 더 보기
          <ArrowIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white md:px-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,191,229,0.3),transparent_60%)]" />
        <div className="relative">
          <p className="text-sm font-bold text-sky">문의</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-[2.75rem]">지금 바로 문의하세요</h2>
          <p className="mt-4 text-white/75">모델명과 증상을 문자로 보내주시면 30분 내로 회신드립니다.</p>
          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
            <a
              href={telHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-soft px-6 py-4 text-lg font-bold text-ink hover:bg-sky"
            >
              <PhoneIcon className="size-5" />
              {site.phone}
            </a>
            <a
              href={smsHref}
              className="flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold ring-1 ring-white/40 hover:bg-white/10"
            >
              <MessageIcon className="size-5" />
              문자하기
            </a>
          </div>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1 text-sm text-white/75 underline-offset-4 hover:underline"
          >
            작업 사례는 네이버 블로그에서 확인하세요
            <ArrowIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
          <p>
            {site.tagline} · 문의 <a href={telHref} className="font-medium text-navy">{site.phone}</a>
          </p>
          <p>© {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
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
