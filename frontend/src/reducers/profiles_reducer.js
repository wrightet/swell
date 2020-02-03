import { RECEIVE_PROFILE } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROFILE:
     
      newState[action.profile.data._id] = action.profile.data
      return newState;
    default:
      return state;
  }
}

export default profileReducer
