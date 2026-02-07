import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "天机阁 | TianJiGe - AI命理平台",
  description: "融合五千年智慧与现代AI科技的命理平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} ${lexend.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
