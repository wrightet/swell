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

        if(!surfSpot) {return <div>help me</div>}
        return (
            <div style={{color: 'white'}}>
                retiertjer
                {surfSpot.name}
                {surfSpot.description}
            </div>
        )
    }
}

export default SpotShow;
