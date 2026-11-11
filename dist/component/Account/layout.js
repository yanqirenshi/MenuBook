"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MENU_WIDTH = exports.MENU_TOP = exports.MENU_PADDING_X = exports.MENU_LEFT = exports.HEAD_BORDER_BOTTOM = void 0;
// サイドメニューの寸法。
// アバター(Avater.js)とメニュー本体(Menu.js / Menu/Head.js)で共有し、
// アバターがメニューの上端の枠(Head)の中央に来るようにする。
//
// 幅は、利用側の CSS(box-sizing など)に左右されないように、
// 各要素で boxSizing を明示したうえで、この値で固定する。

// メニュー本体の左上の位置 (px)
var MENU_TOP = exports.MENU_TOP = 8;
var MENU_LEFT = exports.MENU_LEFT = 8;

// メニュー本体の幅 (px)。上端の枠(Head)は、この幅の正方形になる。
var MENU_WIDTH = exports.MENU_WIDTH = 65;

// メニュー本体の左右の padding (px)
var MENU_PADDING_X = exports.MENU_PADDING_X = 5;

// 上端の枠(Head)の下線の太さ (px)
var HEAD_BORDER_BOTTOM = exports.HEAD_BORDER_BOTTOM = 1;