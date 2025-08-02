"use client"
import { Code, Zap, Cloud, Rocket } from "lucide-react"

export default function TechEnvironment() {
  const techAreas = [
    {
      title: "AI駆動開発による圧倒的な開発速度",
      description:
        "私たちはCursor、Claude Codeを日常的に活用し、従来の開発プロセスを根本から変革しています。コード生成からデバッグ、品質チェックまでAIが支援することで、開発速度を3倍以上に向上させ、メンバーはより本質的な課題解決と創造的な設計に集中できる環境を実現しています。",
      icon: <Zap className="h-8 w-8" />,
      color: "#a1d8e2",
    },
    {
      title: "最新LLM技術の戦略的活用",
      description:
        "GPT-4、Claude、Geminiなど主要LLMサービスを適材適所で使い分け、各々の強みを最大化したハイブリッドAIシステムを構築。LangChainフレームワークとベクトルデータベース（Pinecone、Chroma）を組み合わせることで、クライアントの企業データと連携した高精度なRAGシステムを短期間で実装しています。",
      icon: <Code className="h-8 w-8" />,
      color: "#68a9cf",
    },
    {
      title: "クラウドネイティブな開発基盤",
      description:
        "AWSをメインプラットフォームとし、PythonとTypeScriptによるフルスタック開発を実践。FastAPI/Djangoでの高性能バックエンド構築から、Next.js/Reactでのモダンフロントエンド開発まで、Docker/Kubernetesによるコンテナ化とGitHub Actionsでの自動デプロイにより、安定した本番環境への継続的デリバリーを実現しています。",
      icon: <Cloud className="h-8 w-8" />,
      color: "#68a9cf",
    },
    {
      title: "次世代プロトタイピング環境",
      description:
        "v0やGenspark等の最新AI設計ツールを導入し、アイデアから実装までの時間を大幅に短縮。従来数週間かかっていたプロトタイプ開発を数日で完了させ、クライアントとの迅速な検証サイクルを可能にしています。",
      icon: <Rocket className="h-8 w-8" />,
      color: "#a1d8e2",
    },
  ]

  return (
    <section
      id="tech-environment"
      className="py-32 bg-gradient-to-r from-gray-50 via-white to-[#a1d8e2]/5 relative overflow-hidden text-custom-950"
    >
      {/* 技術的な背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M10 10h40M10 30h15m10 0h15M10 50h40M30 10v40" stroke="#68a9cf" strokeWidth="1" opacity="0.3" />
              <circle cx="20" cy="20" r="2" fill="#a1d8e2" opacity="0.5" />
              <circle cx="40" cy="40" r="2" fill="#68a9cf" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* セクションヘッダー - 左寄せデザイン */}
        <div className="text-left mb-20 animate-on-scroll">
          <div className="flex items-center justify-start mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] mr-4"></div>
            <span className="text-[#68a9cf] font-bold text-lg tracking-wider uppercase">Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-custom-950">技術・開発環境</h2>
          <p className="text-xl text-custom-700 max-w-4xl mr-auto leading-relaxed">
            効率的で高品質なシステム開発を実現するため、私たちは常に最新の技術スタックを導入し、従来の開発プロセスを根本から変革しています。人間とAIが協働する理想的な開発環境を構築することで、開発速度と品質を両立させています。
          </p>
        </div>

        {/* 技術カード - マソンリーレイアウト風 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techAreas.map((area, index) => (
            <div
              key={index}
              className={`${index === 1 || index === 2 ? "md:mt-12" : ""} animate-on-scroll delay-${index * 150}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: area.color }}
                  >
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-custom-950 leading-tight group-hover:text-[#68a9cf] transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <p className="text-custom-700 leading-relaxed mb-6">{area.description}</p>
                <div className="flex items-center">
                  <div
                    className="w-12 h-1 rounded-full group-hover:w-20 transition-all duration-300"
                    style={{ backgroundColor: area.color }}
                  ></div>
                  <div className="w-2 h-2 bg-[#ffdc00] rounded-full ml-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
