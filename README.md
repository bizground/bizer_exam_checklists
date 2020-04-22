# README

フロントエンドエンジニアのコーディングテスト用リポジトリです。

## 環境設定

1. `docker-compose build` サービスのビルド。初回実行には時間がかかります。
2. `docker-compose run --rm web bin/rails db:create` DBの作成。
3. `docker-compose run --rm web bin/rails db:migrate` DBマイグレーション実行。
4. `docker-compose run --rm web bin/rails db:seed` 初期レコードをDBに挿入。
5. `docker-compose up` サービス起動。起動が完了するには時間がかかります。
6. ブラウザで `http://localhost:4000` を開く。
7. Let's write some good code!

拡張子が `.js`, `.jsx` のファイルが保存されるとホットリロードされます。

## 課題説明

- 次のURLと同じようなSPAアプリの作成をお願いします。レイアウトやボタンなど、デザイン上の相違があっても結構です。
https://bizer-exam-checklists.herokuapp.com/
- WebAPIは `app/controllers/api/checklists_controller.rb` に実装されています。
- WebAPIにリクエストを送信し、下記機能を実装してください。
  - チェックリストの表示機能
  - チェックリストの作成機能
  - チェックリストの削除機能
- 触っていただくのは `app/javascript/packs` 以下のファイルだけで結構です。
- 必要な `node package` があれば自由にインストールしてください。
- 下記は推奨される書き方です。
  - `useEffect`, `useState` など `hooks` の利用。https://ja.reactjs.org/docs/hooks-intro.html
  - Stateless Functional Components の利用。https://qiita.com/Uuparu/items/79dd1d70b45d6d82992c
  - Component, 関数, クラス, ファイル は小さく保ち、高い凝集度と低い結合度を目指す。
