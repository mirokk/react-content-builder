import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import {setCb} from '../order';
import initdragula from '../initdragula';


let EditorCanvasInner = ({content, save})=>{
	let key = 0;
	
	return(		
		<div>
			<div className="editorContainer container-fluid" id="editorContainer">
			{
				content.map(function(row){
					key++;
					return(
						<Row key={"row"+key} row={row} isEditor={true} />
					);
				})
			}
			</div>
			<button onClick={()=>{save(content);}}>Save</button>
		</div>
		
	);
}

export default class EditorCanvas extends React.Component{
	
	constructor(props){
		super(props);
		this.state= {content:props.content};
		setCb((content)=>{
			this.setState({content:content});
		});
	}

	componentDidMount(){
		initdragula();
	}

	render(){
		return (
			<EditorCanvasInner key={"e"+Date.now()} content={this.state.content} save={this.props.save} />
		)
	}
}