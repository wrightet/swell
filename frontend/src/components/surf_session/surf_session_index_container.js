import { connect } from 'react-redux';
import SurfSessionIndex from './surf_session_index';
import { fetchSurfSessions } from '../../actions/surf_session_actions'
const mSTP = state => {
   
   return{sessions: Object.values(state.entities.surf_sessions), currentUser: state.session.user}
}
    

const mDTP = dispatch => ({
    fetchSurfSessions: (userId) => dispatch(fetchSurfSessions(userId))
})

export default connect(mSTP,mDTP)(SurfSessionIndex);