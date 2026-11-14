import { brands, faqCategories, services, site } from "@/lib/site";

/** AI 답변 엔진용 사이트 요약 (https://llmstxt.org). 빌드 시 정적 생성 */
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- 전화 · 문자: ${site.phone} (문자 주시면 30분 내 회신)`,
    "- 출장 지역: 서울 · 인천 · 경기 수도권 전 지역",
    `- 취급 브랜드: ${brands.join(", ")} 등 전 브랜드`,
    "",
    "## 서비스",
    "",
    ...services.map((s) => `- ${s.title}: ${s.body}`),
    "",
    "## 페이지",
    "",
    `- [홈](${site.url}/): 서비스, 취급 브랜드, 진행 과정, 고객 후기`,
    `- [자주 묻는 질문](${site.url}/faq): 증상 · 서비스 · 비용 관련 질문과 답변`,
    `- [작업 사례](${site.url}/cases): 실제 현장 작업 기록`,
    `- [문의하기](${site.url}/contact): 전화 · 문자 문의 방법`,
    `- [네이버 블로그](${site.blogUrl}): 작업 사례와 관리 팁 원문`,
    "",
    "## 자주 묻는 질문",
    ...faqCategories.flatMap((c) => [
      "",
      `### ${c.title}`,
      ...c.items.flatMap((f) => ["", `Q. ${f.q}`, `A. ${f.a}`]),
    ]),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
