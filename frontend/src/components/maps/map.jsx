import React, { Component } from 'react'
import classes from './map.modules.css'

class Mapping extends Component {
    constructor(props){
        super(props);
        this.initMap=this.initMap.bind(this)
    }

    initMap(){
       new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.773972, lng: -122.431297 },
            zoom: 13,
            maxZoom: 15
        });

    }

    componentDidMount(){
        this.initMap();
}

    render(){
        return(
            <div id='map'>
            </div>
        )
    }


}


export default Mapping;




//npm google maps react, don't use
// import {Map,Marker,GoogleApiWrapper} from 'google-maps-react'


// style = {{ position: 'relative', width: '100vw', height: '40vh' }}
{/* <br/>
                <Map google={this.props.google} 
                style={style} 
                center={this.props.currentPos}/> */}



// GoogleApiWrapper
// ({
//     apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
// })(Mapping);