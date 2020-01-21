import React from 'react';
import { Link } from 'react-router-dom';
import classes from './greeting.module.css';
import avatar from '../../assets/images/avatar-icon.png'

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className={classes.SiteHeaderRight}>
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div>
      <ul className={classes.SiteHeaderRight}>
        <li>{currentUser.username}</li>
        <li><img src={avatar} /></li>
        <button onClick={logout}>Log Out</button>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;