import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);