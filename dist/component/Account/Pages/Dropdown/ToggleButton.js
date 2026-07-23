"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleButton;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ToggleButton(props) {
  var children = props.children;
  var icon = props.icon;
  var is_opend = props.is_opend;
  var onChange = props.onChange;
  var sx = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    width: 'fit-content',
    cursor: 'pointer',
    fontWeight: is_opend ? 'bold' : 'normal',
    color: is_opend ? '#333' : '#fff',
    background: is_opend ? 'rgba(255,255,255,0.6)' : 'none'
  }, "width", '100%'), "display", 'flex'), "justifyContent", 'center'), "alignItems", 'center'), "gap", '6px'), "pt", icon ? 0.45 : 0.1), "pb", icon ? 0.45 : 0.8);
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx,
    onClick: function onClick() {
      return onChange(!is_opend);
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: String(children),
    style: {
      width: 16,
      height: 16,
      display: 'block',
      filter: is_opend ? 'none' : 'invert(1) brightness(1.5)'
    }
  }) : children);
}
;