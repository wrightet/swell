import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash'
import reset from './reset.css';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <header>
        <NavbarContainer />
      </header>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route exact path='/' component={Splash}/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
