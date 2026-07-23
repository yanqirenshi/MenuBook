"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pages;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _PageTitle = _interopRequireDefault(require("./PageTitle.js"));
var _Item = _interopRequireDefault(require("./Item.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Pages(props) {
  var menu = props.menu;
  var is_opend = props.is_opend;
  var onChange = props.onChange;
  var onClick = props.onClick;
  var onClickItem = props.onClickItem;
  var is_in_upper_half = props.is_in_upper_half;
  if (!is_opend) return null;
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: _defineProperty(_defineProperty({
      position: 'absolute',
      width: 'fit-content',
      padding: '8px 8px',
      borderRadius: '4px',
      boxShadow: 'var(--border-gray) 0 1px 3px 0',
      top: 'calc(100% - 34px)',
      left: '74px',
      background: '#ffffff'
    }, "boxShadow", '0px 0px 11px #888'), "display", 'flex')
  }, menu.pages.map(function (page, i) {
    return /*#__PURE__*/React.createElement(_Box["default"], {
      key: page.label,
      sx: {
        p: 0.5,
        pl: 2,
        pr: 2,
        borderLeft: i > 0 ? '1px solid #ccc' : 'none'
      }
    }, /*#__PURE__*/React.createElement(_PageTitle["default"], {
      page: page,
      onClick: onClick
    }), /*#__PURE__*/React.createElement(_Box["default"], {
      sx: {
        mt: 1
      }
    }, page.items.map(function (item) {
      return /*#__PURE__*/React.createElement(_Item["default"], {
        key: item.label,
        item: item,
        onClick: function onClick() {
          return onClickItem(item);
        }
      });
    })));
  }));
}
;