import React from "react"
import Handle from './Handle'
import Col from './Col'

export default ({row, isEditor=false})=>{
	let cols = [];
	if (typeof row.cols !== "undefined"){
		cols = row.cols;
	}

	if (isEditor){ 
		return(
			<div className="row row-editor-style">
				<div className="rowhandle el-box-header">
					<Handle clazz="rowhandle" />
				</div>
				<ColList cols={cols} isEditor={isEditor} />
			</div>
		);

	} else { 
		return (
			<div className="row">
				<ColList cols={cols} />
			</div>
		);
	}		
}


let ColList = ({cols, isEditor=false}) => {
	let key = 0;
	return (
		<div className="rowContainer">
		{
			cols.map((col)=>{
				key++;
				return(
					<Col key={"col"+key} col={col} isEditor={isEditor} />
				);
			})
		}
		</div>
	)
}


