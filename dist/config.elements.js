'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsMarkDown = require('./components/MarkDown');

var _componentsMarkDown2 = _interopRequireDefault(_componentsMarkDown);

exports['default'] = {

	Text: {
		name: "Text area",
		fields: [{
			type: "TextArea",
			slug: "text",
			hl: "Content"
		}],
		template: function template(_ref) {
			var params = _ref.params;
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					_componentsMarkDown2['default'],
					null,
					params.text
				)
			);
		}
	},

	Headline: {
		name: "Headline",
		fields: [{
			type: "Input",
			slug: "hl",
			hl: "Headline"
		}],
		template: function template(_ref2) {
			var params = _ref2.params;
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'h1',
					null,
					params.hl
				)
			);
		}
	},

	TextAndHeadline: {
		name: "Text with headline",
		fields: [{
			type: "Input",
			slug: "hl",
			hl: "Headline"
		}, {
			type: "TextArea",
			slug: "text",
			hl: "Content"
		}],
		template: function template(_ref3) {
			var params = _ref3.params;
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'h1',
					null,
					params.hl
				),
				_react2['default'].createElement(
					_componentsMarkDown2['default'],
					null,
					params.text
				)
			);
		}
	}

};
module.exports = exports['default'];