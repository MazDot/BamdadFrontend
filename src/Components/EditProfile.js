import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import jwt_decode from "jwt-decode";

const initialState = {
    userName:"",
    email:"",
    address:"",
    oldPassword:"",
    newPassword:""
}

class EditProfile extends React.Component {

    state = initialState;

    componentDidMount () {
        var token = window.localStorage.getItem('accessToken');
        var decoded = jwt_decode(token);
        this.setState({email:decoded.Email, userName:decoded.Name});
        console.log(decoded);
    }

    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    HandleLogout = async () => {
        let headerValue = 'Bearer ' + window.localStorage.getItem('accessToken');
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': headerValue }
        };
        await fetch("https://localhost:44390/api/user/logout", requestOptions);
        window.localStorage.setItem('accessToken', '');
        window.localStorage.setItem('refreshToken', '');
        this.props.history.push('/login');
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
    }
    onPasswordChange = () => {
        alert('currently does nothing');
    }
    validate = () => {
        let userNameError="";
        let emailError="";

        if(!this.state.userName) {
            userNameError="User Name Field Cannot Be Empty";
        }

        if(!this.state.email.includes('@') || !this.state.email.includes('.com')) {
            emailError = "Invalid Email Adress";
        }

        if(emailError || userNameError) {
            this.setState({emailError, userNameError});
            return false;
        }

        return true;
    }

    render() {
        return (
            <div>
                <Form className="editprofile">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue={this.state.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        UserName
                        </Form.Label>
                        <Col sm="4">
                        <Form.Control plaintext readOnly defaultValue={this.state.userName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Old Password
                        </Form.Label>
                        <Col sm="4">
                        <Form.Control type="password" placeholder="Old Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        New Password
                        </Form.Label>
                        <Col sm="4">
                        <Form.Control type="password" placeholder="NewPassword" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" onClick={this.onPasswordChange}>
                        Change Password
                    </Button>
                    <Button variant="danger" onClick={this.HandleLogout}>
                        Logout
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditProfile;