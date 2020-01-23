import React from 'react';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    debugger
    return (
      <div className="Profile">
        {this.props.currentUser.handle}
        {this.props.currentUser.firstName}
      </div>
    );
  }
}

export default Profile;
