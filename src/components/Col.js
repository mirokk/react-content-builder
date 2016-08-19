import React from 'react';
import Handle from './Handle';
import Element from './Element';
import order from '../order';

export default class Col extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.col.params;
		this.update = false;		
	}

	handleChange(e){
		this.update=true;
		this.setState({width:e.target.value});   
	}

	componentDidUpdate(){
		if (this.update === true){
			order();
			this.update = false;
		}
	}

	render(){
		let elements = [];
		let col = this.props.col;
		if (typeof col.elements !== "undefined"){
			elements = col.elements;
		}
		let params = this.state;

		let gridClass="col-md-3";
		if (params.width === "full"){
			gridClass="col-md-12";
		} else if (params.width === "half") {
			gridClass="col-md-6";
		} else if (params.width === "third") {
			gridClass="col-md-4";
		}

		let key = 0;
		let rid="rid-"+Math.random();

		if (this.props.isEditor){
			return(
				<div id={rid} className={gridClass} data-data={JSON.stringify(params)}>
				<div className="col-editor-style">
					<div className="colhandle el-box-header">
						
						<Handle clazz="colhandle" rid={rid} >
							<select value={params.width} onChange={this.handleChange.bind(this)}>
								<option value="full">Full</option>
								<option value="half">Half</option>
								<option value="third">Third</option>
								<option value="quarter">Quarter</option>
						</select>
						</Handle>
					</div>
					
					<ElList elements={elements} isEditor={true} />
				</div>
				</div>
			);
		} else {
			return(
				<div className={gridClass} data-data={JSON.stringify(params)}>
					<ElList elements={elements} />
				</div>
			);
		}
	}
}

let ElList = ({elements, isEditor=false})=>{
	let key = 0;
	return(
		<div className="colContainer">
		{
			elements.map(function(e){
				key++;
				return(
					<Element key={"element"+key} element={e} isEditor={isEditor} />
				);
			})
		}
		</div>
	)
}