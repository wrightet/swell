import * as APIUtil from '../util/surf_session_api_util';

export const RECEIVE_SURF_SESSIONS = "RECEIVE_SURF_SESSIONS";
export const RECEIVE_SURF_SESSION = "RECEIVE_SURF_SESSION";
export const REMOVE_SURF_SESSION = "REMOVE_SURF_SESSION";

const receiveSurfSessions = (sessions) => ({
    type: RECEIVE_SURF_SESSIONS,
    sessions
});
const receiveSurfSession = (session) => ({
    type: RECEIVE_SURF_SESSION,
    session
});
const removeSurfSession = (ssId) => ({
    type: REMOVE_SURF_SESSION,
    ssId
});

export const fetchSurfSessions = (userId) => dispatch => (
    APIUtil.fetchSurfSessions(userId)
    .then(sessions => dispatch(receiveSurfSessions(sessions)))
    .catch(err => console.log(err))
);

export const createSurfSession = (userId, sessionData) => dispatch => (
    APIUtil.createSurfSession(userId, sessionData)
    .then(session => dispatch(receiveSurfSession(session)))
    .catch(err => console.log(err))
);

export const updateSurfSession = (userId, ssId, sessionData) => dispatch => (
    APIUtil.updateSurfSession(userId, ssId, sessionData)
    .then(session => dispatch(receiveSurfSession(session)))
);

export const deleteReview = (userId, ssId) => dispatch => (
    APIUtil.deleteSurfSession(userId, ssId)
    .then(() => dispatch(removeSurfSession(ssId)))
);
