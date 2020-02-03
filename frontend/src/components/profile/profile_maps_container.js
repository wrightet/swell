import { connect } from "react-redux";
import ProfSpots from './profile_maps'

import { requestSurfSpots } from '../../actions/surfspot_actions'

const mSTP = state => ({
    currentUser: state.session.user,
    surfSpots: Object.values(state.entities.surfspots)
})

const mDTP = dispatch => ({
    requestSurfSpots: () => dispatch(requestSurfSpots())

});

export default connect(mSTP, mDTP)(ProfSpots);