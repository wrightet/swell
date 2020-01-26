import React from 'react';
import { connect } from 'react-redux';
import SurfSessionIndexContainer from './surf_session_index_container';
import './surfIndexItem.css'
class SurfSessionItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
       
        return(
            <div id="tes-div">
                <h1>i'm working</h1>
                 <p>{this.props.session.body}</p>
            </div>
             
        )
              
    }
}

export default SurfSessionItem;