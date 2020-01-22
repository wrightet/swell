<<<<<<< HEAD
import {combineReducers} from 'redux'
import session from './session_reducer'
import errors from './errors_reducer'

const rootReducer=combineReducers({
=======
import {combineReducers} from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer=combineReducers({
    entities,
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    session,
    errors
});

export default rootReducer;