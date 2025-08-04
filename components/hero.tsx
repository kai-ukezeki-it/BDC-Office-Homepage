"use client"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-custom-950 via-custom-900 to-custom-800 text-white">
      {/* トップナビゲーション */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#302833] backdrop-blur-md border-b border-[#a1d8e2]/20 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-white font-bold text-lg md:text-xl hover:text-[#ffdc00] transition-all duration-300 transform hover:scale-105"
          >
            興戸アプリ開発ラボ BDC
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#mission"
                  className="text-white hover:text-[#ffdc00] px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  コンセプト
                </a>
              </li>
              <li>
                <a
                  href="#business-content"
                  className="text-white hover:text-[#ffdc00] px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  事業内容
                </a>
              </li>
              <li>
                <a
                  href="#tech-environment"
                  className="text-white hover:text-[#ffdc00] px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  技術・開発環境
                </a>
              </li>
              <li>
                <a
                  href="#members"
                  className="text-white hover:text-[#ffdc00] px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  メンバー紹介
                </a>
              </li>
              <li>
                <a
                  href="#access"
                  className="text-white hover:text-[#ffdc00] px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  アクセス
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-[#ffdc00] text-custom-950 hover:bg-[#ffdc00]/90 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  メンバー募集・お問い合わせ
                </a>
              </li>
            </ul>
          </nav>

          {/* モバイルハンバーガーボタン */}
          <button
            className="lg:hidden text-white hover:text-[#ffdc00] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#302833] border-t border-[#a1d8e2]/20">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#mission"
                    className="block text-white hover:text-[#ffdc00] px-4 py-3 text-base font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    コンセプト
                  </a>
                </li>
                <li>
                  <a
                    href="#business-content"
                    className="block text-white hover:text-[#ffdc00] px-4 py-3 text-base font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    事業内容
                  </a>
                </li>
                <li>
                  <a
                    href="#tech-environment"
                    className="block text-white hover:text-[#ffdc00] px-4 py-3 text-base font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    技術・開発環境
                  </a>
                </li>
                <li>
                  <a
                    href="#members"
                    className="block text-white hover:text-[#ffdc00] px-4 py-3 text-base font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    メンバー紹介
                  </a>
                </li>
                <li>
                  <a
                    href="#access"
                    className="block text-white hover:text-[#ffdc00] px-4 py-3 text-base font-medium hover:bg-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    アクセス
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#contact"
                    className="block bg-[#ffdc00] text-custom-950 hover:bg-[#ffdc00]/90 px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    メンバー募集・お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-0">
        {/* 背景画像 (Next.js 画像最適化) */}
                 <Image
           src="/hero-background-new.png"
           alt="Hero background"
           fill
           priority
           quality={85}
           sizes="100vw"
           placeholder="blur"
           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
           className="object-cover"
         />

        {/* 動的グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-custom-950/90 via-custom-900/85 to-[#68a9cf]/40 z-10"></div>

        {/* 動的な幾何学パターン */}
        <div className="absolute inset-0 z-5 opacity-20">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a1d8e2" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#68a9cf" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffdc00" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0 400L300 200L600 500L900 100L1200 300"
              stroke="url(#heroGradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <circle
              cx="300"
              cy="200"
              r="4"
              fill="#a1d8e2"
              opacity="0.8"
              className="animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <circle
              cx="600"
              cy="500"
              r="4"
              fill="#68a9cf"
              opacity="0.8"
              className="animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="900"
              cy="100"
              r="4"
              fill="#ffdc00"
              opacity="0.8"
              className="animate-bounce"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-20 px-4 py-20 md:py-32 mx-auto text-center mt-16">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] text-custom-950 px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg animate-pulse">
              Next Generation Development
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-12 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#a1d8e2] to-[#ffdc00] bg-clip-text text-transparent animate-pulse">
              AI駆動開発を常識に。
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100 leading-relaxed font-light">
            私たちはAI駆動開発により"つくる"ことではなく、その業務の本質的な価値に集中し、従来の業務プロセスをAIネイティブへ刷新します。
            <br />
            これにより、自然言語という柔軟かつ繊細な人間固有の強みとAIの処理能力を融合させることで、人口減少という制約を乗り越え、企業のイノベーション創出に向けた新たな可能性を切り拓きます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-[#ffdc00] hover:bg-[#ffdc00]/90 text-custom-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              問い合わせる
            </a>
            <a
              href="#mission"
              className="border-2 border-[#a1d8e2] text-[#a1d8e2] hover:bg-[#a1d8e2] hover:text-custom-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              詳しく見る
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#mission"
          className="text-[#a1d8e2] hover:text-[#ffdc00] transition-colors duration-300 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
