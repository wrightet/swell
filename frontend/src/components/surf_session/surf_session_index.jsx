import React from 'react';
import SurfSessionItem from './surf_session_item';
import SurfSessionIndexContainer from './surf_session_index_container';
import './surfIndexItem.css';

class SurfSessionIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
        this.props.fetchSurfSessions(this.props.currentUser.id);
    }
    render(){
        const {sessions} = this.props;
        if (!sessions){return null;}
        
       return (
           <div className="Sessions">
               <ul>
                   {sessions.map(session => (
                       <li><SurfSessionItem session={session}/></li>
                    ))}
                   
               </ul>
           </div>
       ) 
    }
}

export default SurfSessionIndex;