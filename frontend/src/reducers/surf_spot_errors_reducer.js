import {
    RECEIVE_SPOT_ERRORS,
    CLEAR_SPOT_ERRORS,
    RECEIVE_SURF_SPOT
} from '../actions/surfspot_actions'

const _nullErrors=[];

const SurfSpotErrorsReducer =( state= _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SPOT_ERRORS:
            return action.errors;
        case RECEIVE_SURF_SPOT:
            return _nullErrors;
        case CLEAR_SPOT_ERRORS:
            return _nullErrors;
        default:
            return state;
    }

};

export default SurfSpotErrorsReducer;
