import { RECEIVE_PROFILE } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      newState.action.profile._id = action.profile
      return newState;
    default:
      return state;
  }
}

export default profileReducer