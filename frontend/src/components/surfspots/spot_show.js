import React, { Component } from 'react'

class SpotShow extends Component {
    constructor(props){
        super(props);
        this.state={
            surfSpot:'',
            nearestForecast: '',
        }
    }

    componentDidMount(){
        this.props
          .requestSurfSpot(this.props.match.params.id)
          .then(spotRes =>
            this.setState({ surfSpot: spotRes.spot.data }))
            .then((long, lat) => {
              long = this.state.surfSpot.coordinates[1];
              lat = this.state.surfSpot.coordinates[0];
              this.props.fetchSpitCastSpots(long, lat, 5)
                .then((spots) => {
                  this.setState({
                  nearestForecast: spots[0]
                })})
            })
    }


    render() {
      console.dir(this.state)
      const {surfSpot, nearestForecast} = this.state
      if(!surfSpot || !nearestForecast) return null
      return (
          <div style={{color: 'white'}}>
              {surfSpot.name}
              <br/>
              {surfSpot.description}
              <br/>
              <span>Wave Height: {nearestForecast.average.size.toFixed(3)} ft</span>
          </div>
      )
    }
}

export default SpotShow;
