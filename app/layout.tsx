import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "京田辺ラボ BDC | 同志社大学生（京田辺）のエンジニア組織",
  description: "京田辺ラボ BDCは、AI駆動開発を軸とし企業のビジネス課題を解決する学生エンジニア組織です。財務・会計系AIエージェント、基幹システム統合、EC系システム開発を手がけています。",
  keywords: "AI開発, 学生エンジニア, システム開発, 京田辺, 同志社大学, AIエージェント, EC系システム",
  authors: [{ name: "京田辺ラボ BDC" }],
  creator: "京田辺ラボ BDC",
  publisher: "京田辺ラボ BDC",
  openGraph: {
    title: "京田辺ラボ BDC | 同志社大学生（京田辺）のエンジニア組織",
    description: "AI駆動開発により企業のビジネス課題を解決する学生エンジニア組織",
    url: "https://bdc-office.railway.app",
    siteName: "京田辺ラボ BDC",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "京田辺ラボ BDC",
    description: "AI駆動開発で未来を創る学生エンジニア集団",
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
              "name": "京田辺ラボ BDC",
              "alternateName": "BDC",
              "description": "同志社大学京田辺キャンパスを拠点とする学生エンジニア組織",
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
