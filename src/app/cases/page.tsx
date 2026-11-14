import { ArrowIcon } from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { ContactCta, PageHero } from "@/components/sections";
import { getLatestPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/page-metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/cases",
  title: "작업 사례",
  description: "싱크24 음식물처리기 AS · 이전설치 · 철거 작업 사례. 블랙홀, 그린퀸, 싱크리더 등 실제 현장 작업 기록을 확인해 보세요.",
});

export default async function CasesPage() {
  const posts = await getLatestPosts(30);

  return (
    <>
      <PageHero
        eyebrow="작업 사례"
        title="최근 작업 소식"
        desc="네이버 블로그에 올린 작업 사례와 관리 팁을 확인해 보세요."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        {posts.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.link}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-navy/60">작업 사례를 불러오지 못했습니다. 아래 블로그에서 확인해 주세요.</p>
        )}
        <a
          href={site.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-10 flex w-fit items-center gap-1.5 rounded-xl border border-navy/15 bg-white px-6 py-3.5 font-bold hover:border-sky"
        >
          블로그에서 더 보기
          <ArrowIcon className="size-4" />
        </a>
      </section>
      <ContactCta />
    </>
  );
}
