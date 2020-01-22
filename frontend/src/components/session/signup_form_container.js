import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return {
        // signedIn: state.session.isSignedIn,
        formType: 'signup',
        navLink: <Link to='/login'>log in instead</Link>,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);