// サイドメニューの寸法。
// アバター(Avater.js)とメニュー本体(Menu.js / Menu/Head.js)で共有し、
// アバターがメニューの上端の枠(Head)の中央に来るようにする。
//
// 幅は、利用側の CSS(box-sizing など)に左右されないように、
// 各要素で boxSizing を明示したうえで、この値で固定する。

// メニュー本体の左上の位置 (px)
export const MENU_TOP  = 8;
export const MENU_LEFT = 8;

// メニュー本体の幅 (px)。上端の枠(Head)は、この幅の正方形になる。
export const MENU_WIDTH = 65;

// メニュー本体の左右の padding (px)
export const MENU_PADDING_X = 5;

// 上端の枠(Head)の下線の太さ (px)
export const HEAD_BORDER_BOTTOM = 1;
