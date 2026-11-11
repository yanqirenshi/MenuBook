"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Avater;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _layout = require("./layout.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function Avater(props) {
  var menu = props.menu;
  var changeMenu = props.changeMenu;
  var icon = props.icon;
  var click = function click() {
    return changeMenu(function (new_menu) {
      new_menu.avater.clicked = !new_menu.avater.clicked;
      if (new_menu.avater.clicked) return;
      new_menu.avater.enterd = false;
      new_menu.menu.enterd = false;
    });
  };

  // ここで menu.enterd は立てない。
  // 立てると、メニュー本体に入らずに外へ出たとき、それを戻すイベントが起きず、
  // メニューが閉じなくなる。
  // アバターからメニュー本体へ移るときは、アバターから出た更新と、
  // メニューに入った更新が続けて起きるので、メニューは開いたままになる。
  var enterd = function enterd() {
    return changeMenu(function (new_menu) {
      new_menu.avater.enterd = true;
    });
  };
  var leaved = function leaved() {
    return changeMenu(function (new_menu) {
      new_menu.avater.enterd = false;
    });
  };

  // 外側の枠は、メニューの上端の枠(Head)と同じ位置・大きさにして、
  // アバターを flex でその中央に寄せる。
  // メニューが閉じているときも、同じ位置に表示される。
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sxFrame()
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    className: menu.avater.clicked ? 'pair-color1' : 'theme-color3',
    sx: sxRing()
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      width: 33,
      height: 33,
      borderRadius: 33,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    alt: "Mobilus",
    src: icon,
    sx: {
      width: 33,
      height: 33
    },
    onClick: click,
    onMouseEnter: enterd,
    onMouseLeave: leaved
  }))));
}
function sxFrame() {
  return {
    position: 'fixed',
    top: _layout.MENU_TOP,
    left: _layout.MENU_LEFT,
    width: _layout.MENU_WIDTH,
    // Head の下線を除いた部分の中央に寄せる。
    height: _layout.MENU_WIDTH - _layout.HEAD_BORDER_BOTTOM,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 8888888,
    // 枠そのものはマウスを受けず、下のメニューに通す。
    pointerEvents: 'none'
  };
}
function sxRing() {
  return {
    display: 'flex',
    // 白い円(33px)の周りに 4px の輪(pair-color1 / theme-color3)を出す。
    padding: 0.5,
    borderRadius: 22,
    boxSizing: 'content-box',
    pointerEvents: 'auto'
  };
}