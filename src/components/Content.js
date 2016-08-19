import React from 'react';
import Row from './Row';


export default ({content})=>{
	let key = 0;
	
	return(		
		<div className="container-fluid">
		{
			content.map(function(row){
				key++;
				return(
					<Row key={"row"+key} row={row} isEditor={false} />
				);
			})
		}
		</div>
		
	);
}
