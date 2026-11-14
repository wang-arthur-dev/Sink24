import { JsonLd } from "@/components/json-ld";
import { ContactCta, PageHero } from "@/components/sections";
import { pageMetadata } from "@/lib/page-metadata";
import { breadcrumb, businessNode, graph, ids, websiteNode } from "@/lib/schema";
import { faqCategories, faqs, faqUpdated, site } from "@/lib/site";

const path = "/faq";
const pageUrl = `${site.url}${path}`;
const title = "음식물처리기 자주 묻는 질문";
const description =
  "음식물처리기 칼날 고장, 배수 막힘, 소음, 누수부터 이전설치, 철거 · 원상복구, 부품 구매, 출장 지역, 수리 비용까지 싱크24가 자주 받는 질문에 답했습니다.";

export const metadata = pageMetadata({ path, title, description });

const jsonLd = graph(
  {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    name: `${title} | ${site.name}`,
    description,
    inLanguage: "ko-KR",
    dateModified: faqUpdated,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.business },
    publisher: { "@id": ids.business },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      "@id": `${pageUrl}#${f.id}`,
      url: `${pageUrl}#${f.id}`,
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a, url: `${pageUrl}#${f.id}` },
    })),
  },
  breadcrumb(path, "자주 묻는 질문"),
  businessNode,
  websiteNode,
);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="FAQ"
        title={title}
        desc="궁금한 점이 여기 없다면 편하게 전화나 문자로 물어봐 주세요."
      />

      <div className="mx-auto max-w-3xl px-4 pt-12 md:px-6">
        <nav aria-label="질문 분류">
          <ul className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="block rounded-full border border-navy/15 px-4 py-2 text-sm font-bold hover:border-sky hover:text-brand"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-14 px-4 py-12 md:px-6 md:py-16">
        {faqCategories.map((c) => (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-40">
            <h2 id={`${c.id}-title`} className="text-2xl font-black tracking-tight">
              {c.title}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {c.items.map((f) => (
                <li key={f.id}>
                  {/* 답변은 접혀 있어도 HTML에 그대로 있어 검색 · AI 크롤러가 읽을 수 있음 */}
                  <details id={f.id} className="group scroll-mt-40 rounded-2xl border border-navy/10 bg-white open:border-sky">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="flex gap-3 text-lg font-bold">
                        <span aria-hidden className="text-sky">Q.</span>
                        {f.q}
                      </h3>
                      <span
                        aria-hidden
                        className="text-2xl leading-none text-navy/40 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="px-6 pb-6 pl-[3.25rem] leading-relaxed text-navy/70">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="text-center text-sm text-navy/45">
          최종 업데이트 <time dateTime={faqUpdated}>{faqUpdated.replaceAll("-", ".")}</time>
        </p>
      </div>

      <ContactCta />
    </>
  );
}
