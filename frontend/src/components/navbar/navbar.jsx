import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import classes from './navbar.module.css';
import Greeting from '../greeting/greeting';

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
          Hello, &nbsp; 
          {this.props.currentUser.handle}
          <br />
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
        <ul>
          <li>
            <Link to="/">
              <Logo/>
            </Link>
          </li>
          {/* <div className={classes.MenuItems}> */}
            <Link to='/surfspots' className={classes.MenuItems}>Surf Spots</Link>
            <li className={classes.MenuItems}>Local Weather Conditions</li>
          {/* </div> */}
          <div className={classes.Greeting}>
            {this.getLinks()}
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
