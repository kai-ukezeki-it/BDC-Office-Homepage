import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, attribute, affiliation, message, to } = await request.json()

    // 環境変数の確認
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'メール設定が完了していません' },
        { status: 500 }
      )
    }

    // nodemailer設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // または使用するメールサービス
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // アプリパスワード
      },
    })

    // メール内容
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to || 'itimainasuiti@gmail.com',
      subject: `【BDC】新しいお問い合わせ - ${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>属性:</strong> ${attribute}</p>
        <p><strong>所属:</strong> ${affiliation || '未記入'}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString('ja-JP')}</small></p>
      `,
    }

    // メール送信
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
} 