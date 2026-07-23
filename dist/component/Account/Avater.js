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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
    top: 20,
    left: 20,
    padding: 0.5,
    borderRadius: 22,
    zIndex: 8888888,
    boxSizing: 'border-box'
  };
}