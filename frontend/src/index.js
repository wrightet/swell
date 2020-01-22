import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './store/store';
import { fetchProfile } from './util/profile_api_util';

document.addEventListener('DOMContentLoaded',()=>{
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
      store = configureStore();
  }
  window.fetchProfile = fetchProfile
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
