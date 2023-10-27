import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
            successMessage: '',

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm = () => {
        const { fullName, email, password, confirmPassword } = this.state;
        let errors = {};

        if (!fullName) {
            errors.fullName = "FullName is Required"
        }
        if (!email) {
            errors.email = "Email is Required";
        } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            errors.email = "Invalid Email Address";
        }

        if (!password) {
            errors.password = "Password is Required";
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value, errors: { ...this.state.errors, [name]: '' }});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.setState({
                successMessage: 'Registration Successful!',
                errors: {},
            });
        } else {
            this.setState({ errors});
        }
    }

    render() {
        const { fullName, email, password, confirmPassword, errors, successMessage } = this.state;
        return (
            <div className="Container">
                <h2>Registration Form</h2>
                {successMessage && <div className='success-message'>{successMessage}</div>}
                <form onSubmit={this.handleSubmit}>
                    <div className='row'> 
                        <label>Full Name: </label>
                        <input type="text" name='fullName' className='rowlabel' value={fullName} onChange={this.handleInputChange} />
                        {errors.fullName || <div className='error-message'>{errors.fullName}</div>}
                    </div>
                    <div className='row'>
                        <label>Email: </label>
                        <input type="email" name='email'className='rowlabel' value={email} onChange={this.handleInputChange} />
                        {errors.email || <div className='error-message'>{errors.email}</div>}
                        
                    </div>
                    <div className='row'>
                        <label>Password: </label>
                        <input type="password" name='password' className='rowlabel' value={password} onChange={this.handleInputChange} />
                        {errors.password || <div className='error-message'>{errors.password}</div>}
                    </div>
                    <div className='row'>
                        <label>Confirm Password: </label>
                        <input type="password" name='confirmPassword' className='rowlabel' value={confirmPassword} onChange={this.handleInputChange} />
                        {errors.confirmPassword || <div className='error-message'>{errors.confirmPassword}</div>}
                    </div>
                    <button type='submit' onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        );
    }
}
