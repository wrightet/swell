import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
<<<<<<< HEAD
import { Switch,Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Navbar from './navbar/navbar';
import Splash from './splash/splash'
import reset from './reset.css';
import Footer from './footer/footer';
=======
import { Switch, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash'
import reset from './reset.css';
import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';

>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7

function App() {
  return (
    <div>
      <header>
<<<<<<< HEAD
        <Navbar />
      </header>
      <body>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path='/' component={Splash}/>
        </Switch>
            some text
      </body>
=======
        <NavbarContainer />
      </header>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Route exact path='/' component={Splash}/>
        <ProtectedRoute exact path='/profile' component={ProfileContainer} />
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
