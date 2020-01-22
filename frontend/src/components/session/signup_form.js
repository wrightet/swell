// src/components/session/signup_form.js

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import signup from './signup.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            firstName:'',
            lastName:'',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearedErrors = false;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //         this.props.history.push('/login');
    //     }

    //     this.setState({ errors: nextProps.errors })
    // }

    componentDidMount() {
        this.props.clearErrors();
    }
    

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // let user = {
        //     email: this.state.email,
        //     handle: this.state.handle,
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     password: this.state.password,
        //     password2: this.state.password2
        // };
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <br />
                        Signup
                        <br />
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                        />
                        <br />
                        <br />
                        <input type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                            placeholder="first name"
                        />
                        <br />
                        <br />
                        <input type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                            placeholder="last name"
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
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <br />
                        <input id="signup-button"type="submit" value="Submit" />
                        {this.renderErrors()}
                        <br />
                        <p>Already a member? &nbsp; <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);