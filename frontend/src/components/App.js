import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash'
import reset from './reset.css';
import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';
import SurfSpotContainer from './surfspots/surf_spot_container'

function App() {
  return (
    <div>
      <header>
        <NavbarContainer />
      </header>

        <div className="body">
            <Switch>
              <AuthRoute exact path="/login" component={LoginFormContainer} />
              <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
            
            <Route exact path='/' component={Splash}/>
            <ProtectedRoute exact path='/profile' component={ProfileContainer} />
            <Route exact path='/surfspots' component={SurfSpotContainer} />
        </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
