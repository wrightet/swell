import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Navbar from './navbar/navbar';
import reset from './reset.css';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

      </Switch>
      <footer>

      </footer>
    </div>
  );
}

export default App;
