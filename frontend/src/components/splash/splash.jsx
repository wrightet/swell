
import React, { Component } from 'react'
import Mapping from '../maps/map'
import { Link } from "react-router-dom";

export default class Splash extends Component {
    constructor(props){
        super(props);
    
        this.state={
            currentPos: {}
        }

        this.lat_lng=this.lat_lng.bind(this);
    }

    lat_lng(pos) {
        var crd = pos.coords;
        //NOTE! only works with longitude first, then latitude!

        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`Latitude : ${crd.latitude}`);
        const {currentPos}=this.state;
        currentPos['lat']=crd.latitude;
        currentPos['lng']=crd.longitude;        
    }

    //get current location
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.lat_lng);
    }



    render() {
        return (
            <div>
                <h1>Welcome to Swell</h1>
                <Mapping currentPos={this.state.currentPos}/>

            </div>
        )
    }
}
