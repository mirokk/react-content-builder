'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

exports['default'] = function (_ref) {
	var _ref$content = _ref.content;
	var content = _ref$content === undefined ? [] : _ref$content;

	var key = 0;
	return _react2['default'].createElement(
		'div',
		{ className: 'container-fluid' },
		content.map(function (row) {
			key++;
			return _react2['default'].createElement(_Row2['default'], { key: "row" + key, row: row, isEditor: false });
		})
	);
};

module.exports = exports['default'];