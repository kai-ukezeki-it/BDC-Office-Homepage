import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#302833] text-white py-10 relative">

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 会社情報 */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="mb-6">
              <h3 className="text-3xl font-black bg-gradient-to-r from-[#a1d8e2] to-[#ffdc00] bg-clip-text text-transparent">
                興戸アプリ開発ラボ BDC
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              AI時代を創る学生開発拠点。自由な発想と挑戦を大切にし、次世代のAIエンジニアを育成しています。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="animate-on-scroll delay-100">
            <h4 className="text-xl font-bold mb-4 text-[#a1d8e2]">ナビゲーション</h4>
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
            <h4 className="text-xl font-bold mb-4 text-[#68a9cf]">お問い合わせ</h4>
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
        <div className="border-t border-gray-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 興戸アプリ開発ラボ BDC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-[#a1d8e2] transition-colors duration-300 text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#68a9cf] transition-colors duration-300 text-sm">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
