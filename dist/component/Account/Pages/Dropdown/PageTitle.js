"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageTitle;
var React = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function PageTitle(props) {
  var page = props.page;
  var _onClick = props.onClick;
  return /*#__PURE__*/React.createElement(_Typography["default"], {
    key: page.label,
    variant: "h6",
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
      borderRadius: '4px',
      padding: '2px 4px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }
    },
    onClick: function onClick(e) {
      return _onClick && _onClick(page.label);
    }
  }, page.icon && /*#__PURE__*/React.createElement("img", {
    src: page.icon,
    alt: page.label,
    style: {
      width: 20,
      height: 20,
      display: 'block'
    }
  }), page.label);
}
;