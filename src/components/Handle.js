import React from 'react'


export default ({clazz, children})=>(
	<div className={"handle "+clazz}>
		{children}
		<i className="fa fa-trash" aria-hidden="true"></i>
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