import React from 'react';
import './profile.css';
import SuperSurfSession from '../surf_session/super_surf_session';

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <h1>{this.props.currentUser.handle} &nbsp;
          {this.props.currentUser.firstName}</h1>
        <p>{this.props.currentUser.lastName}</p>
        <SuperSurfSession/>
      </div>
    );
  }
}

export default Profile;
