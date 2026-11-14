import { services, site } from "@/lib/site";

/** 페이지들이 같은 엔티티를 가리키도록 고정 @id 사용 */
export const ids = {
  business: `${site.url}/#business`,
  website: `${site.url}/#website`,
};

export const businessNode = {
  "@type": "LocalBusiness",
  "@id": ids.business,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+82-${site.phone.slice(1)}`,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/opengraph-image.png`,
  sameAs: [site.blogUrl],
  areaServed: site.serviceAreas.map((name) => ({ "@type": "AdministrativeArea", name })),
  knowsAbout: ["음식물처리기 수리", "음식물처리기 이전설치", "음식물처리기 철거", "디스포저"],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.body },
  })),
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": ids.website,
  url: site.url,
  name: site.name,
  inLanguage: "ko-KR",
  publisher: { "@id": ids.business },
};

export function breadcrumb(path: string, name: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${path}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
