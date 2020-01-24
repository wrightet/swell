import * as ApiUtil from '../util/surfspot_api_util'

export const RECEIVE_SURF_SPOTS='RECEIVE_SURF_SPOTS'
export const RECEIVE_SURF_SPOT='RECEIVE_SURF_SPOT'
export const REMOVE_SURF_SPOT='REMOVE_SURF_SPOT'


const receiveSurfSpots=(spots)=>({
    type: RECEIVE_SURF_SPOTS,
    spots
});

const receiveSurfSpot = (spot) =>({
    type: RECEIVE_SURF_SPOT,
    spot
});

const removeSurfSpot = (spotId) =>({
    type: REMOVE_SURF_SPOT,
    spotId
});

export const requestSurfSpots=()=>dispatch=>(
    ApiUtil.fetchSurfSpots()
        .then(spots=>dispatch(receiveSurfSpots(spots)))
        .catch(err=>console.log(err))
);

export const requestSurfSpot=(spotId)=>dispatch=>(
    ApiUtil.fetchSurfSpot(spotId)
        .then(spot=>dispatch(receiveSurfSpot(spot)))
        .catch(err=>console.log(err))
);

export const createSurfSpot=(surfSpot)=>dispatch=>(
    ApiUtil.createSurfSpot(surfSpot)
        .then(spot=>dispatch(receiveSurfSpot(spot)))
        .catch(err=>console.log(err))
);

export const updateSurfSpot=(surfSpot)=>dispatch=>(
    ApiUtil.updateSurfSpot(surfSpot)
        .then(spot => dispatch(receiveSurfSpot(spot)))
        .catch(err => console.log(err))
);

export const deleteSurfSpot=(spotId)=>dispatch=>(
    ApiUtil.deleteSurfSpot(spotId)
        .then(spotId=>dispatch(removeSurfSpot(spotId)))
        .catch(err => console.log(err))
)

