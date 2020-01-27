import React from 'react';
import './profile.css';
import SuperSurfSession from '../surf_session/super_surf_session';

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
      <p>some text</p>
        {/* {this.props.currentUser.handle} &nbsp;
        {this.props.currentUser.firstName} &nbsp;
        {this.props.currentUser.lastName} */}
        <SuperSurfSession/>
      </div>
    );
  }
}

export default Profile;
