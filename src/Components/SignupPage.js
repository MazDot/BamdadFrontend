import React from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
    userName:"",
    email:"",
    password:"",
    userNameError:"",
    emailError:"",
    title: "Mr" 
}

class SignupPage extends React.Component {

    state = initialState;

    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
        }
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.userName} onChange={(event) => this.handleInputChange(event, 'userName')} placeholder="User Name"></input>
                        <div style={{color:'red', fontSize:14}}>{this.state.userNameError}</div>
                    </div>
                    <div>
                        <input value={this.state.email} onChange={(event) => this.handleInputChange(event, 'email')} placeholder="Email"></input>
                        <div style={{color:'red', fontSize:14}}>{this.state.emailError}</div>
                    </div>
                    <div>
                        <input value={this.state.password} onChange={(event) => this.handleInputChange(event, 'password')} placeholder="Password"></input>
                        <div style={{color:'red', fontSize:14}}>{this.state.passwordError}</div>
                    </div>
                    <select value={this.state.title} onChange={(event) => this.handleInputChange(event, 'title')}>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                    </select>
                    <div>
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupPage;