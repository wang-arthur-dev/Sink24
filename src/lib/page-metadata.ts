import type { Metadata } from "next";
import { site } from "@/lib/site";

/** 서브 페이지 메타데이터. openGraph · alternates는 얕게 병합되므로 페이지마다 통째로 지정 */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
