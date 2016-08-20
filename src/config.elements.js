import React from 'react';
import MarkDown from './components/MarkDown';


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
		  		<MarkDown>{params.text}</MarkDown>
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
				type : "Input",
				slug : "hl",
				hl : "Headline"
			},
			{
				type : "TextArea",
				slug : "text",
				hl : "Content"
			}
		],
		template : ({params})=>(
		  	<div>
		  		<h1>{params.hl}</h1>
				<MarkDown>{params.text}</MarkDown>
			</div>
		)
	}
	
}

