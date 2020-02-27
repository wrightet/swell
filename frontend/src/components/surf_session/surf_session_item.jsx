import React from 'react';
import './surfIndexItem.css';
import {formatDateTime} from '../../util/date_util'
class SurfSessionItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.session;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(userId, ssId) {
       
        const { fetchSurfSessions, deleteSurfSession } = this.props;

        deleteSurfSession(userId, ssId)
        .then(fetchSurfSessions(userId))
        .catch(fetchSurfSessions(userId))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.session.length !== this.props.session.length)
            this.props.fetchSurfSessions(this.props.currentUser.id);
    }
  

    render(){
        
        return(
            <div>
                <h6 className="session-time">{formatDateTime(this.state.createdAt)}</h6>
                <div className="surf-log"> 
                    <p>{this.props.session.body}</p>
                    <button 
                        className="delete-button"
                        onClick={()=>this.handleDelete(this.props.currentUser.id, this.props.session._id)}
                    >x
                    </button>
                </div>
            </div>
             
        )
        
              
    }
}

export default SurfSessionItem;