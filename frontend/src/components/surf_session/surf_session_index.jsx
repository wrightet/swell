import React from 'react';
import SurfSessionItem from './surf_session_item';
import SurfSessionIndexContainer from './surf_session_index_container';
class SurfSessionIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestSurfSessions();
    }
    render(){
        const {sessions} = this.props;
        if (!sessions){return null;}

       return (
           <div>
               <ul>
                   <li><SurfSessionItem/></li>
               </ul>
           </div>
       ) 
    }
}

export default SurfSessionIndex;