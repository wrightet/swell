import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import SurfSpotErrorsReducer from './surf_spot_errors_reducer'

export default combineReducers({
    session: SessionErrorsReducer,
    surfspot: SurfSpotErrorsReducer
});