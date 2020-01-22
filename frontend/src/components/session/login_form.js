// src/components/session/login_form.js

import React from 'react';
import { withRouter, Link  } from 'react-router-dom';

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

    componentDidMount() {
        this.props.clearErrors();
    }
    
    
    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
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
                        New to Swell?
                        &nbsp;
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);