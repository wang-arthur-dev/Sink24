import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Footer, Header, MobileCallBar, TopBar } from "@/components/site-chrome";
import { site } from "@/lib/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700", "900"],
  preload: false,
});

const title = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "싱크24",
    "음식물처리기 AS",
    "음식물처리기 수리",
    "음식물처리기 이전설치",
    "음식물처리기 철거",
    "음식물처리기 원상복구",
    "블랙홀 음식물처리기",
    "디스포저",
    "서울 음식물처리기 수리",
    "인천 음식물처리기 수리",
    "경기 음식물처리기 수리",
  ],
  alternates: { canonical: "/" },
  verification: {
    other: { "naver-site-verification": "ba8be783f877b8aafcef8e3c4f8faf6fe978b01a" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
