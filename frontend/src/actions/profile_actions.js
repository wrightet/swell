import * as APIUtil from "../util/profile_api_util";

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
})

export const fetchProfile = () => (dispatch) => (
  APIUtil.fetchProfile()
    .then( profile => dispatch(receiveProfile(profile)))
    .catch( err => console.log(err))
);