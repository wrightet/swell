import React, { Component } from 'react';
import swellLogo from '../../assets/images/Swell.png';
import classes from './footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.footerFlex}>
          <img src={swellLogo} />
          <div>
            <h1>Categories</h1>
            <ul>
              <li>Surf Spots</li>
              <li>Weather</li>
            </ul>
          </div>
          <div>
            <h1>About Us</h1>
            <ul>
              <li>Cody Breene</li>
              <li>Adam Scott</li>
              <li>Ethan Wright</li>
              <li>Martin Stenflo</li>
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
