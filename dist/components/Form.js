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

var Fields = {};

Fields['TextArea'] = function (_ref) {
	var field = _ref.field;
	var value = _ref.value;
	var handleChange = _ref.handleChange;
	return _react2['default'].createElement(
		'div',
		null,
		_react2['default'].createElement(
			'strong',
			null,
			field.hl
		),
		_react2['default'].createElement('br', null),
		_react2['default'].createElement('textarea', { id: field.slug, value: value, onChange: handleChange })
	);
};

Fields['Input'] = function (_ref2) {
	var field = _ref2.field;
	var value = _ref2.value;
	var handleChange = _ref2.handleChange;
	return _react2['default'].createElement(
		'div',
		null,
		_react2['default'].createElement(
			'strong',
			null,
			field.hl
		),
		_react2['default'].createElement('br', null),
		_react2['default'].createElement('input', { id: field.slug, value: value, onChange: handleChange })
	);
};

var Form = (function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form(props) {
		_classCallCheck(this, Form);

		_get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this, props);
		this.state = { visible: false, values: {} };
		if (typeof props.values !== 'undefined') {
			//alert(JSON.stringify(props.values))
			this.state.values = props.values;
		}
	}

	_createClass(Form, [{
		key: 'handleChange',
		value: function handleChange(e) {
			var v = this.state.values;
			v[e.target.id] = e.target.value;
			this.setState(v);
		}
	}, {
		key: 'save',
		value: function save() {
			this.props.save(this.state.values);
			this.toggle();
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			if (this.state.visible) {
				this.setState({ visible: false });
			} else {
				this.setState({ visible: true });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				'span',
				null,
				_react2['default'].createElement('i', { onClick: this.toggle.bind(this), className: 'fa fa-pencil', 'aria-hidden': 'true' }),
				_react2['default'].createElement(
					'div',
					{ id: "form" + this.props.id, className: 'd-modal-bg', style: this.state.visible ? { display: 'block', opacity: 1 } : { display: 'none' } },
					_react2['default'].createElement(
						'div',
						{ className: 'd-modal-content' },
						_react2['default'].createElement(
							'h1',
							null,
							'Edit'
						),
						JSON.stringify(this.state.values),
						this.props.fields.map(function (field) {
							var Field = Fields[field.type];
							return _react2['default'].createElement(Field, { key: field.slug, field: field, value: _this.state.values[field.slug], handleChange: _this.handleChange.bind(_this) });
						}),
						_react2['default'].createElement(
							'a',
							{ onClick: this.save.bind(this) },
							'Save'
						)
					)
				)
			);
		}
	}]);

	return Form;
})(_react2['default'].Component);

exports['default'] = Form;
module.exports = exports['default'];