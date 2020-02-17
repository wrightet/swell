import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../maps/spot_index.css'
import mappy from '../../assets/images/map.png'

class ProfSpots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gMap: '',
            start: 0,
            end: 6
        }

        this.initMap = this.initMap.bind(this);
        this.makeSpots = this.makeSpots.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleForward = this.handleForward.bind(this);
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

    handleBack(start, end) {
        let newStart = start - 6;
        let newEnd = end - 6;
        if (newStart < 0) {
            newStart = 0;
            newEnd = 6;
        }

        this.setState({ start: newStart, end: newEnd })

    }

    handleForward(start, end, length) {
        let newStart = start + 6;
        let newEnd = end + 6
        if (newStart >= length) {
            newStart = length - 6;
            newEnd = length;
        }

        this.setState({ start: newStart, end: newEnd })
    }

    makeSpots(spotRes) {

        spotRes.spots.data.map(spot => {
            let lat = spot.coordinates[0];
            let lng = spot.coordinates[1];

            if(spot.creatorId==this.props.currentUser.id){
          

                let icon = {
                    url: mappy,
                    scaledSize: new window.google.maps.Size(50, 50)
                }

                let mark = new window.google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: this.state.gMap,
                    label: spot.name,
                    icon: icon
                })
        

            mark.addListener('click', () => {
                this.props.history.push(`/surfspots/${spot._id}`)
            })

            }
        })

    }

    //create map, get current spots, mark on map:
    componentDidMount() {
        this.initMap();
        this.props.requestSurfSpots()
            .then(spotRes => this.makeSpots(spotRes));
    }

    render() {
        const { currentUser, surfSpots } = this.props;
        const {start, end} = this.state;
        if (!surfSpots) { return null }
        return (
            <div className='spot-index'>   
            <ul className='spot-buttons'>
                        <li><button onClick={() => this.handleBack(start, end)}>Last</button></li>
                        <li><button onClick={() => this.handleForward(start, end, surfSpots[0].length)}>Next</button></li>
                    </ul>
                <h1 id='yo-spots'>Your Spots</h1>
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
                        {surfSpots[0] ? surfSpots[0].slice(start, end).map(spot => {

                            return (
                                <div className='spots' key={`${spot._id}`}>
                                    <p id='name' onClick={() =>
                                        this.props.history.push(`/surfspots/${spot._id}`)
                                    }>{spot.name}</p>

                                    <p>{spot.description}</p>
                                    <br />
                                </div>
                            )

                        })
                            : ""
                        }
                    </span>
                </div>
            </div>
        )
    }


}


export default withRouter(ProfSpots);