import {connect} from 'react-redux';
import SpotShow from './spot_show';
import {requestSurfSpot} from '../../actions/surfspot_actions'

const mSTP=(state,ownProps)=>({
    currentUser: state.session.user,
    surfSpot: state.entities.surfspots[ownProps.match.params.id]
});

const mDTP=dispatch=>({
    requestSurfSpot: (spotId)=>dispatch(requestSurfSpot(spotId))
});

export default connect(mSTP,mDTP)(SpotShow);