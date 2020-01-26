import React, { Component } from 'react'

class SpotShow extends Component {
    constructor(props){
        super(props);

        this.state={
            surfSpot:'',
            gMap:''
        }

        this.initMap=this.initMap.bind(this);
    }

    initMap(){

    }

    componentDidMount(){
        this.props.requestSurfSpot(this.props.match.params.id)
            .then(spotRes=> 
         this.setState({surfSpot: spotRes.spot.data})
            )
            .then(()=>this.initMap())
    }


    render() {
        const {surfSpot}=this.state

        if(!surfSpot){return null}
        return (
            <div style={{color: 'white'}}>
                {surfSpot.name}
                <br/>
                {surfSpot.description}
                <br/>
                <div id='show-map'></div>
            </div>
        )
    }
}

export default SpotShow;
