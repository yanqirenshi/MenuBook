"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Foot;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Logout = _interopRequireDefault(require("@mui/icons-material/Logout"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function Foot(props) {
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      borderTop: '1px solid #eee',
      pt: 1,
      pb: 1,
      paddingLeft: '5px',
      paddingRight: '5px'
    }
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgba(255,255,255, 0.2)'
    }
  }, /*#__PURE__*/React.createElement(_Logout["default"], null)));
}