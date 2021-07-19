import market from '../market.png';
import signout from '../signout.png';
import account from '../account.png';
import homePage from '../homepage.png';
import React from 'react';
import { Button, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="col-md-2">
                <Link to='/home'>
                    <img src = {homePage} className="homeImage"></img>
                </Link>
            </div>
            <div className="col-md-8">
                <ListGroup horizontal>
                    <ListGroup.Item><a className="nav-link scrollto" href="#sports">Sport</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#vehicle">Vehicle</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#boardGames">Board Game</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#dolls">Doll</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#educational">Educational</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#puzzles">Puzzle</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#lego">lego</a></ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-md-2">
                <Link to='/stores'>
                    <a>Stores</a>
                </Link>
            </div>
        </div>
    </nav>

);
const AppHeader = () => (

    <Row xs="auto" className="headerRow">
        <Col xs="auto">
            <Button variant="default">
                <img src={market} width="40" />
            </Button>
        </Col>
        <Col xs="auto">
            <Button variant="default">
                <img src={signout} width="30" />
            </Button>
        </Col>
        <Col md="6">
            <div className="input-group">
                <input type="search" id="form1" class="form-control" placeholder="Search" />
            </div>
        </Col>
        <Col md="1">
            <Button variant="default">
                <img src={account} width="30" />
            </Button>
        </Col>
        <Col md="1.1">
            <Button variant="primary">Sign Up</Button>{' '}
        </Col>
        <Col md="1">
            <Button variant="primary">Sign In</Button>{' '}
        </Col>
    </Row>

);

function TopNav (){
    return (
        <div>
            <AppHeader />
            <NavigationBar />
        </div>
    );
}
export default TopNav;