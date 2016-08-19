import React from 'react';

import EditorCanvas from './EditorCanvas';
import EditorTools  from './EditorTools';

import Content from './Content';

export default ({content, save})=>(
	<div>
		<div className="editor-tools-container">
			<EditorTools />
		</div>
		<div className="editor-canvas-container">
			<EditorCanvas content={content} save={save} />
			<br /><br /><br /><br /><br /><br /><br />
			<Content content={content} />
		</div>
	</div>
);
