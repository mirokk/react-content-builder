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

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

var _order = require('../order');

var _order2 = _interopRequireDefault(_order);

var Col = (function (_React$Component) {
	_inherits(Col, _React$Component);

	function Col(props) {
		_classCallCheck(this, Col);

		_get(Object.getPrototypeOf(Col.prototype), 'constructor', this).call(this, props);
		this.state = this.props.col.params;
		this.update = false;
	}

	_createClass(Col, [{
		key: 'handleChange',
		value: function handleChange(e) {
			this.update = true;
			this.setState({ width: e.target.value });
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.update === true) {
				(0, _order2['default'])();
				this.update = false;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var elements = [];
			var col = this.props.col;
			if (typeof col.elements !== "undefined") {
				elements = col.elements;
			}
			var params = this.state;

			var gridClass = "col-md-3";
			if (params.width === "full") {
				gridClass = "col-md-12";
			} else if (params.width === "half") {
				gridClass = "col-md-6";
			} else if (params.width === "third") {
				gridClass = "col-md-4";
			}

			var key = 0;
			if (this.props.isEditor) {
				return _react2['default'].createElement(
					'div',
					{ className: gridClass, 'data-data': JSON.stringify(params) },
					_react2['default'].createElement(
						'div',
						{ className: 'col-editor-style' },
						_react2['default'].createElement(
							'div',
							{ className: 'colhandle el-box-header' },
							_react2['default'].createElement(
								_Handle2['default'],
								{ clazz: 'colhandle' },
								_react2['default'].createElement(
									'select',
									{ value: params.width, onChange: this.handleChange.bind(this) },
									_react2['default'].createElement(
										'option',
										{ value: 'full' },
										'Full'
									),
									_react2['default'].createElement(
										'option',
										{ value: 'half' },
										'Half'
									),
									_react2['default'].createElement(
										'option',
										{ value: 'third' },
										'Third'
									),
									_react2['default'].createElement(
										'option',
										{ value: 'quarter' },
										'Quarter'
									)
								)
							)
						),
						_react2['default'].createElement(ElList, { elements: elements, isEditor: true })
					)
				);
			} else {
				return _react2['default'].createElement(
					'div',
					{ className: gridClass, 'data-data': JSON.stringify(params) },
					_react2['default'].createElement(ElList, { elements: elements })
				);
			}
		}
	}]);

	return Col;
})(_react2['default'].Component);

exports['default'] = Col;

var ElList = function ElList(_ref) {
	var elements = _ref.elements;
	var _ref$isEditor = _ref.isEditor;
	var isEditor = _ref$isEditor === undefined ? false : _ref$isEditor;

	var key = 0;
	return _react2['default'].createElement(
		'div',
		{ className: 'colContainer' },
		elements.map(function (e) {
			key++;
			return _react2['default'].createElement(_Element2['default'], { key: "element" + key, element: e, isEditor: isEditor });
		})
	);
};
module.exports = exports['default'];