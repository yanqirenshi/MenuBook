"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Item;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Item(props) {
  var item = props.data;
  var is_selected = props.selected;
  var _onClick = props.onClick;
  var theme_color = props.theme_color;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    is_hover = _React$useState2[0],
    setIsHover = _React$useState2[1];
  var is_expanded = is_hover || is_selected;
  return /*#__PURE__*/React.createElement(_Box["default"], {
    title: item.label,
    sx: {
      width: boxWidth(is_hover, is_selected, 33),
      height: 33,
      background: "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)"),
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
      background: background(is_hover, is_selected, theme_color),
      width: boxWidth(is_hover, is_selected, '100%'),
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: item.icon && is_expanded ? '8px' : 0,
      borderRadius: '4px',
      padding: is_expanded ? '0px 11px 0px 11px' : 0,
      color: color(is_hover, is_selected, theme_color),
      whiteSpace: 'nowrap',
      fontWeight: 'bold'
    }
  }, item.icon && /*#__PURE__*/React.createElement("img", {
    src: item.icon,
    alt: item.label,
    style: {
      width: 18,
      height: 18,
      display: 'block',
      // 背景が紫(未選択)のときは白っぽく、白背景(選択中)のときは元の色に
      filter: is_selected ? 'none' : 'invert(1) brightness(1.5)'
    }
  }), item.icon ? is_expanded && item.label : is_expanded ? item.label : item.label.substring(0, 1)));
}
function boxWidth(is_hover, is_selected, normal) {
  return is_hover || is_selected ? 'fit-content' : normal;
}
function color(is_hover, is_selected, theme_color) {
  if (is_selected) return "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)");
  return '#ffffff';
}
function background(is_hover, is_selected, theme_color) {
  if (is_selected) return '#ffffff';
  return "rgba(".concat(theme_color.r, ", ").concat(theme_color.g, ", ").concat(theme_color.b, ", 1.0)");
}