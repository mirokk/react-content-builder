'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EditorCanvas = require('./EditorCanvas');

var _EditorCanvas2 = _interopRequireDefault(_EditorCanvas);

var _EditorTools = require('./EditorTools');

var _EditorTools2 = _interopRequireDefault(_EditorTools);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

exports['default'] = function (_ref) {
	var content = _ref.content;
	var save = _ref.save;
	return _react2['default'].createElement(
		'div',
		null,
		_react2['default'].createElement(
			'div',
			{ className: 'editor-tools-container' },
			_react2['default'].createElement(_EditorTools2['default'], null)
		),
		_react2['default'].createElement(
			'div',
			{ className: 'editor-canvas-container' },
			_react2['default'].createElement(_EditorCanvas2['default'], { content: content, save: save })
		)
	);
};

module.exports = exports['default'];