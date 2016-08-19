"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports["default"] = function (_ref) {
  var clazz = _ref.clazz;
  var children = _ref.children;
  return _react2["default"].createElement(
    "div",
    { className: "handle " + clazz },
    children,
    _react2["default"].createElement("i", { className: "fa fa-trash", "aria-hidden": "true" }),
    _react2["default"].createElement("i", { className: "fa fa-arrows", "aria-hidden": "true" })
  );
};

/*
var Handle = React.createClass({
  render: function(){
    return(
      <div className={"handle "+this.props.clazz}>Move</div>
    );
  }
});

export default Handle*/
module.exports = exports["default"];