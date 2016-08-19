import React from 'react'

const Fields = {};

Fields['TextArea'] = ({field, value, handleChange})=>(
	<div>
		<strong>{field.hl}</strong><br />
		<textarea id={field.slug} value={value} onChange={handleChange}/>
	</div>
)

Fields['Input'] = ({field, value, handleChange})=>(
	<div>
		<strong>{field.hl}</strong><br />
		<input id={field.slug} value={value} onChange={handleChange} />
	</div>
)


export default class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = { visible: false, values: {}};
		if (typeof props.values !== 'undefined'){
			//alert(JSON.stringify(props.values))
			this.state.values = props.values;
		}
	}

	handleChange(e){
		let v = this.state.values;
		v[e.target.id] = e.target.value;
		this.setState(v);
	}

	save(){
		this.props.save(this.state.values);
		this.toggle();
	}

	toggle(){
		if (this.state.visible){
			this.setState({visible: false});
		} else {
			this.setState({visible: true});
		}
	}
	
	render(){
		return (
			<span>
				<i onClick={this.toggle.bind(this)} className="fa fa-pencil" aria-hidden="true"></i>
				<div id={"form"+this.props.id} className="d-modal-bg" style={this.state.visible?{display:'block', opacity:1}:{display:'none'}}>
			        <div className="d-modal-content">
			          <h1>Edit</h1>{JSON.stringify(this.state.values)}
			          {
			          	this.props.fields.map((field)=>{
			          		let Field = Fields[field.type];
			          		return (
			          			<Field key={field.slug} field={field} value={this.state.values[field.slug]} handleChange={this.handleChange.bind(this)} />
			          		);
			          	})
			          }
			          <a onClick={this.save.bind(this)}>Save</a>
			        </div>
			        
			    </div>
		    </span>
		);	
	}
}

