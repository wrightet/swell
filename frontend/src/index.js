import React from 'react';
import ReactDOM from 'react-dom';
import {setAuthToken} from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import Root from './components/Root';
import configureStore from './store/store';
import {logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded',()=>{
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})
