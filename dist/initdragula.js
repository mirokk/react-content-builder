'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDragula = require('react-dragula');

var _reactDragula2 = _interopRequireDefault(_reactDragula);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

exports['default'] = function () {
	(0, _reactDragula2['default'])({
		isContainer: function isContainer(el) {
			return el.classList.contains('editorContainer');
		},
		moves: function moves(el, container, handle) {
			return handle.classList.contains('rowhandle');
		},
		copy: function copy(el, source) {
			return source.classList.contains('editorTools');
		},
		accepts: function accepts(el, target) {
			return !target.classList.contains('editorTools');
		}
	}).on('dragend', function (el) {
		(0, _order2['default'])();
	});

	(0, _reactDragula2['default'])({
		isContainer: function isContainer(el) {
			return el.classList.contains('rowContainer');
		},
		moves: function moves(el, container, handle) {
			return handle.classList.contains('colhandle');
		},
		copy: function copy(el, source) {
			return source.classList.contains('editorTools');
		},
		accepts: function accepts(el, target) {
			return !target.classList.contains('editorTools');
		}
	}).on('dragend', function (el) {
		(0, _order2['default'])();
	});

	(0, _reactDragula2['default'])({
		isContainer: function isContainer(el) {
			return el.classList.contains('colContainer');
		},
		moves: function moves(el, container, handle) {
			return handle.classList.contains('elementhandle');
		},
		copy: function copy(el, source) {
			return source.classList.contains('editorTools');
		},
		accepts: function accepts(el, target) {
			return !target.classList.contains('editorTools');
		}
	}).on('dragend', function (el) {
		(0, _order2['default'])();
	});
};

module.exports = exports['default'];