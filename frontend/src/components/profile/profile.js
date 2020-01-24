import React from 'react';
import './profile.css';

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        {this.props.currentUser.handle} &nbsp;
        {this.props.currentUser.firstName} &nbsp;
        {this.props.currentUser.lastName}
      </div>
    );
  }
}

export default Profile;
