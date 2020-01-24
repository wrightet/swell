import React, { Component } from 'react';
import swellLogo from '../../assets/images/Swell.png';
import classes from './footer.module.css';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.footerFlex}>
          <img src={swellLogo} alt="logo" />
          <div>
            <h1>Categories</h1>
            <ul>
              <li><Link to="surfspots">Surf Spots</Link></li>
              <li>Weather</li>
            </ul>
          </div>
          <div>
            <h1>About Us</h1>
            <ul>
              <li><a href="https://github.com/codybreene">Cody Breene</a></li>
              <li><a href="https://github.com/alscotty">Adam Scott</a></li>
              <li><a href="https://github.com/wrightet">Ethan Wright</a></li>
              <li><a href="https://github.com/mstenflo">Martin Stenflo</a></li>
            </ul>
          </div>
          <div>
            <h1>Resources</h1>
            <ul>
              <li>Sitemap</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
