// src/components/session/signup_form.js

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './signup.css'

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
        this.handleDemo = this.handleDemo.bind(this);
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
   
        const user = Object.assign({}, this.state);
        let loggyUser={
            email:this.state.email,
            password:this.state.password
        }
        this.props.processForm(user)
            .then(()=>(this.props.login(loggyUser)))
    }

    handleDemo() {
        // const user = Object.assign({email: 'demo', password: '123456'}, this.state)
        this.props.login({ email: 'demo1@demo.com', password: '123456' });
    }

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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <br />
                        <h2>Signup</h2>
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
                        <p>Already a member? &nbsp; <Link to='/login' className="sign-up-link">Login</Link></p>
                        <button className="demo-button" onClick={this.handleDemo}>Demo User</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);