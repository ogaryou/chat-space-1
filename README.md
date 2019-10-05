# ChatSpace

**ChatSpace**はユーザー同士でグループを作成しチャットできるアプリケーションです


## 概要
DB作成から考え、haml、Sass(BEM設計)、JavaScript、jQuery、MySQL、AWSなどwebアプリケーション作成の土台となる言語を活用して実装しました。正規化表現によるrインクリメンタルサーチ、API、非同期更新、自動更新の機能がついています。


**サイトURL**

[ChatSpace](http://52.193.61.236/)

**テスト用アカウント**

[email] testuser1@gmail.com

[password] testusertestuser


## 機能
* 会員登録・編集・ログイン機能(gem devise)
* チャットグループ・作成・編集機能(Ajaxを用いたインクリメンタルサーチ)
* メッセージ作成機能(Ajaxを用いた非同期通信・自動更新)

## 技術
* amazonS3への画像アップロード
* AWS EC2
* Capistranoを利用した自動デプロイ
* Ajaxを利用したインクリメンタルサーチ・非同期通信・自動更新
