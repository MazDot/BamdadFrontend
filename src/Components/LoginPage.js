import React from 'react';
import { Button } from 'react-bootstrap';

class LoginPage extends React.Component {
    state = {
        userName:"",
        password:"",
        title: "Mr"
    }
    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.userName} onChange={(event) => this.handleInputChange(event, 'userName')} placeholder="User Name"></input>
                    <input value={this.state.password} onChange={(event) => this.handleInputChange(event, 'password')} placeholder="Password"></input>
                    <div>
                        <Button variant="primary" type="submit">Login</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;