import React from 'react';
import SurfSessionItem from './surf_session_item';
import SurfSessionIndexContainer from './surf_session_index_container';
import SurfSessionContainer from './surf_session_container';
import "./surfIndex.css"
class SurfSessionIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
        this.props.fetchSurfSessions(this.props.currentUser.id);
     
    }

  

    // componentWillUnmount(){
    //     this.props.deleteSurfSession(this.props.creatorId, this.props.session._id)
    // }
    render(){
        const {sessions, deleteSurfSession, fetchSurfSessions} = this.props;
       
        if (!sessions[0]){return null;}
        else {
            const realSessions = sessions[0];
            return (
                <div className="surf-sessions-div">
                    <ul>
                        {realSessions.map(session => (
                            <li><SurfSessionItem session={session} deleteSurfSession={deleteSurfSession} fetchSurfSessions={fetchSurfSessions} key={session._id}/></li>
                            ))}
                        
                    </ul>
                </div>
       ) 
        }
        
    }
}

export default SurfSessionIndex;