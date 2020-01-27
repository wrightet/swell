import React from 'react';
import './profile.css';

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <h1>{this.props.currentUser.firstName} &nbsp;
        {this.props.currentUser.lastName}</h1>
        <p>{this.props.currentUser.handle}</p>
      </div>
    );
  }
}

export default Profile;
