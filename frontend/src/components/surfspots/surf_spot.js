import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import surfspot from './surfspot.css'
import _ from 'lodash';
import mappy from '../../assets/images/map.png'

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
        this.renderErrors=this.renderErrors.bind(this);
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
        let icon = {
            url: mappy,
            scaledSize: new window.google.maps.Size(50, 50)
        }

        this.state.checkMarker=new window.google.maps.Marker({
            position:this.state.checkpos,
            map: this.state.gMap,
            animation: window.google.maps.Animation.DROP,
            label:'SurfSpot',
            icon:icon
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
        this.props.clearSpotErrors();
    }

    update(field) {
        return (
            e => {
                this.setState({ [field]: e.target.value })
            }
        )
    }

    // capitalizeTitle(title) {
    //   let words = title.split(" ")
    //   let capitalized = []
    //   words.forEach(word => {
    //     capitalized.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    //   })
    //   return capitalized.join(" ");
    // }

    handleSubmit(e){
        e.preventDefault();

        const{currentUser,createSurfSpot} = this.props;
        const {spotTitle,spotDescription, checkpos} = this.state;
        const surfSpot={
            creatorId: currentUser.id,
            name: _.startCase(_.toLower(spotTitle)),
            description: spotDescription,
            coordinates: [checkpos['lat'],checkpos['lng']]
        }
        console.dir(createSurfSpot);
        
        createSurfSpot(surfSpot)
            .then((res)=>{
                if(res.spot){
                this.props.history.push(`/surfspots/${res.spot.data._id}`)
                }
            })
        
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className='create-spot'>
                <span className='spot-form'>
                <h1>Add a surf spot!</h1>
                <br/>
                <h3>Click on the map to checkout a new spot</h3>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Title <br/>
                    <input type='text' value={this.state.spotTitle} onChange={this.update('spotTitle')}/>
                    <br/>
                    </label>
                        <br/>
                        Created by:{` ${this.props.currentUser.handle}`}
                        <br/>
                        <br/>
                    <label>Description <br />
                    <textarea cols="30" rows="10" value={this.state.spotDescription} onChange={this.update('spotDescription')}/>
                        </label>
                        <br />
                        <br />
                <input id='create-button' type='submit' value='Create Surf Spot'/>
                {this.renderErrors()}
                </form>
                </span>


                <div id='add-spots-map'>
                </div>
            </div>
        )
    }

}

export default withRouter(SurfSpot);
