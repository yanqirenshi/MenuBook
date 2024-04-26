"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _beach = _interopRequireDefault(require("@yanqirenshi/beach"));
var _Head = _interopRequireDefault(require("./Menu/Head.js"));
var _Foot = _interopRequireDefault(require("./Menu/Foot.js"));
var _Item = _interopRequireDefault(require("./Menu/Item.js"));
var _Pages = _interopRequireDefault(require("../Account/Pages.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import Tabs from './Menu/Tabs.js';
var u = new _beach["default"]();
function Menu(props) {
  var menu = props.menu || [];
  var actions = props.actions;
  var is_opend = props.is_opend;
  var selected_item = props.selected_item;
  var selected_page_num = menu.pages.findIndex(function (page) {
    return page.label === menu.current_page;
  });
  var selected_page = menu.pages[selected_page_num];
  var change = actions.menu.change;
  var enterd = function enterd() {
    return change(u.catom(menu, function (new_menu) {
      new_menu.menu.enterd = true;
    }));
  };
  var leaved = function leaved() {
    return change(u.catom(menu, function (new_menu) {
      new_menu.menu.enterd = false;
    }));
  };
  var onClick = function onClick(item) {
    return actions.menu.item.click(item);
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
    sx: sx()
  }, /*#__PURE__*/React.createElement(_Head["default"], null), /*#__PURE__*/React.createElement(_Pages["default"], {
    menu: menu,
    is_opend: is_opend,
    actions: actions,
    onChange: onChangeIsOpend,
    onClick: onClickPage,
    onClickItem: onClick
  }), /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx().body
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
      onClick: onClick
    }));
  })), /*#__PURE__*/React.createElement(_Foot["default"], null)));
}
function sx() {
  return {
    position: 'fixed',
    top: 8,
    left: 8,
    background: 'rgba(8, 156, 163, 1.0)',
    // height: '100vh',
    zIndex: 8888887,
    display: 'flex',
    flexDirection: 'column',
    body: {
      maxWidth: 55,
      minWidth: 55,
      padding: '5px 5px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
}