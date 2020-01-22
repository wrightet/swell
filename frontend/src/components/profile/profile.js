import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    // debugger
    return (
      <div>
        {this.props.currentUser.handle}
      </div>
    );
  }
}

export default Profile;
