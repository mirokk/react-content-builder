import React from 'react';
import order from '../order';

let rem=(rid)=>{
	var element = document.getElementById(rid);
	element.outerHTML = "";
	order();
}
export default ({clazz, children, rid})=>(
	<div className={"handle "+clazz}>
		{children}
		<i className="fa fa-trash" onClick={rem.bind(null, rid)} aria-hidden="true"></i>
		<i className="fa fa-arrows" aria-hidden="true"></i>

	</div>
);

/*
var Handle = React.createClass({
  render: function(){
    return(
      <div className={"handle "+this.props.clazz}>Move</div>
    );
  }
});

export default Handle*/