"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Head;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Head(props) {
  var sx = {
    height: 33,
    borderBottom: '1px solid #bbb',
    padding: '11px 22px'
  };
  return /*#__PURE__*/React.createElement(_Box["default"], {
    sx: sx
  });
}