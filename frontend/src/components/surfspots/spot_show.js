import React, { Component } from 'react'

class SpotShow extends Component {
    constructor(props){
        super(props);

        this.state={
            surfSpot:''
        }
    }

    componentDidMount(){
        this.props.requestSurfSpot(this.props.match.params.id)
            .then(spotRes=> 
         this.setState({surfSpot: spotRes.spot.data})
            )
    }


    render() {
        const {surfSpot}=this.state

        if(!surfSpot){return null}
        return (
            <div style={{color: 'white'}}>
                {surfSpot.name}
                <br/>
                {surfSpot.description}
            </div>
        )
    }
}

export default SpotShow;
