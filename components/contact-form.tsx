"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, Send, Mail, User, Building } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    university: "",
    type: "internship",
    message: "",
    attribute: "student",
    affiliation: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const formData = {
        name: formState.name,
        email: formState.email,
        attribute: formState.attribute,
        affiliation: formState.affiliation,
        message: formState.message,
        to: "itimainasuiti@gmail.com",
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)

        setTimeout(() => {
          setSubmitted(false)
          setFormState({
            name: "",
            email: "",
            university: "",
            type: "internship",
            message: "",
            attribute: "student",
            affiliation: "",
          })
        }, 5000)
      } else {
        console.error("メール送信に失敗しました")
      }
    } catch (error) {
      console.error("エラーが発生しました:", error)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#a1d8e2] via-[#68a9cf] to-custom-900 relative overflow-hidden text-white"
    >
      <div className="container px-4 mx-auto relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-1 bg-[#a1d8e2] mr-3"></div>
            <span className="text-[#a1d8e2] font-bold text-lg tracking-wider uppercase">Member & Contact</span>
            <div className="w-8 h-1 bg-[#68a9cf] ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">メンバー募集・お問い合わせ</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            興戸アプリ開発ラボ BDCに興味を持っていただきありがとうございます。
            参加希望、ご質問など、お気軽にお問い合わせください。
          </p>
        </div>

        {/* 学生メンバー募集セクション */}
        <div className="max-w-5xl mx-auto mb-16 animate-on-scroll">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/30 p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">メンバー募集</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 募集ポジション・報酬 */}
              <div className="bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center drop-shadow-sm">
                  <div className="w-3 h-3 bg-[#68a9cf] rounded-full mr-3 shadow-sm"></div>
                  募集ポジション・業務委託報酬
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#68a9cf] pl-4 bg-white/10 rounded-r-lg py-3">
                    <h5 className="text-lg font-bold text-white mb-1 drop-shadow-sm">エンジニア</h5>
                    <p className="text-white font-bold text-lg drop-shadow-sm">報酬 1,000~5,000円/時間</p>
                  </div>
                  <div className="border-l-4 border-[#68a9cf] pl-4 bg-white/10 rounded-r-lg py-3">
                    <h5 className="text-lg font-bold text-white mb-1 drop-shadow-sm">マネジメント</h5>
                    <p className="text-white font-bold text-lg drop-shadow-sm">報酬 1,500~5,000円/時間</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 mt-4 border border-white/20">
                    <p className="text-white font-medium drop-shadow-sm">
                      <span className="font-bold text-white">稼働時間：</span>週20時間〜 | 
                      <span className="font-bold text-white ml-2">勤務形態：</span>週2回オフィス + 自由
                    </p>
                  </div>
                </div>
              </div>

              {/* 求めるスキル */}
              <div className="bg-white/25 rounded-2xl p-6 border border-white/30 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center drop-shadow-sm">
                  <div className="w-3 h-3 bg-[#68a9cf] rounded-full mr-3 shadow-sm"></div>
                  求めるスキル・条件
                </h4>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h5 className="text-lg font-bold text-white mb-3 drop-shadow-sm">必要要件</h5>
                    <ul className="space-y-2 text-white font-medium">
                      <li className="flex items-start drop-shadow-sm">
                        <span className="text-[#68a9cf] mr-3 font-bold text-lg">•</span>
                        最低限のプログラミング経験
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h5 className="text-lg font-bold text-white mb-3 drop-shadow-sm">歓迎要件</h5>
                    <ul className="space-y-2 text-white font-medium">
                      <li className="flex items-start drop-shadow-sm">
                        <span className="text-[#68a9cf] mr-3 font-bold text-lg">•</span>
                        1年以上の開発実務経験
                      </li>
                      <li className="flex items-start drop-shadow-sm">
                        <span className="text-[#68a9cf] mr-3 font-bold text-lg">•</span>
                        クライアントワーク経験
                      </li>
                      <li className="flex items-start drop-shadow-sm">
                        <span className="text-[#68a9cf] mr-3 font-bold text-lg">•</span>
                        要件定義、ヒアリング能力
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 bg-white/15 rounded-xl p-4 border border-white/25">
              <p className="text-white text-lg font-medium drop-shadow-sm">
                ご興味をお持ちの方は、下記のお問い合わせフォームからご連絡ください
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-on-scroll">
            {submitted ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#ffdc00]/20 mb-6 border-2 border-[#ffdc00]">
                  <CheckCircle className="h-10 w-10 text-[#ffdc00]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">送信完了しました</h3>
                <p className="text-white/80 text-lg">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認の上、3営業日以内に返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-white font-semibold flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      お名前 <span className="text-[#ffdc00] ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="山田 太郎"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-[#ffdc00] focus:ring-[#ffdc00] rounded-xl py-3"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white font-semibold flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      メールアドレス <span className="text-[#ffdc00] ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      type="email"
                      required
                      placeholder="example@example.com"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-[#ffdc00] focus:ring-[#ffdc00] rounded-xl py-3"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <Label className="text-white font-semibold flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    属性 <span className="text-[#ffdc00] ml-1">*</span>
                  </Label>
                  <RadioGroup
                    name="attribute"
                    value={formState.attribute}
                    onValueChange={(value) => setFormState((prev) => ({ ...prev, attribute: value }))}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    required
                  >
                    <div className="flex items-center space-x-2 bg-white/15 rounded-lg p-3">
                      <RadioGroupItem value="student" id="contact-student" className="border-white text-[#ffdc00]" />
                      <Label htmlFor="contact-student" className="text-white cursor-pointer">
                        学生
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/15 rounded-lg p-3">
                      <RadioGroupItem
                        value="professional"
                        id="contact-professional"
                        className="border-white text-[#ffdc00]"
                      />
                      <Label htmlFor="contact-professional" className="text-white cursor-pointer">
                        社会人
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/15 rounded-lg p-3">
                      <RadioGroupItem value="company" id="contact-company" className="border-white text-[#ffdc00]" />
                      <Label htmlFor="contact-company" className="text-white cursor-pointer">
                        企業・団体
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/15 rounded-lg p-3">
                      <RadioGroupItem value="other" id="contact-other-attr" className="border-white text-[#ffdc00]" />
                      <Label htmlFor="contact-other-attr" className="text-white cursor-pointer">
                        その他
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3 mb-6">
                  <Label htmlFor="affiliation" className="text-white font-semibold">
                    所属・詳細
                  </Label>
                  <Input
                    id="affiliation"
                    name="affiliation"
                    value={formState.affiliation}
                    onChange={handleChange}
                    placeholder="大学名・学部学年 / 会社名・部署 / 団体名など"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-[#ffdc00] focus:ring-[#ffdc00] rounded-xl py-3"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <Label htmlFor="message" className="text-white font-semibold">
                    メッセージ <span className="text-[#ffdc00]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="具体的なご相談内容、参加動機などをご記入ください"
                    rows={6}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-[#ffdc00] focus:ring-[#ffdc00] rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ffdc00] hover:bg-[#ffdc00]/90 text-custom-950 font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  送信する
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
