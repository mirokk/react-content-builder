'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsEditorCanvas = require('./components/EditorCanvas');

var _componentsEditorCanvas2 = _interopRequireDefault(_componentsEditorCanvas);

var refreshcb = function refreshcb() {};

var setCb = function setCb(cb) {
	refreshcb = cb;
};

exports.setCb = setCb;
var refresh = function refresh(content) {
	refreshcb(content);
};

exports.refresh = refresh;
var getChildWithClass = function getChildWithClass(node, className) {
	for (var i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].className == className) {
			return node.childNodes[i];
		}
		var r = getChildWithClass(node.childNodes[i], className);
		if (typeof r !== 'undefined') {
			return r;
		}
	}
	return undefined;
};

exports['default'] = function () {

	var rows = [];

	var editor = document.getElementById("editorContainer");
	for (var i = 0; i < editor.childNodes.length; i++) {

		var r = editor.childNodes[i];
		var resultRow = {
			cols: []
		};

		var rowContainer = getChildWithClass(r, "rowContainer");
		if (typeof rowContainer !== 'undefined') {

			for (var x = 0; x < rowContainer.childNodes.length; x++) {
				var col = rowContainer.childNodes[x];
				var cParams = JSON.parse(col.getAttribute('data-data'));
				var resultCol = {
					params: cParams,
					elements: []
				};

				var colContainer = getChildWithClass(col, 'colContainer');
				if (typeof colContainer !== 'undefined') {

					for (var z = 0; z < colContainer.childNodes.length; z++) {
						var element = colContainer.childNodes[z];
						var eParams = JSON.parse(element.getAttribute('data-data'));

						resultCol.elements.push(eParams);
					}
				}
				resultRow.cols.push(resultCol);
			}
		}
		rows.push(resultRow);
	}

	console.log(JSON.stringify(rows));
	refresh(rows);
};