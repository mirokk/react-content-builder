'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

exports['default'] = function (_ref) {
	var row = _ref.row;
	var _ref$isEditor = _ref.isEditor;
	var isEditor = _ref$isEditor === undefined ? false : _ref$isEditor;

	var cols = [];
	if (typeof row.cols !== "undefined") {
		cols = row.cols;
	}

	if (isEditor) {
		var rid = "rid-" + Math.random();
		return _react2['default'].createElement(
			'div',
			{ id: rid, className: 'row row-editor-style' },
			_react2['default'].createElement(
				'div',
				{ className: 'rowhandle el-box-header' },
				_react2['default'].createElement(_Handle2['default'], { clazz: 'rowhandle', rid: rid })
			),
			_react2['default'].createElement(ColList, { cols: cols, isEditor: isEditor })
		);
	} else {
		return _react2['default'].createElement(
			'div',
			{ className: 'row' },
			_react2['default'].createElement(ColList, { cols: cols })
		);
	}
};

var ColList = function ColList(_ref2) {
	var cols = _ref2.cols;
	var _ref2$isEditor = _ref2.isEditor;
	var isEditor = _ref2$isEditor === undefined ? false : _ref2$isEditor;

	var key = 0;
	return _react2['default'].createElement(
		'div',
		{ className: 'rowContainer' },
		cols.map(function (col) {
			key++;
			return _react2['default'].createElement(_Col2['default'], { key: "col" + key, col: col, isEditor: isEditor });
		})
	);
};
module.exports = exports['default'];