<<<<<<< HEAD
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
=======
        // signedIn: state.session.isSignedIn,
        formType: 'signup',
        navLink: <Link to='/login'>log in instead</Link>,
        errors: state.errors.session,
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        signup: user => dispatch(signup(user))
=======
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);