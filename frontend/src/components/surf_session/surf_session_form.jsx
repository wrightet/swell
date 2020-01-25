import React from 'react';

class SurfSessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props
    }
    render(){
        return (
            <div className="surf-session-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="textarea"
                        value={this.state.text}
                        placeholder="How was your surf?"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default SurfSessionForm;