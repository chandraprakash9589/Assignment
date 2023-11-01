import React, { Component } from 'react'
import style from './style.css'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            validate: {
                fullName: true,
                email: true,
                password: true,
                confirmPassword: true,
            },

            success: '',
        };
    }
    validationCheck = () => {
        let validForm = true;

        const { fullName, email, password, confirmPassword } = this.state.formData

        if (password !== confirmPassword) {
            alert("password do not match")
            validForm = false

        }
        return validForm
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Check if any of the input fields are empty
        const { fullName, email, password, confirmPassword } = this.state.formData;
        const areAnyFieldsEmpty = [fullName, email, password, confirmPassword].some(
            (value) => value.trim() === ''
        );

        if (areAnyFieldsEmpty) {
            // Apply the red border class to the empty input fields
            this.setState((prevState) => ({
                validate: {
                    ...prevState.validate,
                    fullName: fullName.trim() === '' ? false : true,
                    email: email.trim() === '' ? false : true,
                    password: password.trim() === '' ? false : true,
                    confirmPassword: confirmPassword.trim() === '' ? false : true,
                },
            }));
        } else {
            if (this.validationCheck()) {
                alert("Successfulllll....")
                console.log(this.state.formData)
                
            }
            else {
                this.setState({ success: '' });
            }
            

        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));

        if (!this.state.validate[name]) {
            // Clear the error message when the user starts typing
            this.setState((prevState) => ({
                validate: {
                    ...prevState.validate,
                    [name]: true,
                },
            }));
        }
    }
    // checkValidation(){
    //     if(this.Form.pwd !== this.Form.cnfpwd){
    //         alert();
    //     }
    // }
    render() {
        let { fullName, email, password, confirmPassword } = this.state.formData


        return (
            <><div className='App-header'>
                <form className='form' onSubmit={this.handleSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <th htmlFor="name">Name : </th>
                                <td><input className={this.state.validate.fullName ? '' : 'error-input'} type="text" name='fullName' value={fullName} onChange={this.handleChange} /></td>

                            </tr>
                            <tr>
                                <th htmlFor="Email">Email : </th>
                                <td><input className={this.state.validate.email ? '' : 'error-input'} type="Email" name='email' value={email} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <th htmlFor="Password">Password : </th>
                                <td><input className={this.state.validate.password ? '' : 'error-input'} type="Password" name='password' value={password} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <th htmlFor="Password">Confirm Password : </th>
                                <td><input className={
                                    ((this.state.validate.confirmPassword && (this.state.validate.password !== this.state.validate.confirmPassword)) || !this.state.validate.confirmPassword)
                                        ? 'error-input'
                                        : ''
                                } type="Password" name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />
                                    <br />
                                    <span className={'spanq'}>password do not match </span>
                                </td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr >
                                <th colSpan={2} className=' scrollingTextContainer'>
                                    <button className='btn scrollingText' type="submit">submit</button>

                                </th>
                            </tr></tbody></table>
                </form></div>
            </>
        );
    }
}

export default Registration;