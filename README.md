# 京田辺ラボ BDC 公式ホームページ

## 概要
京田辺ラボ BDCの公式ウェブサイトです。Next.js 15 + TypeScript + Tailwind CSSで構築されています。

## 技術スタック
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Deployment**: Railway
- **Email**: Nodemailer (Gmail SMTP)

## ローカル開発

### 環境変数設定
`.env.local` ファイルを作成してください：

```env
# メール送信設定（必須）
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password

# サイトURL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 開発サーバー起動

```bash
# 依存関係インストール
npm install
# または
pnpm install

# 開発サーバー起動
npm run dev
# または
pnpm dev
```

## Railway デプロイ手順

### 1. Railway CLI インストール
```bash
npm install -g @railway/cli
```

### 2. プロジェクト設定
```bash
# ログイン
railway login

# プロジェクト初期化・リンク
railway init
railway link
```

### 3. 環境変数設定（重要）
Railway ダッシュボードで以下の環境変数を設定：

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
NEXT_PUBLIC_SITE_URL=https://your-project.railway.app
```

**Gmail アプリパスワード生成手順：**
1. Google アカウントで2段階認証を有効化
2. アプリパスワードを生成：https://myaccount.google.com/apppasswords
3. 生成されたパスワードを `EMAIL_PASS` に設定

### 4. デプロイ
```bash
# Git push でデプロイ
git add .
git commit -m "Deploy to Railway"
git push origin main
```

## お問い合わせフォーム

### 機能
- フォーム送信 → メール通知（itimainasuiti@gmail.com）
- 送信完了画面の表示
- エラーハンドリング

### API エンドポイント
- `POST /api/send-email`
- リクエスト形式：JSON
- レスポンス：成功/エラーメッセージ

## SEO設定

### 含まれる機能
- メタタグ最適化
- Open Graph対応
- Twitter Card対応
- robots.txt
- sitemap.xml
- 構造化データ対応

## メンテナンス

### 定期的な更新項目
- [ ] メンバー情報の更新
- [ ] 事業内容の更新
- [ ] 画像の最適化
- [ ] 依存関係のアップデート

### 監視項目
- [ ] お問い合わせフォームの動作確認
- [ ] メール送信の確認
- [ ] ページの表示速度
- [ ] モバイル対応の確認

### 最終確認日
- Railway デプロイ状況確認: 2024/11/13

## トラブルシューティング

### メール送信が失敗する場合
1. 環境変数の設定確認
2. Gmail アプリパスワードの有効性確認
3. 2段階認証の設定確認
4. Railway の環境変数設定確認

### デプロイが失敗する場合
1. `package.json` の依存関係確認
2. TypeScript エラーの修正
3. 画像ファイルサイズの確認
4. Railway の buildpack 設定確認

## ライセンス
Private - 京田辺ラボ BDC

## お問い合わせ
- Email: itimainasuiti@gmail.com
- 住所: 〒610-0332 京都府京田辺市興戸和井田56-1 A&Kビル 201 