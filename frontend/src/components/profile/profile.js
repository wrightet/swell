import React from 'react';
import './profile.css';
import SuperSurfSession from '../surf_session/super_surf_session';
import ProfSpots from './profile_maps_container'

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <h1>{this.props.currentUser.handle} &nbsp;
          {this.props.currentUser.firstName}</h1>
        <p>{this.props.currentUser.lastName}</p>
        <SuperSurfSession/>
      <ProfSpots/>

      </div>
    );
  }
}

export default Profile;
