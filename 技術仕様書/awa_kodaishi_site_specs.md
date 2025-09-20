# 阿波古代史サイト構築仕様書

## プロジェクト概要

### サイト名
「阿波古代史をAIに調査してもらった」

### コンセプト
古代阿波国の歴史的謎をAI技術を活用して多角的に調査・分析した研究サイト

### 技術スタック
- **フロントエンド**: HTML5, CSS3, JavaScript (Vanilla)
- **デザイン**: レスポンシブデザイン、モバイルファースト
- **デプロイ**: GitHub Pages / Netlify
- **開発環境**: VSCode, Git, GitHub

## サイト構造

### ページ構成
```
/
├── index.html              # トップページ
├── nara-kyoto-awa.html    # テーマ1: 奈良・京都の阿波関連地名
├── harifu-shrine.html     # テーマ2: 波爾布神社と阿波
└── public/
    └── images/
        └── ooawa-hero.jpeg # ヒーロー背景画像
```

### ナビゲーション構造
- トップページ ↔ 各テーマページの相互リンク
- ページ内アンカーリンクによる目次ナビゲーション
- スムーズスクロール実装

## デザイン仕様

### カラーパレット
```css
/* 基本色 */
background: #f8fafc;        /* 背景色 */
primary-text: #1a202c;      /* 見出し用 */
secondary-text: #2d3748;    /* 本文用 */
tertiary-text: #4a5568;     /* 補助テキスト */
muted-text: #718096;        /* キャプション用 */

/* アクセント色 */
primary-accent: #4299e1;    /* ブルー - リンクやボタン */
border-light: #e2e8f0;      /* 軽い区切り線 */

/* 特別なボックス用 */
info-bg: #f7fafc;           /* Info Box */
timeline-bg: #fef5e7;       /* Timeline Box */
quote-bg: #f0fff4;          /* Quote Box */
conclusion-bg: #fffaf0;     /* Conclusion Box */
```

### タイポグラフィ
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 
             Meiryo, sans-serif;

/* サイズ設定 */
h1: 2.5rem, font-weight: 700
h2: 1.75rem, font-weight: 600
h3: 1.25rem, font-weight: 600
body: 1rem, line-height: 1.7
```

### レイアウト
- **最大幅**: 1000px
- **コンテナ**: 40px padding
- **セクション間**: 40px margin
- **レスポンシブ**: 768px以下でモバイル対応

## コンポーネント仕様

### ヒーローセクション
```css
/* 背景画像設定 */
background: 
    linear-gradient(rgba(26,32,44,0.75), rgba(26,32,44,0.80)),
    url('public/images/ooawa-hero.jpeg');
background-size: cover;
background-position: center;
background-attachment: fixed; /* デスクトップ */
background-attachment: scroll; /* モバイル */
```

### 特別なボックス要素
1. **Info Box** - 重要な事実・情報
2. **Timeline Box** - 時系列・歴史的情報
3. **Quote Box** - 引用・重要な言葉
4. **Conclusion Box** - 結論・まとめ

### インタラクティブ要素
- **検索窓**: トップページに配置（現在はUI のみ）
- **フェードインアニメーション**: Intersection Observer API使用
- **スクロールトップボタン**: 300px スクロール後表示
- **ホバーエフェクト**: カード要素に transform: translateY(-2px)

## コンテンツ仕様

### トップページ (index.html)
- ヒーローセクション: サイトタイトル + 背景画像
- 検索セクション: サイト内検索UI
- 研究テーマ一覧: 2つのテーマカード
- サイト紹介: AI活用研究の説明

### テーマページ共通構造
1. ヒーローセクション: ページタイトル
2. ナビゲーションメニュー: ページ内目次
3. 概要セクション: 結論ボックス + 統計カード
4. 各研究セクション: 史料的証拠、考古学的証拠等
5. 結論セクション: まとめ

### テーマ1: 奈良・京都の阿波関連地名
- 斑鳩町阿波地区の詳細分析
- 率川阿波神社の歴史
- 城陽市精神社の研究
- 忌部氏による文化伝播
- 考古学的証拠

### テーマ2: 波爾布神社と阿波
- 741年の神霊勧請記録
- 1300年の精神的結合
- 宗教的ネットワーク
- 文化的影響と継承

## 技術仕様

### パフォーマンス最適化
- 画像最適化: JPEG形式、500KB以下
- CSS最適化: 不要なルール削除
- JavaScript最適化: Vanilla JS使用、軽量化

### アクセシビリティ
- セマンティックHTML使用
- 適切なコントラスト比
- キーボードナビゲーション対応
- alt属性の適切な設定

### SEO対策
- メタタグの適切な設定
- 構造化データ（今後実装予定）
- 内部リンクの最適化
- ページ読み込み速度の最適化

## 開発ワークフロー

### ローカル開発環境
```bash
# プロジェクト初期化
mkdir awa-kodaishi
cd awa-kodaishi
git init

# 開発
# VSCode + Live Server拡張機能でローカルプレビュー

# デプロイ
git add .
git commit -m "commit message"
git push origin main
# → Netlify自動デプロイ
```

### Git管理
- **リモートリポジトリ**: GitHub
- **ブランチ戦略**: main ブランチのみ（シンプル構成）
- **コミットメッセージ**: 日本語OK

### デプロイ設定
- **プラットフォーム**: Netlify
- **ビルドコマンド**: なし（静的サイト）
- **公開ディレクトリ**: ルート（/）
- **自動デプロイ**: GitHub連携

## 今後の拡張予定

### 機能追加
- [ ] 実際の検索機能実装
- [ ] コメント機能
- [ ] RSS フィード
- [ ] ソーシャルシェア機能

### コンテンツ追加
- [ ] 阿波忌部氏と中央政界
- [ ] 古事記・日本書紀の阿波関連記述
- [ ] 考古学的証拠の統合検討
- [ ] 古代交通路と文化伝播

### 技術改善
- [ ] PWA対応
- [ ] ダークモード対応
- [ ] 多言語対応（英語）
- [ ] CMS導入検討

## 品質管理

### チェックリスト
- [ ] 全ページのレスポンシブ確認
- [ ] 異なるブラウザでの表示確認
- [ ] ページ読み込み速度チェック
- [ ] リンク切れチェック
- [ ] 誤字脱字チェック

### テスト環境
- デスクトップ: Chrome, Firefox, Safari
- モバイル: iOS Safari, Android Chrome
- タブレット: iPad, Android タブレット

## 注意事項

### 著作権・画像
- 背景画像: 自己撮影のため使用OK
- 史料引用: 適切な引用表記必要
- 参考文献: 今後追加予定

### メンテナンス
- 定期的なリンク確認
- セキュリティアップデート（依存関係なし）
- コンテンツの定期更新

---

**最終更新**: 2024年12月
**作成者**: Claude AI + ユーザー協働開発