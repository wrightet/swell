import React from 'react';
import { connect } from 'react-redux';
import SurfSessionIndexContainer from './surf_session_index_container';
import './surfIndexItem.css'
class SurfSessionItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.session;
        // debugger
    }

    render(){
     
        
        return(
            <div id="tes-div">
            
                 <p className="surf-post">{this.props.session.body}</p><div className="button-div"> <button 
                 onClick={() => this.props.deleteSurfSession(this.state.creatorId,
                  this.props.session.id)}
                  className="delete-button"
                  >Delete Session</button></div>
                
            </div>
             
        )
        
              
    }
}

export default SurfSessionItem;