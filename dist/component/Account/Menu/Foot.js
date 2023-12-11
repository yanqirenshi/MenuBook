"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Foot;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Logout = _interopRequireDefault(require("@mui/icons-material/Logout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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