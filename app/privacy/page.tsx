import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-[#302833] text-white py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#a1d8e2] hover:text-[#ffdc00] transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            ホームページに戻る
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            プライバシーポリシー
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              興戸アプリ開発ラボ BDC（以下「当ラボ」）は、ご利用者様の個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. 個人情報の収集について</h2>
            <p className="mb-4">当ラボでは、以下の場合に個人情報を収集することがあります：</p>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">収集する情報</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>属性（学生、企業関係者、その他）</li>
              <li>所属・詳細（大学名、会社名など）</li>
              <li>お問い合わせ内容</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">収集方法</h3>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Webサイトのお問い合わせフォーム</li>
              <li>メールでの直接連絡</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. 個人情報の利用目的</h2>
            <p className="mb-4">収集した個人情報は以下の目的で利用いたします：</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>お問い合わせへの回答・対応</li>
              <li>サービスに関するご案内</li>
              <li>協業・参加に関するご連絡</li>
              <li>サービス改善のための統計的分析（個人を特定しない形で）</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. 個人情報の管理・保護</h2>
            <p className="mb-6">
              当ラボは、個人情報の漏洩、滅失、毀損等を防止するため、適切なセキュリティ対策を実施いたします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. 第三者への提供</h2>
            <p className="mb-4">当ラボは、以下の場合を除き、個人情報を第三者に提供することはありません：</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護に必要な場合</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p className="mb-6">
              ご本人から個人情報の開示・訂正・削除等の請求があった場合、当ラボは適切に対応いたします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. お問い合わせ窓口</h2>
            <p className="mb-4">個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="font-semibold text-gray-900 mb-2">興戸アプリ開発ラボ BDC</p>
              <p>メール：<a href="mailto:itimainasuiti@gmail.com" className="text-[#68a9cf] hover:underline">itimainasuiti@gmail.com</a></p>
              <p>住所：〒610-0332 京都府京田辺市興戸和井田56-1 A&Kビル 201</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. プライバシーポリシーの変更</h2>
            <p className="mb-6">
              当ラボは、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、Webサイト上でお知らせいたします。
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <strong>制定日：2025年8月</strong><br />
                興戸アプリ開発ラボ BDC
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 