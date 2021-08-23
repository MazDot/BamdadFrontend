import React from 'react';
import { Button, Form } from 'react-bootstrap';
import jwt_decode from "jwt-decode";

const initialState = {
    userName:"",
    password:"",
    userNameError:"",
    passwordError:"",
    loginError:""
 }

class LoginPage extends React.Component {
    state = initialState;

    componentDidMount() {
        const token = window.localStorage.getItem('accessToken');
        var isExpired = false;
        if (token) {
            if (token.length > 0) {
                var decodedToken=jwt_decode(token, {complete: true});
                console.log(decodedToken);
                var dateNow = new Date();
        
                if(decodedToken.exp < (dateNow.getTime() / 1000)) {
                    isExpired = true;
                }
                if (!isExpired) {
                    if (decodedToken.Role == "Customer") {
                        this.props.history.push('/editprofile');
                    }
                    if (decodedToken.Role == "Seller") {
                        this.props.history.push('/editsellerprofile');
                    }
                }
            }
        }
        
        
    }
    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({Username : this.state.userName, Password : this.state.password})
            };
            const data = await fetch("https://localhost:44390/api/user/login", requestOptions).then(response => response.json());
            if (data.accessToken) {
                window.localStorage.setItem('accessToken', data.accessToken);
                window.localStorage.setItem('refreshToken', data.refreshToken);
                this.props.history.push('/home');
            }
            else if (!data.accessToken) {
                this.setState({loginError:data.errorMessages[0]});
            }
            
        }
    }

    validate = () => {
        let userNameError="";
        let passwordError="";
        if (!this.state.userName) {
            userNameError = "User Name Field Cannot Be Empty";
        }
        if (!this.state.password) {
            passwordError = "Password Cannot Be Empty";
        }
        if(passwordError || userNameError) {
            this.setState({passwordError, userNameError});
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className="loginForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={this.state.userName} placeholder="Enter Username" onChange={(event) => this.handleInputChange(event, 'userName')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.userNameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} type="password" placeholder="Password" onChange={(event) => this.handleInputChange(event, 'password')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.passwordError}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginPage;