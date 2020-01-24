import {
    RECEIVE_SURF_SESSIONS,
    RECEIVE_SURF_SESSION,
    REMOVE_SURF_SESSION
} from '../actions/surf_session_actions';

const surfSessionReducer = (state ={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SURF_SESSIONS:
            action.sessions.data.map(session => {
                newState[session._id] = session
            })
            return newState;
        case RECEIVE_SURF_SESSION:
            newState[action.session.data._id] = action.session.data;
            return newState;
        case REMOVE_SURF_SESSION:
            delete newState[action.ssId];
            return newState;
        default:
            return state;       
    }
}

export default surfSessionReducer;