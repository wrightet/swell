// src/components/session/login_form.js

import React from 'react';
import { withRouter, Link  } from 'react-router-dom';

import './login.css'

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
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e) {
        // const user = Object.assign({email: 'demo', password: '123456'}, this.state)
        e.preventDefault();
        this.props.processForm({ email: 'demo1@demo.com', password: '123456' });
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
                            className="login-form-input"
                        />
                        <br />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-form-input"
                        />
                        <br />
                        <br />
                        <input id='login-submit' type="submit" value="Submit" />
                        {this.renderErrors()}
                        <br/>
                        New to Swell?
                        &nbsp;
                        <Link to="/signup" className="sign-up-link">Sign Up</Link> 
                        <button className="demo-button" onClick={this.handleDemo}>Demo User</button>
                    </div> 
                   
                </form>
               
            </div>
        );
    }
}

export default withRouter(LoginForm);