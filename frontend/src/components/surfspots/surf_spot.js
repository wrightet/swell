import React, { Component } from 'react'
import surfspot from './surfspot.css'

class SurfSpot extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkpos:'',
            checkMarker:'',
            gMap:'',
            spotTitle:'',
            spotDescription:''
        }
        
        this.useLatLng=this.useLatLng.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    //change clicked lat and lng into usable variables, save temporarily in state
    //place marker
    useLatLng(e){
        let lat= e.latLng['lat']();
        let lng = e.latLng['lng']();
        this.setState({checkpos: {lat:lat, lng:lng}})
        
        if (this.state.checkMarker){
            this.state.checkMarker.setMap(null);
        }

        this.state.checkMarker=new window.google.maps.Marker({
            position:this.state.checkpos,
            map: this.state.gMap,
            animation: window.google.maps.Animation.DROP,
            label:'SurfSpot'
        });

    }

    //goes to current location if allowed, otherwise centers on SF
    initMap() {
        this.state.gMap = new window.google.maps.Map(document.getElementById('add-spots-map'), {
            zoom: 13,
            maxZoom: 15
        });

        const {gMap}=this.state;

        navigator.geolocation.getCurrentPosition((position)=> {
            // Center on user's current location if geolocation prompt allowed
            var initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            gMap.setCenter(initialLocation);
            gMap.setZoom(13);
        }, ()=> {
            gMap.setCenter({ lat: 37.773972, lng: -122.431297 })
        })

        gMap.addListener('click', (e)=>{
            this.useLatLng(e)
        })


    }

    componentDidMount() {
        this.initMap();
    }

    update(field) {
        return (
            e => {
                this.setState({ [field]: e.target.value })
            }
        )
    }

    handleSubmit(e){
        // e.preventDefault;
    }

    render() {
        const {checkpos}=this.state;

        return (
            <div>
                <h1>Add a surf spot!</h1>
                <br/>
                <h3>Click on the map to checkout out spots</h3>
                <br/>
                Current spot: 
                <br/>
                    lat:{this.state.checkpos['lat']},
                    lng:{this.state.checkpos['lng']}
                <br/>
                <br/>

            {checkpos ? 
                <form onSubmit={this.handleSubmit}>
                    <label>Spot Title <br/>
                    <input type='text' value={this.state.spotTitle} onChange={this.update('spotTitle')}/>
                    </label>
                        
                        <br/>
                    <label>Description <br />
                    <textarea cols="30" rows="10" value={this.state.spotDescription} onChange={this.update('spotDescription')}/>
                        </label>
                        <br />
                <input type='submit' value='Create Surf Spot'/>
                </form>
            :''}


                <div id='add-spots-map'>
                </div>
            </div>
        )
    }

}

export default SurfSpot;
