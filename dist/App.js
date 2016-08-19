'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _initdragula = require('./initdragula');

var _initdragula2 = _interopRequireDefault(_initdragula);

var _componentsEditor = require('./components/Editor');

var _componentsEditor2 = _interopRequireDefault(_componentsEditor);

var _componentsEditorCanvas = require('./components/EditorCanvas');

var _componentsEditorCanvas2 = _interopRequireDefault(_componentsEditorCanvas);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

var content = [{ "cols": [] }];
content = [{ "cols": [{ "params": { "width": "third" }, "elements": [{ "type": "TextAndHeadline", "params": { "text": "content", "hl": "heal" } }] }, { "params": { "width": "third" }, "elements": [{ "type": "Headline", "params": { "hl": "lskdf" } }, { "type": "Text", "params": { "text": "asdfasdfasdfasd asdfas asdasd asd asd fasdf asd asdf" } }] }, { "params": { "width": "third" }, "elements": [{ "type": "TextAndHeadline", "params": { "text": "kjhg" } }] }] }, { "cols": [] }, { "cols": [{ "params": { "width": "full" }, "elements": [] }] }];

var save = function save(c) {
  alert("result: " + JSON.stringify(c));
};

_reactDom2['default'].render(_react2['default'].createElement(_componentsEditor2['default'], { content: content, save: save }), document.getElementById("content"));

(0, _initdragula2['default'])();