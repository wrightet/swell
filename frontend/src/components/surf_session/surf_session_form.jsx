import React from 'react';
import SurfSpotContainer from '../surfspots/surf_spot_container';
import MapsContainer from '../../components/maps/map_container';
class SurfSessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)

    }

    render(){
        return (
            <div className="surf-session-form">

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="textarea"
                        value={this.state.body}
                        placeholder="How was your surf?"/>
                    </label>
                   
                    <input type="submit" value={this.props.formType}/>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default SurfSessionForm;