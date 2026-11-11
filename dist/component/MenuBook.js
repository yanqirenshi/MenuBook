"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuBook;
var React = _interopRequireWildcard(require("react"));
var _beach = _interopRequireDefault(require("@yanqirenshi/beach"));
var _Avater = _interopRequireDefault(require("./Account/Avater.js"));
var _Menu = _interopRequireDefault(require("./Account/Menu.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var u = new _beach["default"]();
function MenuBook(props) {
  var menu = props.menu;
  var actions = props.actions;
  var is_opend = props.is_opend;
  var selected_item_code = props.selected_item;
  var icon = props.icon;
  var theme_color = props.theme_color || {
    r: 157,
    g: 91,
    b: 139
  };
  var selected_item = selectedItem(menu, selected_item_code);
  var changeMenu = useMenuChanger(menu, actions.menu.change);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Avater["default"], {
    menu: menu,
    changeMenu: changeMenu,
    icon: icon
  }), isOpenMenu(menu) && /*#__PURE__*/React.createElement(_Menu["default"], {
    menu: menu,
    is_opend: is_opend,
    selected_item: selected_item,
    actions: actions,
    changeMenu: changeMenu,
    theme_color: theme_color
  }));
}

// menu を書き換えて、actions.menu.change に通知する関数を返す。
//
// アバターから出てメニューに入るときのように、1 回のマウスの移動で
// 複数の更新が続けて起きることがある。
// 描画時点の menu を元に更新を作ると、後の更新が前の更新を上書きしてしまう。
// (アバターのホバーが外れたことが消え、メニューが閉じなくなる)
// そのため、最後に通知した menu を ref に持ち、次の更新はそれを元に作る。
function useMenuChanger(menu, change) {
  var latest = React.useRef(menu);

  // 描画のたびに、利用側から渡された最新の menu に合わせる。
  latest.current = menu;
  return function (fn) {
    var new_menu = u.catom(latest.current, fn);
    latest.current = new_menu;
    change(new_menu);
  };
}
function isOpenMenu(menu) {
  return menu.avater.clicked || menu.avater.enterd || menu.menu.enterd;
}
function selectedItem(menu, selected_item_code) {
  var _iterator = _createForOfIteratorHelper(menu.pages),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var page = _step.value;
      var _iterator2 = _createForOfIteratorHelper(page.items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (item.code === selected_item_code) return item;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    // デフォルトかえさないと。
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}