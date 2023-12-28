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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
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
      left: '66px',
      background: '#ffffff'
    }, "boxShadow", '0px 0px 11px #888'), "display", 'flex')
  }, menu.pages.map(function (page) {
    return /*#__PURE__*/React.createElement(_Box["default"], {
      sx: {
        p: 0.5,
        pl: 2,
        pr: 2
      }
    }, /*#__PURE__*/React.createElement(_PageTitle["default"], {
      key: page.label,
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