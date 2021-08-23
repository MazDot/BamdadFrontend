import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const ProductCard = (props) => (
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Price : {props.description}</p>
                <Link to={`/product/${props.id}`}>
                <Button variant="primary">View</Button>
                </Link>
            </div>
        </div>

);
