import Link from "next/link";
import { ArrowIcon, MessageIcon, PhoneIcon } from "@/components/icons";
import { site, smsHref, telHref } from "@/lib/site";

export function SectionTitle({
  eyebrow,
  title,
  desc,
  dark = false,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold text-sky">{eyebrow}</p>
      <Heading className="mt-3 text-3xl font-black tracking-tight md:text-[2.75rem] md:leading-tight">
        {title}
      </Heading>
      {desc && <p className={`mt-4 ${dark ? "text-white/70" : "text-navy/60"}`}>{desc}</p>}
    </div>
  );
}

/** 서브 페이지 상단 제목 영역 */
export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="bg-mist/60 px-4 py-16 md:px-6 md:py-20">
      <SectionTitle eyebrow={eyebrow} title={title} desc={desc} as="h1" />
    </section>
  );
}

/** 페이지 하단 전화 · 문자 CTA 배너 */
export function ContactCta({ moreHref = "/contact", moreLabel = "문의 안내 자세히 보기" }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-6">
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
          <Link
            href={moreHref}
            className="mt-8 inline-flex items-center gap-1 text-sm text-white/75 underline-offset-4 hover:underline"
          >
            {moreLabel}
            <ArrowIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
