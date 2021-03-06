import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import mappy from '../../assets/images/map.png'
import wavy from '../../assets/images/wavy.png'


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
        this.handleDeleteReview=this.handleDeleteReview.bind(this);
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

      let icon = {
        url: mappy,
        scaledSize: new window.google.maps.Size(50, 50)
      }

            new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.state.gMap,
            label: surfSpot.name,
            icon:icon
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
            .then(requestSurfSpots())
            .then(this.props.history.push('/surfspots'))
    }

    handleDeleteReview(spotId, reviewId){
      const {fetchReviews,deleteReview} = this.props;
      deleteReview(spotId,reviewId)
        .then(fetchReviews(spotId))
    }

    componentWillUnmount(){
      this.props.requestSurfSpots()
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
            .then(this.setState({
              quality: '',
              difficulty: '',
              title: '',
              body: '',
            }))

    }

    render() {
      const { surfSpot, nearestForecast } = this.state;
      const {currentUser}=this.props;

      if(!surfSpot) return null
      return (
        <div className="surfspot-container">
          <div className="surfspot-content" style={{ color: "white" }}>
            <h1 className="surfspot-title">{surfSpot.name}</h1>
            <br />
            <div className="surfspot-map-and-content">
              <br />
              <div id="show-map"></div>
              <div className="surfspot-desc-and-metrics">
                <h2>About</h2>
                <p className="surfspot-desc">{surfSpot.description}</p>
                <br />
                <div className="surfspot-metrics">
                  <h2>
                    Swell Forecast {"  "}
                  <img id= 'wavy' src={wavy} />
                    </h2>
                  <br/>
                  <span>Wave Height: {nearestForecast.swellHeight_ft} ft</span>
                  <span>
                    Water Temp: {nearestForecast.waterTemp_F} degrees F
                  </span>
                  <span>
                    Swell Period: {nearestForecast.swellPeriod_secs} seconds
                  </span>
                  <span>
                    Swell Direction: {nearestForecast.swellDir16Point}
                  </span>
                </div>
              </div>
            </div>

            <br/>
            {currentUser ? (
              currentUser.id == surfSpot.creatorId ? (
                <button id='delete-button' className='show-buttons'
                  onClick={() => {
                    this.handleDelete(surfSpot._id);
                  }}
                >
                  Delete Spot
                </button>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <div className="surfspot-review-form">
              {currentUser && currentUser.id ? (
                <form onSubmit={this.handleSubmit}>
                  <h3 id='rev'>Write a Review:</h3>
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
                  <input className='show-buttons' type="submit" value="Create Review"></input>
                </form>
              ) : (
                  <div>
                    <Link to='/login' id='logincreate'>Login</Link> to write a review
                            <br />
                    <br />
                  </div>
              )}
            </div>
            <div className="surfspot-reviews">
              {this.props.reviews && this.props.currentUser ? (
                <div>
                  <h2>Reviews</h2>
                  <ul>
                    {
                    this.props.reviews.filter(review => review.spotId===surfSpot._id).map(review =>
                      (<li key={review._id} className="review-wrapper">
                        <h3>{review.title}</h3>
                        <div className="surfspot-rating">
                          <span>Quality: {review.quality}</span>
                          <span className="difficulty">Difficulty: {review.difficulty}</span>
                        </div>
                        <div className="review-body">{review.body}</div>
                        <br />
                        {review.creatorId===this.props.currentUser.id ? (
                          <button id='delete-button' className='show-buttons'
                            onClick={() => {
                              this.handleDeleteReview(surfSpot._id, review._id);
                            }}
                          >
                            Delete Review
                          </button>
                        ) : ""}
                      </li>
                      )
                      )}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      );
    }
}



export default withRouter(SpotShow);
