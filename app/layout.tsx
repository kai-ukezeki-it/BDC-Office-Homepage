import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "興戸アプリ開発ラボ BDC | AI駆動開発で未来を創る学生エンジニア集団",
  description: "興戸アプリ開発ラボ BDCは、同志社大学京田辺キャンパスを拠点とするAI・システム開発サークル。理工学部情報工学科・電子工学科・電気工学科・インテリジェント情報工学科・情報システムデザイン学科の学生が中心となり、企業向けAIエージェント・基幹システム統合・アプリ開発を手がける学生エンジニア集団です。",
  keywords: "アプリ開発, 興戸, 同志社大学, サークル, AI, 研究会, システム開発, インターン, 京田辺, duet 同志社, single sign on 同志社, F率 同志社, 同志社前, 理工学部, 電子工学科, 電気工学科, 情報工学科, インテリジェント情報工学科, 情報システムデザイン学科, 京田辺キャンパス, 学生エンジニア, AIエージェント, 機械学習, プログラミング, Web開発, Python, React, Next.js, 同志社大学生, 開発サークル, AIサークル, プログラミングサークル, 学研都市, 同志社システム開発, 同志社アプリ開発",
  authors: [{ name: "興戸アプリ開発ラボ BDC" }],
  creator: "興戸アプリ開発ラボ BDC",
  publisher: "興戸アプリ開発ラボ BDC",
  openGraph: {
    title: "興戸アプリ開発ラボ BDC | 同志社大学京田辺キャンパス発AI開発サークル",
    description: "同志社大学理工学部を中心とした学生によるAI・システム開発サークル。アプリ開発からAIエージェント開発まで幅広く手がける学生エンジニア集団",
    url: "https://bdc-office.railway.app",
    siteName: "興戸アプリ開発ラボ BDC",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "興戸アプリ開発ラボ BDC | 同志社大学AI開発サークル",
    description: "同志社大学京田辺キャンパス発のAI・アプリ開発サークル。理工学部学生が中心の学生エンジニア集団",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* ヒーロー画像のみプリロード（軽量化済み） */}
        <link
          rel="preload"
          as="image"
          href="/hero-background-new.png"
          type="image/png"
        />
        
        {/* 構造化データ（JSON-LD）- SEO強化 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "興戸アプリ開発ラボ BDC",
              "alternateName": "BDC",
              "description": "同志社大学京田辺キャンパスを拠点とするAI・システム開発サークル",
              "url": "https://bdc-office.railway.app",
              "logo": "https://bdc-office.railway.app/BDC-office icon.png",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "京田辺市",
                "addressRegion": "京都府",
                "addressCountry": "JP"
              },
              "memberOf": {
                "@type": "EducationalOrganization",
                "name": "同志社大学",
                "alternateName": "Doshisha University"
              },
              "knowsAbout": [
                "アプリ開発",
                "AI開発",
                "システム開発",
                "機械学習",
                "Web開発",
                "Python",
                "React",
                "Next.js"
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "同志社大学生",
                "geographicArea": {
                  "@type": "Place",
                  "name": "京田辺キャンパス"
                }
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
