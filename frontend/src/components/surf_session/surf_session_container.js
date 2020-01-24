import { connect } from 'react-redux';
import { createSurfSession } from '../../actions/surf_session_actions';
import SurfSessionForm from './surf_session_form';

const mSTP = state => ({
    session: {
        body: ''
    },
    formType: 'Create Surf Session'
})

const mDTP = dispatch => ({
    action: session => dispatch(createSurfSession(session))
})

export default connect(mSTP, mDTP)(SurfSessionForm);