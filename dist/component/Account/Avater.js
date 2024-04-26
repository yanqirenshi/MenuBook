"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Avater;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _beach = _interopRequireDefault(require("@yanqirenshi/beach"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var u = new _beach["default"]();
function Avater(props) {
  var menu = props.menu;
  var actions = props.actions;
  var icon = props.icon;
  var change = actions.menu.change;
  var click = function click() {
    return change(u.catom(menu, function (new_menu) {
      new_menu.avater.clicked = !new_menu.avater.clicked;
      if (new_menu.avater.clicked) return;
      new_menu.avater.enterd = false;
      new_menu.menu.enterd = false;
    }));
  };
  var enterd = function enterd() {
    return change(u.catom(menu, function (new_menu) {
      new_menu.avater.enterd = true;
      new_menu.menu.enterd = true;
    }));
  };
  var leaved = function leaved() {
    return change(u.catom(menu, function (new_menu) {
      new_menu.avater.enterd = false;
    }));
  };
  return /*#__PURE__*/React.createElement(_Box["default"], {
    className: menu.avater.clicked ? 'pair-color1' : 'theme-color3',
    sx: sx(menu)
  }, /*#__PURE__*/React.createElement(_Box["default"], {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      width: 33,
      height: 33,
      borderRadius: 33
    }
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    alt: "Mobilus",
    src: icon,
    sx: {
      width: 33,
      height: 33
    },
    onClick: click,
    onMouseEnter: enterd,
    onMouseLeave: leaved
  })));
}
function sx(menu) {
  return {
    position: 'fixed',
    top: 15,
    left: 15,
    padding: 0.5,
    borderRadius: 22,
    zIndex: 8888888,
    boxSizing: 'border-box'
  };
}