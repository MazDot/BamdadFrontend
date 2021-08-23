import React from 'react';
import { Button, Form } from 'react-bootstrap';

const initialState = {
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    confirmPassword:"",
    confirmPasswordError:"",
    passwordError:"",
    userNameError:"",
    firstNameError:"",
    lastNameError:"",
    emailError:"",
    role:"Role",
    roleError:"",
    signupError:""
}

class SignupPage extends React.Component {

    state = initialState;

    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            //rigesteration
            const registerOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Username : this.state.userName, 
                    Password : this.state.password,
                    LastName : this.state.lastName,
                    FirstName : this.state.firstName,
                    Role : this.state.role,
                    ConfirmPassword : this.state.confirmPassword,
                    Email : this.state.email
                })
            };
            await fetch("https://localhost:44390/api/user/register", registerOptions);
            //login
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({Username : this.state.userName, Password : this.state.password})
            };
            const data = await fetch("https://localhost:44390/api/user/login", requestOptions).then(response => response.json());
            //saving token in local storage and redirecting
            if (data.accessToken) {
                window.localStorage.setItem('accessToken', data.accessToken);
                window.localStorage.setItem('refreshToken', data.refreshToken);
                this.props.history.push('/home');
            }
            else if (!data.accessToken) {
                this.setState({signupError:data.errorMessages[0]});
            }

        }
    }
    validate = () => {
        let userNameError="";
        let emailError="";
        let firstNameError="";
        let lastNameError="";
        let confirmPasswordError="";
        let passwordError="";
        let roleError="";

        if(!this.state.userName) {
            userNameError="User Name Field Cannot Be Empty";
        }
        if(!this.state.firstName) {
            firstNameError="First Name Field Cannot Be Empty";
        }
        if(!this.state.lastName) {
            lastNameError="Last Name Field Cannot Be Empty";
        }
        if(!this.state.password) {
            passwordError="Password Field Cannot Be Empty";
        }
        if (this.state.password != this.state.confirmPassword) {
            confirmPasswordError="Passwords don't match";
        }

        if(!this.state.email.includes('@') || !this.state.email.includes('.com')) {
            emailError = "Invalid Email Adress";
        }
        if (this.state.role == "Role") {
            roleError="Role not chosen";
        }

        if(emailError || userNameError || firstNameError || lastNameError || confirmPasswordError || passwordError || roleError) {
            this.setState({emailError, userNameError, firstNameError, lastNameError, confirmPasswordError, passwordError, roleError});
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="signupForm">
                <div style={{color:'red', fontSize:20}}>{this.state.signupError}</div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={this.state.firstName} placeholder="First Name" onChange={(event) => this.handleInputChange(event, 'firstName')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.firstNameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={this.state.lastName} placeholder="Last Name" onChange={(event) => this.handleInputChange(event, 'lastName')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.lastNameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={this.state.userName} placeholder="Enter Username" onChange={(event) => this.handleInputChange(event, 'userName')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.userNameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={this.state.email} placeholder="Enter email" onChange={(event) => this.handleInputChange(event, 'email')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.emailError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} type="password" placeholder="Password" onChange={(event) => this.handleInputChange(event, 'password')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.passwordError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control value={this.state.confirmPassword} type="password" placeholder="Confirm Password" onChange={(event) => this.handleInputChange(event, 'confirmPassword')}/>
                        <div style={{color:'red', fontSize:14}}>{this.state.confirmPasswordError}</div>
                    </Form.Group>
                    <br/>
                    <Form.Control value={this.state.role} as="select" onChange={(event) => this.handleInputChange(event, 'role')}>
                        <option value="Role">Select Role</option>
                        <option value="Customer">Customer</option>
                        <option value="Seller">Seller</option>
                    </Form.Control>
                    <div style={{color:'red', fontSize:14}}>{this.state.roleError}</div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SignupPage;