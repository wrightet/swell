import React, { Component } from 'react'

class SpotShow extends Component {
    constructor(props){
        super(props);
        this.state={
            surfSpot:'',
            nearestForecast: '',
            gMap:''
        }

        this.initMap=this.initMap.bind(this);
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
        let mark = new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: this.state.gMap,
            label: surfSpot.name
        })
        
    }

    componentDidMount(){
        this.props
          .requestSurfSpot(this.props.match.params.id)
          .then(spotRes =>
            this.setState({ surfSpot: spotRes.spot.data }))
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


    render() {
      console.dir(this.state)
      const {surfSpot, nearestForecast} = this.state
      if(!surfSpot) return null
      return (
        <div style={{ color: "white" }}>
          <div id="show-map"></div>
          {surfSpot.name}
          <br />
          {surfSpot.description}
          <br />
          <span>Wave Height: {nearestForecast.swellHeight_ft} ft</span>
          <br />
          <span>Water Temp: {nearestForecast.waterTemp_F} degrees F</span>
          <br />
          <span>Swell Period: {nearestForecast.swellPeriod_secs} seconds</span>
          <br />
          <span>Swell Direction: {nearestForecast.swellDir16Point}</span>
        </div>
      );
    }
}

export default SpotShow;
