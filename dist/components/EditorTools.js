'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configElements = require('../config.elements');

var _configElements2 = _interopRequireDefault(_configElements);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

exports['default'] = function () {
	return _react2['default'].createElement(
		'div',
		{ className: 'toolbox editorTools editorContainer rowContainer colContainer' },
		_react2['default'].createElement(
			'div',
			{ className: 'toolbox-hl' },
			'Elements:'
		),
		Object.keys(_configElements2['default']).map(function (type) {
			var Element = _configElements2['default'][type];
			return _react2['default'].createElement(
				'div',
				{ key: type, className: 'toolbox-element elementhandle', 'data-data': JSON.stringify({ type: type }) },
				Element.name
			);
		}),
		_react2['default'].createElement(
			'div',
			{ className: 'toolbox-element rowhandle', 'data-data': '{}' },
			'Row'
		),
		_react2['default'].createElement(
			'div',
			{ className: 'toolbox-element-col colhandle col-md-4', 'data-data': JSON.stringify({ width: "third" }) },
			'Column'
		)
	);
};

module.exports = exports['default'];