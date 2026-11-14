import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  BoxIcon,
  CheckIcon,
  ClockIcon,
  MessageIcon,
  PhoneIcon,
  ShieldIcon,
  TrashIcon,
} from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { ContactCta, SectionTitle } from "@/components/sections";
import { serviceIcons } from "@/components/site-chrome";
import { JsonLd } from "@/components/json-ld";
import { getLatestPosts } from "@/lib/blog";
import { businessNode, graph, websiteNode } from "@/lib/schema";
import {
  brands,
  highlights,
  reviews,
  services,
  site,
  smsHref,
  steps,
  symptoms,
  telHref,
} from "@/lib/site";

const highlightIcons = {
  brands: ShieldIcon,
  reply: ClockIcon,
  restore: TrashIcon,
  parts: BoxIcon,
};

export default function Home() {
  return (
    <>
      <JsonLd data={graph(businessNode, websiteNode)} />
      <Hero />
      <Highlights />
      <Symptoms />
      <Reviews />
      <Services />
      <Brands />
      <Process />
      <LatestCases />
      <ContactCta />
    </>
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
          {["서울 · 인천 · 경기 출장", "문자 주시면 30분 내 회신", "전 브랜드 취급"].map((t) => (
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

function Reviews() {
  return (
    <section id="reviews" className="bg-mist/60 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="고객 후기" title="이용 고객님들의 이야기" />
      </div>
      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] motion-reduce:overflow-x-auto">
        {/* 목록을 두 번 이어 붙이고 -50%만큼 이동시켜 끊김 없이 반복. pl-4는 gap과 같아야 이음새가 맞음 */}
        <ul className="flex w-max animate-marquee gap-4 pl-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...reviews, ...reviews].map((r, i) => (
            <li
              key={i}
              aria-hidden={i >= reviews.length}
              className="flex w-80 flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:w-96"
            >
              <ul className="flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <li key={t} className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-brand">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 line-clamp-6 leading-relaxed text-navy/80">{r.body}</p>
              <p className="mt-auto pt-5 text-sm text-navy/50">
                <span className="font-bold text-navy">{r.name}</span>
                {r.date && <> · {r.date}</>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
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

async function LatestCases() {
  const posts = await getLatestPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-mist/60 py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle eyebrow="작업 사례" title="최근 작업 소식" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.link} className={i === 2 ? "sm:hidden lg:block" : undefined}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
        <Link
          href="/cases"
          className="mx-auto mt-10 flex w-fit items-center gap-1.5 rounded-xl border border-navy/15 bg-white px-6 py-3.5 font-bold hover:border-sky"
        >
          작업 사례 전체 보기
          <ArrowIcon className="size-4" />
        </Link>
      </div>
    </section>
  );
}
