import React from 'react';

import ElementConfig from '../config.elements';
import Handle from './Handle';
import Row from './Row'
import Col from './Col'

export default ()=>(
	<div className="toolbox editorTools editorContainer rowContainer colContainer">
		<div className="toolbox-hl">Elements:</div>
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
		<div className="toolbox-element-col colhandle col-md-4" data-data={JSON.stringify({width:"third"})} >
			Column
		</div>
	</div>
);

