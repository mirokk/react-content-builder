import React from 'react';

import ElementConfig from '../config.elements';
import Handle from './Handle';
import Row from './Row'
import Col from './Col'

export default ()=>(
	<div className="toolbox editorTools editorContainer rowContainer colContainer container-fluid">
		<h3>Tools</h3>
		{	
			Object.keys(ElementConfig).map(function (type) {
				let Element = ElementConfig[type];
				return (
					<div key={type} className="toolbox-element elementhandle" data-data={JSON.stringify({type:type})}>
						{Element.name}
					</div>
				);
			})
		}
		<div className="toolbox-element rowhandle" data-data="{}" >
			Row
		</div>
		<div className="toolbox-element colhandle" data-data={JSON.stringify({width:"third"})} >
			Column
		</div>
	</div>
);

