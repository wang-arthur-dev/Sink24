import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
