"use client"

import Image from "next/image"
import { MapPin, Train, Info, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Access() {
  return (
    <section
      id="access"
      className="py-32 bg-gradient-to-br from-white via-gray-50 to-[#a1d8e2]/10 relative overflow-hidden text-custom-950"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <radialGradient id="accessGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a1d8e2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#68a9cf" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="100" fill="url(#accessGradient)" className="animate-pulse" />
          <circle
            cx="1000"
            cy="600"
            r="150"
            fill="url(#accessGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="600"
            cy="100"
            r="80"
            fill="url(#accessGradient)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-1 bg-[#a1d8e2] mr-3"></div>
            <span className="text-[#a1d8e2] font-bold text-lg tracking-wider uppercase">Access</span>
            <div className="w-8 h-1 bg-[#68a9cf] ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-custom-950">アクセス</h2>
          <p className="text-xl text-custom-700 max-w-3xl mx-auto leading-relaxed">
            京田辺アプリ開発ラボ The Cureへのアクセス方法をご案内します。
            お気軽にお立ち寄りください。見学も歓迎しています。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 地図・画像セクション */}
            <div className="space-y-6 animate-on-scroll delay-100">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-07-01%2016.10.42-PhSx65XZ0Ujzc3GUbdjPlNT0MYjqwg.png"
                      alt="京田辺アプリ開発ラボ The Cure オフィス外観"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-custom-950/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-[#ffdc00] hover:bg-[#ffdc00]/90 text-custom-950 font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open("https://maps.google.com/?q=京都府京田辺市興戸和井田56-1", "_blank")}
              >
                <Map className="h-5 w-5 mr-2" />
                Googleマップで見る
              </Button>
            </div>

            {/* 情報セクション */}
            <div className="space-y-8 animate-on-scroll delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#a1d8e2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-950 mb-2">住所</h3>
                    <p className="text-lg text-custom-700 leading-relaxed">
                      〒610-0332
                      <br />
                      京都府京田辺市興戸和井田56-1　A&Kビル　201
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#68a9cf] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Train className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-950 mb-2">アクセス方法</h3>
                    <p className="text-lg text-custom-700 leading-relaxed">
                      JR同志社前駅から徒歩3分
                      <br />
                      近鉄興戸駅から徒歩4分
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#ffdc00]/10 to-[#ffdc00]/5 rounded-2xl p-8 border-2 border-[#ffdc00]/30 hover:border-[#ffdc00]/50 transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ffdc00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Info className="h-6 w-6 text-custom-950" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-950 mb-2">注意事項</h3>
                    <p className="text-lg text-custom-700 leading-relaxed">
                      ご来社の際は、お手数ですが事前にお問い合わせフォームよりご連絡くださいますようお願いいたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
