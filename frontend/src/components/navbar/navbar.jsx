import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import Greeting from '../greeting/greeting';
import logo from '../../assets/images/Swell.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to="/profile">{this.props.currentUser.handle}</Link> &nbsp; 
          {/* <br /> */}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <Greeting />
      )
    }
  }
  
  render() {
    return (
      <div className={classes.SiteHeader}>
        <div className={classes.Logo}>
          <img src={logo} />
          <div className={classes.Greeting}>
            {this.getLinks()}
          </div>
        </div>
        <ul>
          <div className={classes.MenuItems}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/surfspots'>Surf Spots</Link></li>
            <li>Local Weather Conditions</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
