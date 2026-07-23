"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pages;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Dropdown = _interopRequireDefault(require("./Pages/Dropdown.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function Pages(props) {
  var menu = props.menu;
  var is_opend = props.is_opend;
  var onChange = props.onChange;
  var onClick = props.onClick;
  var onClickItem = props.onClickItem;
  var sx = {
    borderBottom: '1px solid #bbb',
    padding: '0px 0px',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx
  }, /*#__PURE__*/React.createElement(_Dropdown["default"], {
    menu: menu,
    is_opend: is_opend,
    onChange: onChange,
    onClick: onClick,
    onClickItem: onClickItem
  }));
}
;