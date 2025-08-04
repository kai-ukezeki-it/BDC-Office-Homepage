import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "興戸アプリ開発ラボ BDC | AI駆動開発で未来を創る学生エンジニア集団",
  description: "興戸アプリ開発ラボ BDCは、AI駆動開発により企業のビジネス課題を解決する学生エンジニア集団です。財務・会計系AIエージェント、基幹システム統合、EC系システム開発を手がけています。",
  keywords: "AI開発, 学生エンジニア, システム開発, 京田辺, 同志社大学, AIエージェント, EC系システム",
  authors: [{ name: "興戸アプリ開発ラボ BDC" }],
  creator: "興戸アプリ開発ラボ BDC",
  publisher: "興戸アプリ開発ラボ BDC",
  openGraph: {
    title: "興戸アプリ開発ラボ BDC | AI駆動開発で未来を創る",
    description: "AI駆動開発により企業のビジネス課題を解決する学生エンジニア集団",
    url: "https://bdc-office.railway.app",
    siteName: "興戸アプリ開発ラボ BDC",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "興戸アプリ開発ラボ BDC",
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
