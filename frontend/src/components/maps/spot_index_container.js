import { connect } from "react-redux";
import SpotIndex from './spot_index';

import { requestSurfSpots } from '../../actions/surfspot_actions'
import {fetchReviews} from '../../actions/review_actions'

const mSTP=state=>({
    currentUser: state.session.user,
    surfSpots: Object.values(state.entities.surfspots)
})

const mDTP = dispatch => ({
    requestSurfSpots: () => dispatch(requestSurfSpots()),
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
});

export default connect(mSTP, mDTP)(SpotIndex);