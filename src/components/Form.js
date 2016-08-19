import React from 'react'

const Fields = {};

Fields['TextArea'] = ({field, value, handleChange})=>(
	<div>
		<strong>{field.hl}</strong><br />
		<textarea className="form-control" style={{height:"260px"}} id={field.slug} value={value} onChange={handleChange}/>
	</div>
)

Fields['Input'] = ({field, value, handleChange})=>(
	<div>
		<strong>{field.hl}</strong>
		<input className="form-control" id={field.slug} value={value} onChange={handleChange} />
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

	cancel(){
		this.setState({values:this.props.values});
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
			          <h3><i className="fa fa-cubes green" aria-hidden="true"></i> Edit Content</h3><br />
			          {
			          	this.props.fields.map((field)=>{
			          		let Field = Fields[field.type];
			          		return (
			          			<Field key={field.slug} field={field} value={this.state.values[field.slug]} handleChange={this.handleChange.bind(this)} />
			          		);
			          	})
			          }
			          <button type="button" style={{float:"right"}} className="btn btn-success" onClick={this.save.bind(this)}>Save</button>
			          <button type="button" style={{float:"right", marginRight:"10px"}} className="btn btn-default" onClick={this.cancel.bind(this)}>Cancel</button>
			        </div>
			        
			    </div>
		    </span>
		);	
	}
}

