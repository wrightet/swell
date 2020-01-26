import React from 'react';
import { connect } from 'react-redux';
import SurfSessionIndexContainer from './surf_session_index_container';

class SurfSessionItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                 <p>{this.props.session.body}</p>
            </div>
             
        )
              
    }
}

export default SurfSessionItem;