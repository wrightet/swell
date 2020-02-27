import { connect } from 'react-redux';
import SurfSessionIndex from './surf_session_index';
import { fetchSurfSessions, deleteSurfSession } from '../../actions/surf_session_actions'

const mSTP = state => ({
    sessions: Object.values(state.entities.surf_sessions), 
    currentUser: state.session.user
   })
    

const mDTP = dispatch => ({
    fetchSurfSessions: (userId) => dispatch(fetchSurfSessions(userId)),
    deleteSurfSession:(userId, ssId) => dispatch(deleteSurfSession(userId, ssId))
})

export default connect(mSTP,mDTP)(SurfSessionIndex);