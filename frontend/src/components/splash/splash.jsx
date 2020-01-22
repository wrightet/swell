
import React, { Component } from 'react'
import Mapping from '../maps/map'

export default class Splash extends Component {
    constructor(props){
        super(props);
    
    }



    render() {
        return (
            <div>
                <h1>Welcome to Swell</h1>
                
                <Mapping />

            </div>
        )
    }
}
