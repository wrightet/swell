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
            .then(this.props.fetchSurfSessions(this.props.currentUser.id))
            .then(this.setState({body:""}))

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
                        onChange={this.update('body')}
                        className="session-text-area"/>
                    </label>
                   
                    <input className="Submit" type='submit' value='Post'/>
                </form>
            </div>
        );
    }
}

export default SurfSessionForm;