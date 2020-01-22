<<<<<<< HEAD

import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        errors: state.errors.session
=======
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        login: user => dispatch(login(user))
=======
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors),
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);