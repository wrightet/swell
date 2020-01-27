import React from 'react';
import "./surfIndexItem.css"
class SurfSessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.session
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.action(this.props.currentUser.id, this.state)

    }
    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }
    render(){
        return (
            <div className="surf-session-form">
         
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea
                        value={this.state.body}
                        placeholder="How was your surf?" 
                        onChange={this.update('body')}/>
                    </label>
                   
                    <input className="Submit" type="submit" value={this.props.formType}/>
                </form>
            </div>
        );
    }
}

export default SurfSessionForm;