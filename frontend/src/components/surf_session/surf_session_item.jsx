import React from 'react';
import './surfIndexItem.css';
import {formatDateTime, formatDate, formatTime} from '../../util/date_util'
class SurfSessionItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.session;
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(creatorId, ssId) {
       
        const { fetchSurfSessions, deleteSurfSession } = this.props;
        deleteSurfSession(creatorId, ssId)
            .then(fetchSurfSessions(creatorId));
    }

    

  

    render(){
     
        
        return(
            <div className="surf-log"> 
            <button 
                    className="delete-button"
                    onClick={() => this.handleDelete(this.props.creatorId, this.props.session._id)}
                >Delete Session
                </button>
                <h6 className="session-time">{formatDateTime(this.state.createdAt)}</h6>
                <p className="surf-post">{this.props.session.body}</p>
                
               
            </div>
             
        )
        
              
    }
}

export default SurfSessionItem;