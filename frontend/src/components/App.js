import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

function App() {
  return (
    <div>
      <header>

      </header>

      <h1>Swell</h1>
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
