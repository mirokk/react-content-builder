import React from 'react';
import Handle from './Handle';

import Form from './Form';
import order from '../order';
import ElementConfig from '../config.elements';


export default class Element extends React.Component {
	constructor(props){
		super(props);

		this.state = this.props.element;
		if (typeof this.state.params === 'undefined'){
			this.state.params={};
		}
		
	}

	save(p){
		this.setState({params:p});
	}

	render(){

		let ElC = ElementConfig[this.state.type];

		if (this.props.isEditor){
			return(
				<div className="element" data-data={JSON.stringify(this.state)}>
					<div className="elementhandle el-box-header">					
						<Handle clazz="elementhandle">
							<Form fields={ElC.fields} values={this.state.params} save={this.save.bind(this)} />
						</Handle>
					</div>
					<div className="el-editor-content">
						<ElC.template params={this.state.params} />
					</div>
				</div>
			);
		} else {
			return(
				<div className="element">
					<ElC.template params={this.state.params} />
				</div>
			);
		}

		
	}
}

