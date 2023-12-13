"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import Tabs from './Menu/Tabs.js';

var u = new _beach["default"]();
function Menu(props) {
  var menu = props.menu || [];
  var actions = props.actions;
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
  return /*#__PURE__*/React.createElement(_Box["default"], {
    onMouseEnter: enterd,
    onMouseLeave: leaved
  }, /*#__PURE__*/React.createElement(_Paper["default"], {
    sx: sx()
  }, /*#__PURE__*/React.createElement(_Head["default"], null), /*#__PURE__*/React.createElement(_Box["default"], {
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
      maxWidth: 45,
      minWidth: 45,
      padding: '5px 5px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
}