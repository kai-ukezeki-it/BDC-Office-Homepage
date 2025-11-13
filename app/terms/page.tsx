import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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
            利用規約
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              本利用規約（以下「本規約」）は、京田辺ラボ BDC（以下「当ラボ」）が運営するWebサイト（以下「本サイト」）の利用条件を定めるものです。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第1条（適用）</h2>
            <p className="mb-6">
              本規約は、本サイトを利用するすべての方（以下「利用者」）に適用されます。本サイトを利用することで、本規約に同意したものとみなします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第2条（利用条件）</h2>
            <p className="mb-4">1. 利用者は、本サイトを適切に利用するものとします</p>
            <p className="mb-4">2. 利用者は、以下の行為を行ってはならないものとします：</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>法令に違反する行為</li>
              <li>当ラボの権利を侵害する行為</li>
              <li>虚偽の情報を提供する行為</li>
              <li>本サイトの運営を妨害する行為</li>
              <li>その他、当ラボが不適切と判断する行為</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第3条（知的財産権）</h2>
            <p className="mb-4">
              1. 本サイトに含まれるコンテンツ（文章、画像、デザインなど）の著作権は、当ラボまたは正当な権利者に帰属します
            </p>
            <p className="mb-6">
              2. 利用者は、当ラボの事前の書面による許可なく、本サイトのコンテンツを複製、転載、配布することはできません
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第4条（お問い合わせの取扱い）</h2>
            <p className="mb-4">1. 利用者からのお問い合わせには、当ラボが適切と判断する方法で回答いたします</p>
            <p className="mb-4">2. お問い合わせの内容によっては、回答できない場合があります</p>
            <p className="mb-6">3. お問い合わせへの回答に要する時間は、内容により異なります</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第5条（サービスの変更・中断）</h2>
            <p className="mb-4">当ラボは、以下の場合に本サイトの運営を変更・中断することがあります：</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>システムメンテナンスを行う場合</li>
              <li>技術的な問題が発生した場合</li>
              <li>その他運営上必要と判断した場合</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第6条（免責事項）</h2>
            <p className="mb-4">1. 当ラボは、本サイトの情報の正確性、完全性、有用性について保証するものではありません</p>
            <p className="mb-4">2. 本サイトの利用により利用者に生じた損害について、当ラボは責任を負いません</p>
            <p className="mb-6">3. 本サイトからリンクされた外部サイトについて、当ラボは責任を負いません</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第7条（個人情報の保護）</h2>
            <p className="mb-6">
              個人情報の取扱いについては、別途定める「<Link href="/privacy" className="text-[#68a9cf] hover:underline">プライバシーポリシー</Link>」に従います。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第8条（規約の変更）</h2>
            <p className="mb-6">
              当ラボは、必要に応じて本規約を変更することがあります。変更した場合は、本サイト上でお知らせいたします。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第9条（準拠法・管轄裁判所）</h2>
            <p className="mb-4">1. 本規約は、日本法に準拠して解釈されます</p>
            <p className="mb-6">2. 本規約に関する紛争については、京都地方裁判所を第一審の専属的合意管轄裁判所とします</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">第10条（お問い合わせ）</h2>
            <p className="mb-4">本規約に関するお問い合わせは、以下までご連絡ください：</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="font-semibold text-gray-900 mb-2">京田辺ラボ BDC</p>
              <p>メール：<a href="mailto:itimainasuiti@gmail.com" className="text-[#68a9cf] hover:underline">itimainasuiti@gmail.com</a></p>
              <p>住所：〒610-0332 京都府京田辺市興戸和井田56-1 A&Kビル 201</p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <strong>制定日：2025年8月</strong><br />
                京田辺ラボ BDC
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 