import Link from "next/link";
import { ArrowIcon, CheckIcon, ClockIcon, MessageIcon, PhoneIcon } from "@/components/icons";
import { PageHero } from "@/components/sections";
import { pageMetadata } from "@/lib/page-metadata";
import { site, smsHref, steps, telHref } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/contact",
  title: "문의하기",
  description: `음식물처리기 AS · 이전설치 · 철거 문의. 서울 · 인천 · 경기 수도권 출장. 모델명과 증상을 문자로 보내주시면 30분 내 회신드립니다. ${site.phone}`,
});

const checklist = [
  "제품 모델명 (본체 스티커에 적혀 있어요)",
  "증상 (안 돌아감, 막힘, 소음, 누수 등)",
  "제품 · 싱크대 하부 사진이나 영상",
  "방문 받으실 지역 (서울 · 인천 · 경기 수도권 전 지역 가능)",
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="문의" title="문의하기" desc="전화나 문자 중 편한 방법으로 연락 주세요." />

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
        <a
          href={telHref}
          className="group flex flex-col rounded-3xl bg-ink p-8 text-white md:p-10"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-sky-soft text-ink">
            <PhoneIcon className="size-6" />
          </span>
          <p className="mt-6 text-sm font-bold text-sky">전화 상담</p>
          <p className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{site.phone}</p>
          <p className="mt-3 text-white/70">통화로 증상을 말씀해 주시면 바로 상담해 드립니다.</p>
          <span className="mt-8 inline-flex items-center gap-1 font-bold text-sky group-hover:underline">
            전화 걸기 <ArrowIcon className="size-4" />
          </span>
        </a>
        <a
          href={smsHref}
          className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-8 hover:border-sky md:p-10"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-white">
            <MessageIcon className="size-6" />
          </span>
          <p className="mt-6 text-sm font-bold text-sky">문자 상담</p>
          <p className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{site.phone}</p>
          <p className="mt-3 flex items-center gap-1.5 text-navy/65">
            <ClockIcon className="size-4 text-sky" />
            문자 주시면 30분 내로 회신드립니다.
          </p>
          <span className="mt-8 inline-flex items-center gap-1 font-bold text-brand group-hover:underline">
            문자 보내기 <ArrowIcon className="size-4" />
          </span>
        </a>
      </section>

      <section className="bg-mist/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">문자 보내실 때 알려주세요</h2>
            <p className="mt-3 text-navy/60">아래 내용을 함께 보내주시면 더 빠르고 정확하게 안내해 드립니다.</p>
            <ul className="mt-6 flex flex-col gap-3">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-sky" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">이렇게 진행됩니다</h2>
            <ol className="mt-6 flex flex-col gap-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl bg-white p-5">
                  <span className="text-sm font-black text-sky">STEP {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
        <p className="text-navy/60">문의 전에 궁금한 점이 있으신가요?</p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-navy/15 px-6 py-3.5 font-bold hover:border-sky"
          >
            자주 묻는 질문 <ArrowIcon className="size-4" />
          </Link>
          <Link
            href="/cases"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-navy/15 px-6 py-3.5 font-bold hover:border-sky"
          >
            작업 사례 보기 <ArrowIcon className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
