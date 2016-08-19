import React from 'react';
import ReactDOM from 'react-dom';
import EditorCanvas from './components/EditorCanvas';

let refreshcb = ()=>{};

export let setCb = (cb)=>{
  refreshcb = cb;
}

export let refresh = (content)=>{
  refreshcb(content);
}


let getChildWithClass = (node, className)=>{
	for (var i = 0; i < node.childNodes.length; i++){
		if (node.childNodes[i].className == className){
			return node.childNodes[i];
		}
		var r = getChildWithClass(node.childNodes[i], className);
		if (typeof r !== 'undefined'){
			return r;
		}
	}
	return undefined;
}



export default ()=>{

  var rows = [];

  var editor = document.getElementById("editorContainer");
  for (var i = 0; i < editor.childNodes.length; i++){

    var r = editor.childNodes[i];
    var resultRow = {
      cols:[]
    };

    var rowContainer = getChildWithClass(r, "rowContainer");
    if (typeof rowContainer !== 'undefined'){

    	for (var x = 0; x < rowContainer.childNodes.length; x++){
			var col = rowContainer.childNodes[x];         
			var cParams= JSON.parse(col.getAttribute('data-data'));
			var resultCol = {
				params:cParams,
				elements:[]
			};

			var colContainer = getChildWithClass(col, 'colContainer');
			if (typeof colContainer !== 'undefined'){

				for (var z = 0; z<colContainer.childNodes.length; z++){
					var element = colContainer.childNodes[z];
					var eParams= JSON.parse(element.getAttribute('data-data'));

					resultCol.elements.push(eParams);
				}
			}
			resultRow.cols.push(resultCol);
        }
    }
    rows.push(resultRow);
  }

  console.log(JSON.stringify(rows));
  refresh(rows);
}
 
