## MenuBook

React 用のサイドメニュー(アカウントメニュー)コンポーネントです。

画面左上に固定表示されるアバターアイコンをクリック、またはホバーすると、複数の「ページ(タブ)」を持つサイドメニューが展開します。各ページにはアイテム(アイコン風の丸ボタン)が並び、選択中のアイテムはラベル付きの角丸ボックスに展開表示されます。

### インストール

```bash
npm install @yanqirenshi/menubook
```

React 18 系がインストールされている必要があります(`react` / `react-dom` は peerDependencies)。

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

- [React](https://react.dev/) 18
- [MUI](https://mui.com/) (`@mui/material`, `@mui/icons-material`)
- [@yanqirenshi/beach](https://www.npmjs.com/package/@yanqirenshi/beach) — イミュータブルな状態更新ヘルパー

### ライセンス

MIT
