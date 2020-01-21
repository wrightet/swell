
import React, { Component } from 'react'

export default class Splash extends Component {
    constructor(props){
        super(props);
    
        this.state={
            currentPos: []
        }

        this.lat_lng=this.lat_lng.bind(this);
    }

    lat_lng(pos) {
        var crd = pos.coords;
        //NOTE! only works with longitude first, then latitude!

        console.log(`Longitude: ${crd.longitude}`);
        console.log(`Latitude : ${crd.latitude}`);
        this.setState({currentPos: [{lat: crd.latitude},{lng: crd.longitude}]})
    }

    //get current location
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.lat_lng);
    }



    render() {
        return (
            <div>
                <h1>Welcome to Swell</h1>


            </div>
        )
    }
}
