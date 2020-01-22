import React, { Component } from 'react'
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react'
import classes from './maps.modules.css'


class Mapping extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const style={
            width:'100%',
            
            height:'100%',
            display:'block'
        }


        return(
            <div style={{ position: 'relative', width: '100vw', height: '40vh' }}>
                <br/>
                <Map google={this.props.google} style={style} center={this.props.currentPos}/>
                <br/>
            </div>
        )
    }


}


export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Mapping);