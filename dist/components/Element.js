'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _order = require('../order');

var _order2 = _interopRequireDefault(_order);

var _configElements = require('../config.elements');

var _configElements2 = _interopRequireDefault(_configElements);

var Element = (function (_React$Component) {
	_inherits(Element, _React$Component);

	function Element(props) {
		_classCallCheck(this, Element);

		_get(Object.getPrototypeOf(Element.prototype), 'constructor', this).call(this, props);

		this.state = this.props.element;
		if (typeof this.state.params === 'undefined') {
			this.state.params = {};
		}
	}

	_createClass(Element, [{
		key: 'save',
		value: function save(p) {
			this.setState({ params: p });
		}
	}, {
		key: 'render',
		value: function render() {

			var ElC = _configElements2['default'][this.state.type];

			if (this.props.isEditor) {
				return _react2['default'].createElement(
					'div',
					{ className: 'element', 'data-data': JSON.stringify(this.state) },
					_react2['default'].createElement(
						'div',
						{ className: 'elementhandle el-box-header' },
						_react2['default'].createElement(
							_Handle2['default'],
							{ clazz: 'elementhandle' },
							_react2['default'].createElement(_Form2['default'], { fields: ElC.fields, values: this.state.params, save: this.save.bind(this) })
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'el-editor-content' },
						_react2['default'].createElement(ElC.template, { params: this.state.params })
					)
				);
			} else {
				return _react2['default'].createElement(
					'div',
					{ className: 'element' },
					_react2['default'].createElement(ElC.template, { params: this.state.params })
				);
			}
		}
	}]);

	return Element;
})(_react2['default'].Component);

exports['default'] = Element;
module.exports = exports['default'];