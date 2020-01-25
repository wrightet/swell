import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import './reset.css';
import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';
import SurfSpotContainer from './surfspots/surf_spot_container';
import './App.css';
import wave from '../assets/images/wave.jpg';
import logo from '../assets/images/Swell.png';
import SurfSessionContainer from './surf_session/surf_session_container'
function App() {
  return (
    <div className="Body">
      <div className="background-image">
        <img src={wave} />
      </div>
      <header>
        <NavbarContainer />
      </header>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route exact path='/' component={Splash}/>
        <ProtectedRoute exact path='/profile' component={ProfileContainer, SurfSessionContainer} />
        <ProtectedRoute exact path='/surfspots' component={SurfSpotContainer} />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
