import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NavigationBar = () => (
    <Container className="footerContainer">
        <Row>
            <Col className="md-7">
                <h3>About</h3>
                <p>Frontend part of Bamdad boot camp, A full stack development boot camp. you can also find the backend for this project on github.com/MazDot/BamdadProject. the project have all the essentials for an application such as authentication, authorization, REST api (clean architecture)</p>
            </Col>
            <Col className="md-5">
                <h3>Contact</h3>
                <h4>hamedmaz400@gmail.com</h4>
            </Col>
        </Row>
    </Container>

);

function Footer (){
    return (
        <div className="footer">
            <NavigationBar />
        </div>
    );
}
export default Footer;