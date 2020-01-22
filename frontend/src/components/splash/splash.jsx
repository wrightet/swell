
import React, { Component } from 'react'
<<<<<<< HEAD
=======
import Mapping from '../maps/map'
import { Link } from "react-router-dom";
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7

export default class Splash extends Component {
    constructor(props){
        super(props);
    
        this.state={
<<<<<<< HEAD
            currentPos: []
=======
            currentPos: {}
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
        }

        this.lat_lng=this.lat_lng.bind(this);
    }

    lat_lng(pos) {
        var crd = pos.coords;
        //NOTE! only works with longitude first, then latitude!

        console.log(`Longitude: ${crd.longitude}`);
        console.log(`Latitude : ${crd.latitude}`);
<<<<<<< HEAD
        this.setState({currentPos: [{lat: crd.latitude},{lng: crd.longitude}]})
=======
        const {currentPos}=this.state;
        currentPos['lat']=crd.latitude;
        currentPos['lng']=crd.longitude;
        console.log(this.state.currentPos)
        
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    }

    //get current location
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.lat_lng);
    }



    render() {
        return (
            <div>
                <h1>Welcome to Swell</h1>
<<<<<<< HEAD

=======
                <Link to="/profile">Profile</Link>
                <Mapping currentPos={this.state.currentPos}/>
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7

            </div>
        )
    }
}
