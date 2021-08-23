import signout from '../signout.png';
import signin from '../signin.png';
import signup from '../signup.jpg';
import account from '../account.png';
import homePage from '../homepage.png';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default class TopNav extends React.Component{
    AppHeader = () => (

        <Row xs="auto" className="headerRow">
            <Col xs="auto">
                <Link to='/home'>
                        <img src = {homePage} className="homeImage" width="30"></img>
                </Link>
            </Col>
            <Col md="6">
                <div className="input-group">
                    <input type="search" id="form1" className="form-control" placeholder="Search" />
                </div>
            </Col>
            <Col md="1">
                <Link to={this.state.redirect}>
                    <img src={account} width="30" />
                </Link>
            </Col>
                <Link to='/signup'>
                    <img src={signup} width="80" />
                </Link>
            <Link to='/login'>
                    <img src={signin} width="80" />
            </Link>
        </Row>
    
    );

    state= {
        redirect:""
    }

    componentDidMount () {
        var token = window.localStorage.getItem('accessToken');
        var isExpired = false;
        if (token) {
            var role = jwt_decode(token).Role;
            if (token.length > 0) {
                var decodedToken=jwt_decode(token, {complete: true});
                var dateNow = new Date();
        
                if(decodedToken.exp < (dateNow.getTime() / 1000)) {
                    isExpired = true;
                }
                if (!isExpired) {
                    if (role == "Cutsomer") {
                        this.setState({redirect:'/editprofile'});
                        return;
                    }
                    if (role == "Seller") {
                        this.setState({redirect:'/editsellerprofile'});
                        return;
                    }
                }
            }
        }
        this.setState({redirect:'/login'});
    }
    render() {
        return (
        <div>
            <this.AppHeader />
        </div>
        );
    }
}