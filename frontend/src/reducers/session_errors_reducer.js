import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
<<<<<<< HEAD
=======
    CLEAR_ERRORS,
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
} from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
<<<<<<< HEAD
=======
        case CLEAR_ERRORS:
            return _nullErrors;
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
        default:
            return state;
    }
};

export default SessionErrorsReducer;