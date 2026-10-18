import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

export type BlogPost = {
  title: string;
  link: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail: string | null;
};

const RSS_URL = `https://rss.blog.naver.com/${new URL(site.blogUrl).pathname.slice(1)}.xml`;

function tag(item: string, name: string) {
  const m = item.match(new RegExp(`<${name}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`));
  return m ? m[1].trim() : "";
}

function decode(text: string) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function toExcerpt(html: string) {
  const text = decode(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    // 모든 글 앞에 붙는 인사말 · 연락처 안내 문구 제거
    .replace(/^.*?회신드립니다\)\s*/, "")
    .trim();
  return text.length > 90 ? `${text.slice(0, 90)}…` : text;
}

function formatDate(pubDate: string) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(d)
    .replace(/\.\s?/g, ".")
    .replace(/\.$/, "");
}

export async function getLatestPosts(limit = 6): Promise<BlogPost[]> {
  "use cache";
  cacheLife("days");

  try {
    const res = await fetch(RSS_URL);
    if (!res.ok) return [];
    const xml = await res.text();

    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => {
      const description = tag(item, "description");
      return {
        title: decode(tag(item, "title")),
        link: tag(item, "guid") || tag(item, "link").split("?")[0],
        date: formatDate(tag(item, "pubDate")),
        category: decode(tag(item, "category")),
        excerpt: toExcerpt(description),
        thumbnail: description.match(/<img src="([^"]+)"/)?.[1] ?? null,
      };
    });
  } catch {
    return [];
  }
}
