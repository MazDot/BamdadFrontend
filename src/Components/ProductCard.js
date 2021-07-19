import React from 'react';
import { Col } from 'react-bootstrap';

export const ProductCard = (props) => (
    <Col md="3">
        <div className="card">
            <img src={props.img} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">View</a>
            </div>
        </div>
    </Col>

);
