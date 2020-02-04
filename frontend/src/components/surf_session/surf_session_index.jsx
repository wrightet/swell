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
    componentDidUpdate(){
        this.props.fetchSurfSessions(this.props.currentUser.id);
    }

    render(){
        const {sessions, deleteSurfSession, fetchSurfSessions} = this.props;
       
        if (!sessions[0]){return null;}
        else {
            const realSessions = sessions[0];
            return (
                <div className="surf-sessions-div">
                    <h1 className='surfers-log'>Surfer's Log</h1>
                    
                   
                    <ul>
                        {realSessions.map(session => (
                            <li key={session._id}>
                                <SurfSessionItem session={session} 
                                deleteSurfSession={deleteSurfSession} 
                                fetchSurfSessions={fetchSurfSessions} 
                                key={session._id}
                                />
                            </li>
                            ))}
                        
                    </ul>
                </div>
       ) 
        }
        
    }
}

export default SurfSessionIndex;