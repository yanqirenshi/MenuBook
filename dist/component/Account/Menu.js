"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _layout = require("./layout.js");
var _Head = _interopRequireDefault(require("./Menu/Head.js"));
var _Foot = _interopRequireDefault(require("./Menu/Foot.js"));
var _Item = _interopRequireDefault(require("./Menu/Item.js"));
var _Pages = _interopRequireDefault(require("../Account/Pages.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import Tabs from './Menu/Tabs.js';
function Menu(props) {
  var menu = props.menu || [];
  var actions = props.actions;
  var is_opend = props.is_opend;
  var selected_item = props.selected_item;
  var theme_color = props.theme_color;
  var selected_page_num = menu.pages.findIndex(function (page) {
    return page.label === menu.current_page;
  });
  var selected_page = menu.pages[selected_page_num];
  var changeMenu = props.changeMenu;
  var enterd = function enterd() {
    return changeMenu(function (new_menu) {
      new_menu.menu.enterd = true;
    });
  };
  var leaved = function leaved() {
    return changeMenu(function (new_menu) {
      new_menu.menu.enterd = false;
    });
  };
  var onClick = function onClick(item) {
    if (is_opend) actions.menu.close();
    actions.menu.item.click(item);
  };
  var onChangeIsOpend = function onChangeIsOpend(val) {
    val ? actions.menu.open() : actions.menu.close();
  };
  var onClickPage = function onClickPage(v) {
    if (menu.current_page === v) return;
    actions.menu.close();
    var new_menu = _objectSpread({}, menu);
    new_menu.current_page = v;
    actions.menu.change(new_menu);
  };
  return /*#__PURE__*/React.createElement(_Box["default"], {
    onMouseEnter: enterd,
    onMouseLeave: leaved
  }, /*#__PURE__*/React.createElement(_Paper["default"], {
    sx: sx(theme_color)
  }, /*#__PURE__*/React.createElement(_Head["default"], null), /*#__PURE__*/React.createElement(_Pages["default"], {
    menu: menu,
    is_opend: is_opend,
    actions: actions,
    onChange: onChangeIsOpend,
    onClick: onClickPage,
    onClickItem: onClick
  }), /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx(theme_color).body
  }, selected_page.items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(_Box["default"], {
      key: item.url,
      sx: {
        mt: 0.3,
        mb: 0.3
      }
    }, /*#__PURE__*/React.createElement(_Item["default"], {
      key: i,
      data: item,
      selected: item.code === selected_item.code,
      onClick: onClick,
      theme_color: theme_color
    }));
  })), /*#__PURE__*/React.createElement(_Foot["default"], null)));
}
function sx(theme_color) {
  return {
    position: 'fixed',
    top: _layout.MENU_TOP,
    left: _layout.MENU_LEFT,
    // 利用側の box-sizing に左右されないように、幅を固定する。
    width: _layout.MENU_WIDTH,
    boxSizing: 'border-box',
    background: "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)"),
    // height: '100vh',
    zIndex: 8888887,
    display: 'flex',
    flexDirection: 'column',
    body: {
      width: _layout.MENU_WIDTH,
      boxSizing: 'border-box',
      padding: "5px ".concat(_layout.MENU_PADDING_X, "px"),
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
}