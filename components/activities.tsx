"use client"
import { BrainCircuit, ShoppingCart, Combine, Zap } from "lucide-react"

export default function BusinessContent() {
  const businessAreas = [
    {
      title: "財務・会計系AIエージェント開発",
      description:
        "財務データの取得・整理・要約・分析を一気通貫で支援する財務分析AIエージェントを開発。企業の財務情報をもとにデータ分析・企業間比較など財務関連業務をエビデンス付きで自動化します。",
      icon: <BrainCircuit className="h-10 w-10" />,
      color: "#a1d8e2",
      bgGradient: "from-[#a1d8e2]/20 to-[#a1d8e2]/5",
    },
    {
      title: "全社基幹システムの統合、移行、AI導入支援",
      description:
        "複数のレガシーシステムを統合し、AI機能を組み込んだ新しい基幹システムへの移行を支援します。既存データの移行から新システムの構築、AI機能の実装まで一貫して対応。従業員の業務負荷を軽減しながら、データ活用による意思決定の高度化を実現します。",
      icon: <Combine className="h-10 w-10" />,
      color: "#68a9cf",
      bgGradient: "from-[#68a9cf]/20 to-[#68a9cf]/5",
    },
    {
      title: "EC系システム開発",
      description:
        "複数ECプラットフォームにおいて、既存統合ツールでは対応できない企業独自の業務フローに特化したシステムを開発します。各プラットフォームのAPI連携により売上データ、在庫情報、顧客分析を統一ダッシュボードで管理し、既存SaaSでは実現困難なカスタム分析や独自KPI可視化、企業特有のデータ連携要件に対応しています。",
      icon: <ShoppingCart className="h-10 w-10" />,
      color: "#a1d8e2",
      bgGradient: "from-[#a1d8e2]/20 to-[#a1d8e2]/5",
    },
    {
      title: "業務効率化ツール開発",
      description:
        "日常業務の中で発生する繰り返し作業をRPAやAIで自動化するツールを開発。文書作成の自動化、KPIデータの可視化、顧客対応の効率化など、人間がより創造的な業務に集中できる環境を提供します。導入から運用まで継続的にサポートします。",
      icon: <Zap className="h-10 w-10" />,
      color: "#68a9cf",
      bgGradient: "from-[#68a9cf]/20 to-[#68a9cf]/5",
    },
  ]

  return (
    <section id="business-content" className="py-32 bg-[#302833] relative overflow-hidden text-white">
      <div className="container px-4 mx-auto relative z-10">
        {/* セクションヘッダー - 中央寄せ */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-1 bg-[#a1d8e2] mr-3"></div>
            <span className="text-[#a1d8e2] font-bold text-lg tracking-wider uppercase">Business</span>
            <div className="w-8 h-1 bg-[#68a9cf] ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">事業内容</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            私たちは中小企業から大手企業まで、幅広いクライアントのビジネス課題をAI駆動開発で解決しています。従来の開発手法では困難だった複雑な要件や、既存ツールでは対応できない企業固有のニーズに対し、最新のAI技術を活用したカスタムソリューションを提供します。
          </p>
        </div>

        {/* カードグリッド - ジグザグレイアウト */}
        <div className="max-w-7xl mx-auto space-y-16">
          {businessAreas.map((area, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 animate-on-scroll delay-${index * 100}`}
            >
              {/* アイコンセクション */}
              <div className="flex-shrink-0 lg:w-1/3">
                <div
                  className={`relative bg-gradient-to-br ${area.bgGradient} rounded-3xl p-12 text-center group hover:scale-105 transition-all duration-500`}
                >
                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 shadow-2xl group-hover:rotate-12 transition-transform duration-500"
                    style={{ backgroundColor: area.color }}
                  >
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <div className="text-6xl font-black text-white/10 absolute top-4 right-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* コンテンツセクション */}
              <div className="flex-1 lg:w-2/3">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">{area.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{area.description}</p>
                  <div className="flex items-center mt-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#ffdc00] rounded-full ml-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
