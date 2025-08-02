import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#302833] text-white py-20 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a1d8e2" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#68a9cf" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffdc00" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#footerGradient)" className="animate-pulse" />
          <circle
            cx="1100"
            cy="500"
            r="100"
            fill="url(#footerGradient)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="600"
            cy="300"
            r="60"
            fill="url(#footerGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 会社情報 */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="mb-6">
              <h3 className="text-3xl font-black bg-gradient-to-r from-[#a1d8e2] to-[#ffdc00] bg-clip-text text-transparent">
                興戸アプリ開発ラボ BDC
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              AI時代を創る学生開発拠点。自由な発想と挑戦を大切にし、次世代のAIエンジニアを育成しています。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="animate-on-scroll delay-100">
            <h4 className="text-xl font-bold mb-6 text-[#a1d8e2]">ナビゲーション</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#mission"
                  className="text-gray-300 hover:text-[#ffdc00] transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  コンセプト
                </Link>
              </li>
              <li>
                <Link
                  href="#business-content"
                  className="text-gray-300 hover:text-[#ffdc00] transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  事業内容
                </Link>
              </li>
              <li>
                <Link
                  href="#tech-environment"
                  className="text-gray-300 hover:text-[#ffdc00] transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  技術・開発環境
                </Link>
              </li>
              <li>
                <Link
                  href="#members"
                  className="text-gray-300 hover:text-[#ffdc00] transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  メンバー紹介
                </Link>
              </li>
              <li>
                <Link
                  href="#access"
                  className="text-gray-300 hover:text-[#ffdc00] transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  アクセス
                </Link>
              </li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div className="animate-on-scroll delay-200">
            <h4 className="text-xl font-bold mb-6 text-[#68a9cf]">お問い合わせ</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#a1d8e2] mr-3" />
                <a
                  href="mailto:itimainasuiti@gmail.com"
                  className="text-gray-300 hover:text-[#ffdc00] transition-colors duration-300 text-sm"
                >
                  itimainasuiti@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#68a9cf] mr-3 mt-1" />
                <address className="text-gray-300 not-italic text-sm leading-relaxed">
                  〒610-0332<br />
                  京都府京田辺市興戸和井田56-1<br />
                  A&Kビル 201
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 興戸アプリ開発ラボ BDC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#a1d8e2] transition-colors duration-300 text-sm">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#68a9cf] transition-colors duration-300 text-sm">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
