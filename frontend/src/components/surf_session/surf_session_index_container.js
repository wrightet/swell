import { connect } from 'react-redux';
import SurfSessionIndex from './surf_session_index';
import { requestSurfSessions } from '../../actions/surf_session_actions'
const mSTP = state => ({
    sessions: Object.values(state.entities.sessions)
});

const mDTP = dispatch => ({
    requestSurfSessions: () => dispatch(requestSurfSessions())
})

export default connect(mSTP,mDTP)(SurfSessionIndex);