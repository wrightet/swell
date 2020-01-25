import { connect } from 'react-redux';
import { createSurfSession } from '../../actions/surf_session_actions';
import SurfSessionForm from './surf_session_form';
// import { requestSurfSpot,requestSurfSpots} from '../../actions/surfspot_actions';

const mSTP = state => ({
    session: {
        body: ''

    },
    currentUser: state.session.user,
    formType: 'Create Surf Session'
})

const mDTP = dispatch => ({
   
    action: (userId, sessionData) => dispatch(createSurfSession(userId, sessionData))
})

export default connect(mSTP, mDTP)(SurfSessionForm);