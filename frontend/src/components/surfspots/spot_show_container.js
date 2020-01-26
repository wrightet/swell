import {connect} from 'react-redux';
import SpotShow from './spot_show';
import {requestSurfSpot} from '../../actions/surfspot_actions';
import {fetchSpitCastSpots} from '../../util/spitcast_api_util';

const mSTP = (state,ownProps) => ({
    currentUser: state.session.user,
    surfSpot: state.entities.surfspots[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    requestSurfSpot: (spotId)=>dispatch(requestSurfSpot(spotId)),
    fetchSpitCastSpots: (long, lat, dist) => fetchSpitCastSpots(long, lat, dist)
});

export default connect(mSTP,mDTP)(SpotShow);