import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './spot_index.css';

class SpotIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gMap: ''
        }

        this.initMap = this.initMap.bind(this);
        this.makeSpots = this.makeSpots.bind(this);
    }

    //goes to current location if allowed, otherwise centers on SF
    initMap() {
        this.state.gMap = new window.google.maps.Map(document.getElementById('spot-map'), {
            zoom: 13,
            maxZoom: 15
        });
        const { gMap } = this.state

        navigator.geolocation.getCurrentPosition(function (position) {
            // Center on user's current location if geolocation prompt allowed
            var initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            gMap.setCenter(initialLocation);
            gMap.setZoom(13);
        }, function () {
            gMap.setCenter({ lat: 37.773972, lng: -122.431297 })
        })
    }

    makeSpots(spotRes) {

        spotRes.spots.data.map(spot => {
            let lat = spot.coordinates[0];
            let lng = spot.coordinates[1];

            let mark = new window.google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: this.state.gMap,
                label: spot.name
            })

            mark.addListener('click', () => {
                this.props.history.push(`/surfspots/${spot._id}`)
            })

        })

    }

    //create map, get current spots, mark on map:
    componentDidMount() {
        this.initMap();
        this.props.requestSurfSpots()
            .then(spotRes => this.makeSpots(spotRes));
    }

    render() {
        const {currentUser,surfSpots} = this.props;
        if(!surfSpots){return null}
        return (
            <div className='spot-index'>
                <h1>Surfs up!</h1>
                <div className='flex'>
                    <div id='spot-map'>
                    </div>
                    <span className='mini-flex'>
                        {currentUser && currentUser.id ? 
                        <div>
                            <Link to='/createsurfspot'>
                                    <button id='create'>Create Surf Spot</button>
                            </Link>
                        </div>  
                        : ""}
                        {surfSpots[0] ? surfSpots[0].map(spot=>{
                            
                                return(
                                    <div className='spots' id={`${spot._id}`}>
                                    <h1>{spot.name}</h1>
                                    <p>{spot.description}</p>
                                    </div>
                                    )
                                    
                            })
                        :""
                        }
                    </span>
                    </div>“
            </div>
        )
    }


}


export default withRouter(SpotIndex);