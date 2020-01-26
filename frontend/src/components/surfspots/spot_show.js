import React, { Component } from 'react'

class SpotShow extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestSurfSpot(this.props.match.params.id)
    }


    render() {
        const {surfSpot}=this.props;

        if(!surfSpot) return null
        debugger
        return (
            <div style={{color: 'white'}}>
                {surfSpot.name}
                {surfSpot.description}
            </div>
        )
    }
}

export default SpotShow;
