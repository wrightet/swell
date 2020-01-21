import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Navbar from './navbar/navbar';
import Splash from './splash/splash'
import reset from './reset.css';
import Footer from './footer/footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Switch>
        <body>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/' component={Splash}/>
          some text
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
