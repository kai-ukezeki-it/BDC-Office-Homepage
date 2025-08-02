export default function Mission() {
  return (
    <section
      id="mission"
      className="py-32 bg-gradient-to-tr from-white via-gray-50 to-[#a1d8e2]/10 relative overflow-hidden text-custom-950"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <radialGradient id="missionGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a1d8e2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#68a9cf" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="100" fill="url(#missionGradient)" className="animate-pulse" />
          <circle
            cx="1000"
            cy="600"
            r="150"
            fill="url(#missionGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="600"
            cy="100"
            r="80"
            fill="url(#missionGradient)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* セクションヘッダー - 左寄せデザイン */}
          <div className="mb-20 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] mr-4"></div>
              <span className="text-[#68a9cf] font-bold text-lg tracking-wider uppercase">Concept</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-custom-950 leading-tight">コンセプト</h2>
          </div>

          {/* コンテンツエリア - 非対称レイアウト */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
            {/* メインコンテンツ */}
            <div className="animate-on-scroll delay-200">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#a1d8e2]/20 hover:shadow-3xl transition-all duration-500">
                <p className="text-lg md:text-xl text-custom-800 leading-relaxed space-y-6">
                  <span className="block">
                    BDCは、システムを通じて企業のビジネス課題を解決する学生エンジニア集団です。
                  </span>

                  <span className="block">
                    私たちが目指すのは、単なる効率化ではありません。"仕事はしても良い"という新しい価値観を創造し、一人ひとりが社会とAIと調和しながら独自の価値を生み出す——そんな未来を実現する出発点を作ることが私たちの使命です。
                  </span>

                  <span className="block">
                    参加メンバーが全員、初めからスキルを持っていたわけではありません。しかし学習意欲と継続的な努力があれば、必要な技術力は実践を通じて確実に身につきます。
                  </span>

                  <span className="block font-semibold text-[#68a9cf]">
                    AIが普及する時代に人間が本当に価値を発揮できる働き方を、私たちと共に創造していきませんか。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
