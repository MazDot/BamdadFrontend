import React from 'react';
import { Col } from 'react-bootstrap';

export const StoreCard = (props) => (
    <Col md="3">
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.address}</p>
                <a href="#" className="btn btn-primary">View Products</a>
            </div>
        </div>
    </Col>

);
