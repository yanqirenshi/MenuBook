## MenuBook

React 用のサイドメニュー(アカウントメニュー)コンポーネントです。

画面左上に固定表示されるアバターアイコンをクリック、またはホバーすると、複数の「ページ(タブ)」を持つサイドメニューが展開します。各ページにはアイテム(アイコン風の丸ボタン)が並び、選択中のアイテムはラベル付きの角丸ボックスに展開表示されます。

### インストール

```bash
npm install @yanqirenshi/menubook
```

次のパッケージは peerDependencies です。アプリ側でインストールしてください(アプリが使っている MUI をそのまま使うため、MenuBook は MUI を同梱しません)。

| パッケージ | 範囲 | 動作を確かめた版 |
| --- | --- | --- |
| `react` / `react-dom` | `^18.0.0 || ^19.0.0` | 18.3.1 / 19.3.1 |
| `@mui/material` / `@mui/icons-material` | `^5.14.20 || ^6.0.0 || ^7.0.0 || ^9.0.0` | 5.18.0 / 6.5.0 / 7.3.11 / 9.5.0 |
| `@emotion/react` / `@emotion/styled` | `^11.11.0` | 11.14 |

```bash
npm install react react-dom @mui/material @mui/icons-material @emotion/react @emotion/styled
```

MUI を使っているアプリは、すでに入っているので、追加は要りません。
アプリの `ThemeProvider` のテーマが、そのまま使われます。

### 使い方

MenuBook は状態を内部に持たない controlled component です。表示状態(`menu`)と、状態を更新するためのコールバック(`actions`)を呼び出し側で管理し、props として渡します。

```jsx
import * as React from 'react';
import MenuBook from '@yanqirenshi/menubook';

const initialMenu = {
    avater: { clicked: false, enterd: false },
    menu: { enterd: false },
    current_page: 'General',
    pages: [
        {
            label: 'General',
            items: [
                { code: 'home', url: '#/home', label: 'Home' },
                { code: 'profile', url: '#/profile', label: 'Profile' },
            ],
        },
        {
            label: 'Settings',
            items: [
                { code: 'account', url: '#/account', label: 'Account' },
            ],
        },
    ],
};

export default function App () {
    const [menu, setMenu] = React.useState(initialMenu);
    const [isOpend, setIsOpend] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('home');

    const actions = {
        menu: {
            change: setMenu,
            open: ()=> setIsOpend(true),
            close: ()=> setIsOpend(false),
            item: {
                click: (item)=> setSelectedItem(item.code),
            },
        },
    };

    return (
        <MenuBook menu={menu}
                  actions={actions}
                  is_opend={isOpend}
                  selected_item={selectedItem}
                  icon="/avatar.png"
                  theme_color={{ r: 63, g: 81, b: 181 }}/>
    );
}
```

動かせるサンプルは [example](example) ディレクトリにあります。

```bash
npm install
npm run dev --workspace example
```

### Props

| Prop | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `menu` | `object` | ○ | メニューの表示状態とページ/アイテム構成([menu オブジェクトの構造](#menu-オブジェクトの構造)参照)。 |
| `actions` | `object` | ○ | 状態更新用のコールバック群([actions オブジェクトの構造](#actions-オブジェクトの構造)参照)。 |
| `is_opend` | `boolean` |  | ページ切り替え用ドロップダウンの開閉状態。 |
| `selected_item` | `string` |  | 選択中アイテムの `code`。 |
| `icon` | `string` |  | アバターアイコンの画像URL。未指定時はMUIのデフォルトアイコンが表示されます。 |
| `theme_color` | `{ r, g, b }` |  | メニューの配色(RGB)。省略時は `{ r: 157, g: 91, b: 139 }`。 |

### menu オブジェクトの構造

```js
{
    avater: { clicked: false, enterd: false }, // アバターアイコンのクリック/ホバー状態
    menu: { enterd: false },                   // メニュー本体へのホバー状態
    current_page: 'General',                   // 表示中のページの label
    pages: [
        {
            label: 'General',
            items: [
                { code: 'home', url: '#/home', label: 'Home' },
                // ...
            ],
        },
        // ...
    ],
}
```

### actions オブジェクトの構造

```js
{
    menu: {
        change: (new_menu) => void,   // menu を更新する(内部からイミュータブルな更新を通知される)
        open: () => void,             // is_opend を true にする
        close: () => void,            // is_opend を false にする
        item: {
            click: (item) => void,    // アイテムがクリックされたときに呼ばれる
        },
    },
}
```

### 依存ライブラリ

- [React](https://react.dev/) 18 / 19 (peerDependencies)
- [MUI](https://mui.com/) (`@mui/material`, `@mui/icons-material`。peerDependencies)
- [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`。peerDependencies)
- [@yanqirenshi/beach](https://www.npmjs.com/package/@yanqirenshi/beach) — イミュータブルな状態更新ヘルパー

### ライセンス

MIT
