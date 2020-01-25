import { connect } from 'react-redux';
import { createSurfSession } from '../../actions/surf_session_actions';
import SurfSessionForm from './surf_session_form';
import { requestSurfSpot,requestSurfSpots} from '../../actions/surfspot_actions';

const mSTP = state => ({
    session: {
        body: '',
        spotId: ''
    },
    formType: 'Create Surf Session'
})

const mDTP = dispatch => ({
    requestSurfSpots: () => dispatch(requestSurfSpots()),
    requestSurfSpot: spotId => dispatch(requestSurfSpot(spotId)),
    action: (userId, sessionData) => dispatch(createSurfSession(userId, sessionData))
})

export default connect(mSTP, mDTP)(SurfSessionForm);