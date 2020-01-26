import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SpotShow extends Component {
    constructor(props){
        super(props);
        this.state={
            surfSpot:'',
            gMap:''
        }
        
        this.initMap=this.initMap.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
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
            .then(spotRes=> 
         this.setState({surfSpot: spotRes.spot.data})
            )
            .then(()=>this.initMap())
            
    }

    handleDelete(surfSpotId){
        const {requestSurfSpots,deleteSurfSpot}=this.props;
        deleteSurfSpot(surfSpotId)
            .then(this.props.history.push('/'))
            .then(requestSurfSpots())
    }


    render() {
      const {surfSpot} = this.state
    

      if(!surfSpot) return null
      return (
          <div style={{color: 'white'}}>
              {surfSpot.name}
              <br/>
              {surfSpot.description}
              <br/>
              <div id='show-map'></div>

            {this.props.currentUser.id == surfSpot.creatorId ? 
            <button onClick={()=>{this.handleDelete(surfSpot._id)}}>Delete surfSpot</button>
            :''}

          </div>
      )
    }
}



export default withRouter(SpotShow);
