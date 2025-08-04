"use client"

import Image from "next/image"
import { MapPin, Train, Info, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Access() {
  return (
    <section
      id="access"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-[#a1d8e2]/10 text-custom-950"
    >


              <div className="container px-4 mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-1 bg-[#a1d8e2] mr-3"></div>
            <span className="text-[#a1d8e2] font-bold text-lg tracking-wider uppercase">Access</span>
            <div className="w-8 h-1 bg-[#68a9cf] ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-custom-950">アクセス</h2>
          <p className="text-xl text-custom-700 max-w-3xl mx-auto leading-relaxed">
            興戸アプリ開発ラボ BDCへのアクセス方法をご案内します。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* 地図・画像セクション（3分割） */}
            <div className="space-y-4 animate-on-scroll delay-100">
              {/* 上段：メイン画像 */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[16/9] w-full">
                    <Image
                      src="/office-main.png"
                      alt="興戸アプリ開発ラボ BDC オフィス外観"
                      fill
                      quality={70}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-custom-950/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* 下段：2つの画像 */}
              <div className="grid grid-cols-2 gap-4">
                {/* 左側画像 */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] w-full">
                      <Image
                        src="/office-sub-left.png"
                        alt="オフィス詳細画像1"
                        fill
                        quality={70}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-custom-950/30 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* 右側画像 */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#68a9cf] to-[#a1d8e2] rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] w-full">
                      <Image
                        src="/office-sub-right.png"
                        alt="オフィス詳細画像2"
                        fill
                        quality={70}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-custom-950/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-[#68a9cf] hover:bg-[#68a9cf]/90 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open("https://maps.google.com/?q=京都府京田辺市興戸和井田56-1", "_blank")}
              >
                <Map className="h-5 w-5 mr-2" />
                Googleマップで見る
              </Button>
            </div>

            {/* 情報セクション */}
            <div className="space-y-6 animate-on-scroll delay-200">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c71585] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c71585] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c71585] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-950 mb-2">注意事項</h3>
                    <p className="text-lg text-custom-700 leading-relaxed">
                      ご来訪の際は、お手数ですが事前にお問い合わせフォームよりご連絡くださいますようお願いいたします。
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
