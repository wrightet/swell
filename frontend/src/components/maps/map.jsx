import React, { Component } from 'react'
import classes from './map.modules.css'

class Mapping extends Component {
    constructor(props){
        super(props);
        this.initMap=this.initMap.bind(this)
    }

    //goes to current location if allowed, otherwise centers on SF
    initMap() {
        let gMap = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            maxZoom: 15
        });

        navigator.geolocation.getCurrentPosition(function (position) {
            // Center on user's current location if geolocation prompt allowed
            var initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            gMap.setCenter(initialLocation);
            gMap.setZoom(13);
        }, function () {
            gMap.setCenter({ lat: 37.773972, lng: -122.431297 })
        })
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