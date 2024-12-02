# wakayama-app
## 和歌山マップアプリ（わかまっぷ）
和歌山マップアプリ（わかまっぷ）は、和歌山県の観光地や名所を簡単に共有できるアプリケーションです。
地域住民や観光客が交流し、和歌山の魅力を発信するためのデジタル基盤を提供します。

# アクセス方法
以下のURLから直接アクセス可能です：https://wakayama-app-991cb.web.app/

# 和歌山マップアプリ - わかまっぷ

*機能概要
- 地図表示機能: 和歌山県の地図を表示し、観光名所をマーカーで確認可能。
- 投稿機能: ユーザーが写真やコメントを投稿可能。
- コメント機能: 投稿に対してコメントを付けて交流可能。
- レスポンシブデザイン: スマートフォンやPCに対応したデザイン。

開発環境
フロントエンド: Vue.js
地図機能: Google Maps API
データベース・認証: Firebase (Firestore, Authentication)
デプロイ: Firebase Hosting

ローカル開発手順
リポジトリのクローン

git clone <リポジトリURL>
cd wakayama-app
依存パッケージのインストール


npm install
ローカル開発サーバーの起動


npm run dev
ブラウザでアクセス

http://localhost:5173
デプロイ手順
ビルド

npm run build
Firebase Hosting にデプロイ

firebase deploy
ホスティングURL https://wakayama-app-991cb.web.app/

使用技術
フレームワーク: Vue.js
地図API: Google Maps API
ホスティング: Firebase Hosting
バックエンド: Firebase Firestore
認証: Firebase Authentication
ライセンス
このプロジェクトは MIT License のもとで公開されています。

