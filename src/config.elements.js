import React from 'react';

export default {

	Text : {
		name : "Text area",
		fields : [
			{
				type : "TextArea",
				slug : "text",
				hl : "Content"
			}    
		],
		template : ({params})=>(
		  	<div>
		  		{params.text}
			</div>
		)
	},


	Headline : {
		name : "Headline",
		fields : [
			{
				type : "Input",
				slug : "hl",
				hl : "Headline"
			}     
		],
		template : ({params})=>(
		  	<div>
		  		<h1>{params.hl}</h1>
			</div>
		)
	},


	TextAndHeadline : {
		name : "Text with headline",
		fields : [
			{
				type : "TextArea",
				slug : "text",
				hl : "Content"
			},
			{
				type : "Input",
				slug : "hl",
				hl : "Headline"
			}     
		],
		template : ({params})=>(
		  	<div>
		  		<h1>{params.hl}</h1>
				{params.text}
			</div>
		)
	}
	
}

