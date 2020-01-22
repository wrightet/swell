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
<<<<<<< HEAD
        <li><img src={avatar} /></li>
=======
        <li><img src={avatar} alt="logo" /></li>
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
        <button onClick={logout}>Log Out</button>
      </ul>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;