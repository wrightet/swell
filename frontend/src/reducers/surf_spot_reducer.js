import {
    RECEIVE_SURF_SPOTS,
    RECEIVE_SURF_SPOT,
    REMOVE_SURF_SPOT
} from '../actions/surfspot_actions'

const surfSpotReducer=(state={},action)=>{
    Object.freeze(state);
    let newState=Object.assign({},state);

    switch (action.type) {
        case RECEIVE_SURF_SPOTS:
            return action.spots;
        case RECEIVE_SURF_SPOT:
            newState[action.spot.id]=action.spot;
            return newState;
        case REMOVE_SURF_SPOT:
            delete newState[action.spotId]
            return newState;
        default:
            return state;
    }

};

export default surfSpotReducer;