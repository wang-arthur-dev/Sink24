import type { BlogPost } from "@/lib/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
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
        <h3 className="mt-2 line-clamp-2 text-lg leading-snug font-bold group-hover:text-brand">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
        <p className="mt-auto pt-4 text-xs text-navy/45">{post.date}</p>
      </div>
    </a>
  );
}
