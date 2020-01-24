import React from 'react';
import ReactDOM from 'react-dom';
import {setAuthToken} from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import Root from './components/Root';
import configureStore from './store/store';
import { fetchProfile } from './util/profile_api_util';
import {login, logout} from './actions/session_actions';
import { createReview } from './actions/review_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProfile = fetchProfile;
  window.createReview = createReview;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
