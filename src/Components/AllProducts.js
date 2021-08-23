import React, { useState, useEffect } from 'react';
import {ProductCard} from './ProductCard.js';
import Carousel from 'react-elastic-carousel';
import { Row, Container } from 'react-bootstrap';

function Stores () {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        var token = window.localStorage.getItem('accessToken');
        if(token){
            const getAllRequest = {
                method: 'Get',
                headers: { "Authorization" : `Bearer ${token}` }
            };
            const data = await fetch('https://localhost:44390/api/product/allProducts', getAllRequest);
            const items = await data.json();
            setItems(items);
        }
        else {
            this.props.history.push('/login');
        }
    };
    const CarouselSlider = (props) => (
        <Container className="carouselSlider">
            <Row className="carouselTitle">
                <h3>{props.categoryName}</h3>
            </Row>
            <Carousel itemsToShow={3}>
            {props.obj.map(item => (
                <ProductCard key ={item.id}
                    img={item.picURL}
                    title={item.name}
                    description={item.price}
                    id={item.id}
                />
            ))}
            </Carousel>
        </Container>
    );

    return (
        <div className="body">
            <section id="puzzles" className="boardGames">
                    <CarouselSlider categoryName="All Products" obj={items} />
            </section>
        </div>
    );

}

export default Stores;