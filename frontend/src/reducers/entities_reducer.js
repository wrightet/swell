import { combineReducers } from 'redux';
import users from './users_reducer';
import profiles from './profiles_reducer';
import surfspots from './surf_spot_reducer'
import reviews from './reviews_reducer';

export default combineReducers({ 
  users,
  profiles,
  surfspots,
  reviews
 });