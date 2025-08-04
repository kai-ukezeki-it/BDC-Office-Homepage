"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import Image from "next/image"

function InfiniteScrollMembers({ members }: { members: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 無限スクロール用に配列を3倍に複製
  const infiniteMembers = [...members, ...members, ...members]

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    if (isMobile) {
      // スマホ用：スムーズスクロール設定
      scrollContainer.style.scrollBehavior = 'smooth'
      scrollContainer.style.overflowX = 'scroll'
      scrollContainer.style.scrollSnapType = 'x mandatory'
      scrollContainer.style.webkitOverflowScrolling = 'touch'
    } else {
      // PC用：元の無限スクロール設定
      const cardWidth = 450 + 32 // カード幅(450px) + gap(32px) 
      const sectionWidth = members.length * cardWidth
      scrollContainer.scrollLeft = sectionWidth // 2番目のセットの開始位置

      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
        const maxScroll = scrollWidth - clientWidth

        // 右端に到達した場合、最初のセクションの同じ位置にジャンプ
        if (scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollLeft = sectionWidth + (scrollLeft - maxScroll)
        }
        // 左端に到達した場合、最後のセクションの同じ位置にジャンプ
        else if (scrollLeft <= 10) {
          scrollContainer.scrollLeft = sectionWidth + scrollLeft
        }
      }

      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [members.length, isMobile])

  // マウスドラッグ処理（PCのみ）
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current || isMobile) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // タッチ処理（PCのみ、スマホはネイティブスクロール）
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current || isMobile) return
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative animate-on-scroll">
      <div
        ref={scrollRef}
        className={`overflow-x-auto scrollbar-hide ${isMobile ? 'smooth-scroll ios-momentum-scroll hw-accelerated' : 'cursor-grab active:cursor-grabbing'}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-8 pb-4" style={{ width: "max-content" }}>
          {(isMobile ? members : infiniteMembers).map((member, index) => (
            <div
              key={`${member.nameJa}-${index}`}
              className="bg-white/10 backdrop-blur-sm border-2 border-gray-500/20 rounded-2xl p-6 transition-all duration-500 hover:shadow-glow-sm hover:border-blue-400/40 flex-shrink-0 select-none flex gap-6"
              style={{ 
                width: "450px", 
                height: "280px",
                ...(isMobile && { scrollSnapAlign: "start" })
              }}
            >
              {/* 左側：写真+名前+役職 */}
              <div className="flex flex-col items-center text-center" style={{ width: "170px" }}>
                {/* メンバー写真 */}
                <div className="w-[150px] h-[150px] relative overflow-hidden rounded-xl bg-gray-200 mb-4">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.nameJa} 
                    fill 
                    quality={85}
                    loading="lazy"
                    sizes="150px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    className="object-cover" 
                  />
                </div>

                {/* 名前 */}
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">{member.nameJa}</h3>
                <div className="text-sm text-gray-300 mb-2">{member.nameEn}</div>

                {/* 役職 */}
                <div className="text-xs text-blue-300 font-medium px-2 py-1 bg-blue-500/20 rounded-full">
                  {member.position}
                </div>
              </div>

              {/* 右側：説明文+SNS */}
              <div className="flex-1 flex flex-col justify-between">
                {/* 説明文 */}
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
                </div>

                {/* SNS - 下部 */}
                <div className="border-t border-gray-600/30 pt-3 mt-4">
                  <div className="text-xs text-gray-400 mb-1">Contact</div>
                  <div className="text-xs text-blue-300 hover:text-blue-200 transition-colors cursor-pointer">
                    {member.sns}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* スクロールヒント */}
      <div className="text-center mt-6">
        <span className="text-sm font-medium text-blue-300">
          {isMobile ? "← スワイプしてメンバーを見る →" : "← ドラッグして全メンバーを見る →"}
        </span>
      </div>
    </div>
  )
}

export default function Members() {
  const members = [
    {
      position: "代表",
      nameJa: "請関 海",
      nameEn: "Kai Ukezeki",
      description:
        "同志社大学在学中（2022年）にECコンサルを開始し、その後フリーランスとして中小企業での業務効率化支援・システム開発を経験。2024年からAI事業の立ち上げ・PMを行う。",
      sns: "なし",
      image: "/member-ukezeki.jpeg",
    },
    {
      position: "ー",
      nameJa: "松本 悠聖",
      nameEn: "Yusei Matsumoto",
      description:
        "大学3年次にフリーランスとして受託でEC系システムの開発を開始、Amazonデータダッシュボードや統合ECシステムを設計・運用する。その後、財務系・法務系業務へのAI組み込みを行う。",
      sns: "なし",
      image: "/member-matsumoto.png",
    },
    {
      position: "ー",
      nameJa: "川畑 一輝",
      nameEn: "Ikki Kawabata",
      description:
        "完全未経験からノーコードによるPoCプロトタイプ開発から始まり、数ヶ月で基本言語を習得。現在はLLMを活用したRAGシステムの設計・実装を担当し、業界特化型AIアプリケーションの開発を行う。",
      sns: "なし",
      image: "/member-kawabata.jpeg",
    },
  ]

  return (
    <section id="members" className="pt-24 mt-[-60px] pb-20 bg-[#302833] relative overflow-hidden text-white">
      {/* 幾何学的なライン背景 */}
      <div className="absolute inset-0 opacity-12">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0 200L300 100L600 300L900 150L1200 250" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" />
          <path d="M0 400L200 200L500 500L800 300L1200 450" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" />
          <path d="M0 600L400 400L700 650L1000 500L1200 600" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" />

          {/* 接続点 */}
          <circle cx="300" cy="100" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="600" cy="300" r="3" fill="#06b6d4" opacity="0.6" />
          <circle cx="900" cy="150" r="3" fill="#8b5cf6" opacity="0.6" />
          <circle cx="500" cy="500" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="800" cy="300" r="3" fill="#06b6d4" opacity="0.6" />
        </svg>
      </div>

      {/* 思索的な雰囲気を演出する薄いオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-custom-950/5 to-transparent"></div>

      {/* 知的な印象を与える微細なドットパターン */}
      <div
        className="absolute inset-0 opacity-6"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">メンバー紹介</h2>
          <div className="w-20 h-1 bg-[#a1d8e2] mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            BDCには、多様なバックグラウンドを持つ学生エンジニアが集まっています。未経験からスタートしたメンバーも多く、実務を通じて「AI時代のエンジニア」として成長を続けています。
          </p>
        </div>

        {/* 無限ループ横スクロールメンバーセクション */}
        <InfiniteScrollMembers members={members} />
      </div>
    </section>
  )
}
