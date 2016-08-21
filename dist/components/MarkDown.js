'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _micromarkdown = require('micromarkdown');

var _micromarkdown2 = _interopRequireDefault(_micromarkdown);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

module.exports = function (_ref) {
	var children = _ref.children;
	return _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: _micromarkdown2['default'].parse(children) } });
};