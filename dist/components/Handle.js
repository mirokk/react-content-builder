'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _order = require('../order');

var _order2 = _interopRequireDefault(_order);

var rem = function rem(rid) {
	var element = document.getElementById(rid);
	element.outerHTML = "";
	(0, _order2['default'])();
};

exports['default'] = function (_ref) {
	var clazz = _ref.clazz;
	var children = _ref.children;
	var rid = _ref.rid;
	return _react2['default'].createElement(
		'div',
		{ className: "handle " + clazz },
		children,
		_react2['default'].createElement('i', { className: 'fa fa-trash', onClick: rem.bind(null, rid), 'aria-hidden': 'true' }),
		_react2['default'].createElement('i', { className: 'fa fa-arrows', 'aria-hidden': 'true' })
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
module.exports = exports['default'];