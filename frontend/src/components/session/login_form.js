// src/components/session/login_form.js

import React from 'react';
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';
=======
import { withRouter, Link  } from 'react-router-dom';
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7

import login from './login.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    // this.props.history.push('/tweets');
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

<<<<<<< HEAD
=======
    componentDidMount() {
        this.props.clearErrors();
    }
    
    
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

<<<<<<< HEAD
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
=======
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
<<<<<<< HEAD
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
=======
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form className='loginform' onSubmit={this.handleSubmit}>
                    <div>
                        <br/>
                        <h2>Log In</h2>
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <br />
                        <input id='login-submit' type="submit" value="Submit" />
                        {this.renderErrors()}
                        <br/>
<<<<<<< HEAD
=======
                        New to Swell?
                        &nbsp;
                        <Link to="/signup">Sign Up</Link>
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);