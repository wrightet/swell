import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import classes from './navbar.module.css';
import Greeting from '../greeting/greeting';

class Navbar extends Component {
  render() {
    return (
      <div className={classes.SiteHeader}>
        <ul>
          <li>
            <Link to="/">
              <Logo/>
            </Link>
          </li>
          <li>Surf Spots</li>
          <li>Local Weather Conditions</li>
          <li><Greeting /></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
