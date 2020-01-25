
import React, { Component } from 'react';
import Mapping from '../maps/map_container';
import './splash.css';

export default class Splash extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Splash">
                <h1>Welcome to Swell</h1>
                <br />
                <p>Swell is an app by surfers for surfers that allows you to check local weather and tide conditions, find local surf spots, log your surf sessions, connect with other surfers, and help you plan
                your next surf adventure</p>
                <p>Check out our surf map and sign in to create your own surf spots, surf logs, and to edit your user profile</p>
                <br />
                <Mapping/>

            </div>
        )
    }
}
