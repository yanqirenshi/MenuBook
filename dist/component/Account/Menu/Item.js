"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Item;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Item(props) {
  var item = props.data;
  var is_selected = props.selected;
  var _onClick = props.onClick;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    is_hover = _React$useState2[0],
    setIsHover = _React$useState2[1];
  return /*#__PURE__*/React.createElement(_Box["default"], {
    title: item.label,
    sx: {
      width: boxWidth(is_hover, is_selected, 33),
      height: 33,
      background: 'rgba(8, 156, 163, 1.0)',
      padding: '4px',
      borderRadius: '5px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    onClick: function onClick() {
      return _onClick(item);
    },
    onMouseEnter: function onMouseEnter() {
      return setIsHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHover(false);
    }
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      background: background(is_hover, is_selected),
      width: boxWidth(is_hover, is_selected, '100%'),
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '4px',
      padding: is_hover || is_selected ? '0px 11px 0px 11px' : 0,
      color: color(is_hover, is_selected),
      whiteSpace: 'nowrap',
      fontWeight: 'bold'
    }
  }, is_hover || is_selected ? item.label : item.label.substring(0, 1)));
}
function boxWidth(is_hover, is_selected, normal) {
  return is_hover || is_selected ? 'fit-content' : normal;
}
function color(is_hover, is_selected) {
  if (is_selected) return 'rgba(8, 156, 163, 1.0)';
  return '#ffffff';
}
function background(is_hover, is_selected) {
  if (is_selected) return '#ffffff';
  return 'rgba(8, 156, 163, 1.0)';
}