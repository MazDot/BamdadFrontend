import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function ProductDetail ( {match} ) {
    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({ data: {images : {} }});

    const fetchItem = async () => {
        var token = window.localStorage.getItem('accessToken');
        if(token){
            const getRequest = {
                method: 'Get',
                headers: { "Authorization" : `Bearer ${token}` }
            };
            const data = await fetch(`https://localhost:44390/api/product/${match.params.id}`, getRequest);
            const item = await data.json();
            setItem(item);
            console.log(item);
        }
        else {
            this.props.history.push('/login');
        }

    };
    return (
        <div className="productDetail">
            <Row>
                <Col className="md-4">
                    <img src={item.picURL}></img>
                </Col>
                <Col className="md-6">
                    <br/>
                    <br/>
                    <h3>{item.name}</h3>
                    <h4>Price : {item.price}</h4>
                    <br/>
                </Col>
            </Row>
            
            
        </div>
    );
}

export default ProductDetail;