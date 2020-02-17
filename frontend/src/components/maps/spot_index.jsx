import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './spot_index.css';
import mappy from  '../../assets/images/map.png'

class SpotIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gMap: '',
            start: 0,
            end: 8
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

    makeSpots(spotRes) {

        spotRes.spots.data.map(spot => {
            let lat = spot.coordinates[0];
            let lng = spot.coordinates[1];

            let icon={
                url: mappy,
                scaledSize: new window.google.maps.Size(50,50)
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

        })

    }

    handleBack(start, end){
        let newStart = start - 8;
        let newEnd = end - 8
        if( newStart <= 0){
            newStart = 0
            newEnd = 8
        }
        
        this.setState({start: newStart, end: newEnd})
        
    }

    handleForward(start, end, length){
        let newStart = start + 8;
        let newEnd = end + 8
        if (newStart >= length) {
            newStart = length - 8;
            newEnd = length;
        }

        this.setState({ start: newStart, end: newEnd })
    }
    
    
    // getReviewData(spot){
    //     const {fetchReviews}=this.props;
    //     let totQual = 0;
    //     let totDiff = 0;
    //     let numReviews = 0
    //     let avgQual = (totQual / numReviews);
    //     let avgDiff = (totDiff / numReviews);
    //     fetchReviews(spot._id)
    //         .then(revRes => {
    //             revRes.reviews.data.forEach(review => {
    //                 totQual += review.quality;
    //                 totDiff += review.difficulty;
    //                 numReviews += 1;
    //             })
    //         });
            
    // }

    //create map, get current spots, mark on map:
    componentDidMount() {
        this.initMap();
        this.props.requestSurfSpots()
            .then(spotRes => this.makeSpots(spotRes));
    }




    render() {
        const {currentUser,surfSpots} = this.props;
        const {start, end} = this.state;
        if(!surfSpots){return null}

        return (
            <div className='spot-index'>
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
                        {surfSpots[0] ? surfSpots[0].slice(start,end).map(spot=>{

                                return(
                                    <div className='spots' key={spot._id}>
                                    <p id='name' onClick={()=>
                                        this.props.history.push(`/surfspots/${spot._id}`)
                                    }>{spot.name}</p>
                                    
                                    <p id='desc'>{spot.description}</p>
                                    <br/>
                                    
                                    </div>
                                    )
                                    
                            })
                        :""
                        }
                    </span>
                    
                    </div>
                <ul>
                    <li><button onCLick={() => this.handleBack(start, end)}>last</button></li>
                    <li><button onClick={() => this.handleForward(start, end, surfSpots[0].length)}>next</button></li>
                </ul>
            </div>
        )
    }


}


export default withRouter(SpotIndex);