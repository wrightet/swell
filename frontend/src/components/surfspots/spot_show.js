import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SpotShow extends Component {
    constructor(props){
        super(props);
        this.state={
            surfSpot:'',
            nearestForecast: '',
            gMap:'',

            quality:'',
            difficulty:'',
            title:'',
            body:'',

            reviews:''
        }
        
        this.initMap=this.initMap.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    initMap(){
        this.state.gMap= new window.google.maps.Map(document.getElementById('show-map'), {
            zoom: 13,
            maxZoom: 15
        });
        const {surfSpot}=this.state;
        let lat=surfSpot.coordinates[0];
        let lng=surfSpot.coordinates[1];
        this.state.gMap.setCenter({lat:lat,lng:lng});
            new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.state.gMap,
            label: surfSpot.name
        })
        
    }

    componentDidMount(){
        this.props.requestSurfSpot(this.props.match.params.id)
            .then(spotRes=> {
            this.setState({surfSpot: spotRes.spot.data});
            this.props.fetchReviews(spotRes.spot.data._id)
                .then(reviewRes=>{
                    this.setState({reviews: reviewRes.reviews.data})
                })    
            })
            .then(()=>this.initMap())
            .then((long, lat) => {
              long = this.state.surfSpot.coordinates[1];
              lat = this.state.surfSpot.coordinates[0];
              this.props.fetchSpitCastSpots(long, lat)
              .then((spots) => {
                this.setState({
                  nearestForecast: spots.hourly[0]
                })
              })
              })
    }

    handleDelete(surfSpotId){
        const {requestSurfSpots,deleteSurfSpot}=this.props;
        deleteSurfSpot(surfSpotId)
            .then(this.props.history.push('/'))
            .then(requestSurfSpots())
    }

    update(field) {
        return (
            e => {
                this.setState({ [field]: e.target.value })
            }
        )
    }

    handleSubmit(e){
        e.preventDefault();
        const{createReview,currentUser,fetchReviews}=this.props;
        const{quality,difficulty,title,body}=this.state;

        let review={
            creatorId:currentUser.id,
            quality:quality,
            difficulty:difficulty,
            title:title,
            body:body
        }

        const{surfSpot}=this.state;
        createReview(surfSpot._id,review)
            .then(fetchReviews(surfSpot._id))

    }

    render() {
      const { surfSpot, nearestForecast } = this.state;
      const {currentUser}=this.props;

      if(!surfSpot) return null
      return (
        <div style={{ color: "white" }}>
          <h1>{surfSpot.name}</h1>
          <br />
          {surfSpot.description}
          <br />
          <div id="show-map"></div>
          <br />
          <span>Wave Height: {nearestForecast.swellHeight_ft} ft</span>
          <br />
          <span>Water Temp: {nearestForecast.waterTemp_F} degrees F</span>
          <br />
          <span>Swell Period: {nearestForecast.swellPeriod_secs} seconds</span>
          <br />
          <span>Swell Direction: {nearestForecast.swellDir16Point}</span>

          {currentUser ? currentUser.id == surfSpot.creatorId ? (
            <button
              onClick={() => {
                this.handleDelete(surfSpot._id);
              }}
            >
              Delete surfSpot
            </button>
          ) : (
            ""
          ): ""}

          {currentUser && currentUser.id ? (
            <form onSubmit={this.handleSubmit}>
              <label>
                {" "}
                Quality <br />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={this.state.quality}
                  onChange={this.update("quality")}
                ></input>
              </label>
              <br />
              <label>
                {" "}
                Difficulty <br />
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={this.state.difficulty}
                  onChange={this.update("difficulty")}
                ></input>
              </label>
              <br />
              <label>
                {" "}
                Title <br />
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                ></input>
              </label>
              <br />
              <label>
                Body <br />
                <textarea
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.update("body")}
                />
              </label>
              <br />
              <input type="submit" value="Create Review"></input>
            </form>
          ) : (
            ""
          )}

          {this.state.reviews ? (
            <ul>
              {this.state.reviews.map(review => (
                <li key={review._id}>
                  Review:{review.title} <br />
                  Quality: {review.quality} <br />
                  Difficulty: {review.difficulty} <br />
                  {review.body} <br />
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      );
    }
}



export default withRouter(SpotShow);
