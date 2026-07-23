import * as React from 'react';

const codeBlockStyle = {
    background: '#f5f5f5',
    padding: '12px 16px',
    borderRadius: 4,
    overflowX: 'auto',
};

function Readme () {
    return (
        <div>
          <h2>MenuBook</h2>
          <p>
            React 用のサイドメニュー(アカウントメニュー)コンポーネントです。
            画面左上に固定表示されるアバターアイコンをクリック、またはホバーすると、
            複数の「ページ(タブ)」を持つサイドメニューが展開します。
          </p>

          <h3>インストール</h3>
          <pre style={codeBlockStyle}>npm install @yanqirenshi/menubook</pre>
          <p>React 18 系が必要です(<code>react</code> / <code>react-dom</code> は peerDependencies)。</p>

          <h3>使い方</h3>
          <pre style={codeBlockStyle}>{`<MenuBook menu={menu}
          actions={actions}
          is_opend={isOpend}
          selected_item={selectedItem}
          icon="/avatar.png"
          theme_color={{ r: 63, g: 81, b: 181 }}/>`}</pre>

          <h3>Props</h3>
          <ul>
            <li><code>menu</code> — メニューの表示状態とページ/アイテム構成</li>
            <li><code>actions</code> — 状態更新用のコールバック群</li>
            <li><code>is_opend</code> — ページ切り替え用ドロップダウンの開閉状態</li>
            <li><code>selected_item</code> — 選択中アイテムの code</li>
            <li><code>icon</code> — アバターアイコンの画像URL</li>
            <li><code>theme_color</code> — メニューの配色(RGB)</li>
          </ul>

          <p>詳細は <a href="https://github.com/yanqirenshi/MenuBook#readme" target="_blank" rel="noreferrer">README</a> を参照してください。</p>
        </div>
    );
}

function Data () {
    return (
        <div>
          <h2>DATA</h2>
          <p>
            MenuBook は状態を内部に持たない controlled component です。
            表示状態を持つ <code>menu</code> オブジェクトと、状態を更新するための
            コールバック群 <code>actions</code> オブジェクトを、呼び出し側で管理して props として渡します。
          </p>

          <h3><code>menu</code> オブジェクトの構造</h3>
          <pre style={codeBlockStyle}>{`{
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
}`}</pre>

          <h4><code>avater</code></h4>
          <p>アバターアイコン(左上の丸いアイコン)の状態です。</p>
          <table cellPadding="6" style={{borderCollapse: 'collapse'}}>
            <tbody>
              <tr>
                <td><code>clicked</code></td>
                <td>アバターアイコンがクリックされ、メニューが開いた状態かどうか。</td>
              </tr>
              <tr>
                <td><code>enterd</code></td>
                <td>マウスカーソルがアバターアイコン上に乗っている(ホバー中)かどうか。</td>
              </tr>
            </tbody>
          </table>

          <h4><code>menu.enterd</code></h4>
          <p>
            マウスカーソルがメニュー本体(展開されたサイドメニュー)上に乗っているかどうか。
            <code>avater.enterd</code> と同様、ここが <code>true</code> の間はメニューが開いた状態を保ちます。
          </p>

          <h4><code>current_page</code></h4>
          <p>現在表示中のページを表す文字列で、<code>pages[].label</code> のいずれかと一致させます。</p>

          <h4><code>pages[].items[]</code>(アイテム)</h4>
          <p>各ページに表示されるメニュー項目です。</p>
          <table cellPadding="6" style={{borderCollapse: 'collapse'}}>
            <tbody>
              <tr>
                <td><code>code</code></td>
                <td>アイテムを識別するための一意な文字列。<code>selected_item</code> prop と比較して選択状態を判定します。</td>
              </tr>
              <tr>
                <td><code>url</code></td>
                <td>アイテムに対応するURL(このデモでは表示には使っていませんが、アプリ側でリンク先などに利用できます)。</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>アイテムに表示されるラベル文字列。</td>
              </tr>
            </tbody>
          </table>

          <h3><code>actions</code> オブジェクトの構造</h3>
          <pre style={codeBlockStyle}>{`{
    menu: {
        change: (new_menu) => void,   // menu を更新する
        open: () => void,             // is_opend を true にする
        close: () => void,            // is_opend を false にする
        item: {
            click: (item) => void,    // アイテムがクリックされたときに呼ばれる
        },
    },
}`}</pre>

          <p>このデモ({'src/App.jsx'})では、これらを <code>React.useState</code> で保持し、
            <code>actions.menu.change</code> に <code>setMenu</code> を渡すことで更新しています。</p>
        </div>
    );
}

const PLACEHOLDER_LABEL = {
    components: 'Components',
    classes: 'Classes',
    account: 'Account',
    billing: 'Billing',
    security: 'Security',
};

function Placeholder ({code}) {
    return (
        <div>
          <h2>{PLACEHOLDER_LABEL[code] || code}</h2>
          <p>このページはまだ用意されていません。</p>
        </div>
    );
}

export default function Content ({code}) {
    if (code === 'readme')
        return <Readme/>;

    if (code === 'data')
        return <Data/>;

    return <Placeholder code={code}/>;
}
