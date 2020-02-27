import {connect} from 'react-redux';
import SpotShow from './spot_show';
import {requestSurfSpot, deleteSurfSpot, requestSurfSpots} from '../../actions/surfspot_actions';
import {fetchReviews, createReview, updateReview, deleteReview} from '../../actions/review_actions';
import {fetchSpitCastSpots} from '../../util/spitcast_api_util';


const mSTP = (state,ownProps) => ({
    currentUser: state.session.user,
    surfSpot: state.entities.surfspots[ownProps.match.params.id],
    reviews: Object.values(state.entities.reviews)
});

const mDTP = dispatch => ({
    requestSurfSpot: (spotId)=>dispatch(requestSurfSpot(spotId)),
    deleteSurfSpot: (spotId)=>dispatch(deleteSurfSpot(spotId)),
    requestSurfSpots: ()=>dispatch(requestSurfSpots()),
    fetchReviews: (spotId)=>dispatch(fetchReviews(spotId)),
    createReview: (spotId, reviewData)=>dispatch(createReview(spotId,reviewData)),
    
    updateReview: (spotId, reviewId, reviewData) => dispatch(updateReview(spotId, reviewId, reviewData)),
    deleteReview: (spotId, reviewId) => dispatch(deleteReview(spotId, reviewId)),
    
    fetchSpitCastSpots: (long, lat) => fetchSpitCastSpots(long, lat),
});

export default connect(mSTP,mDTP)(SpotShow);