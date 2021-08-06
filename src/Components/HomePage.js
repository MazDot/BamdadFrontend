import React from 'react';
import { ProductCard } from './ProductCard.js';
import { Row, Container } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';

const CarouselSlider = (props) => (
    <Container className="carouselSlider">
        <Row className="carouselTitle">
            <h3>{props.categoryName}</h3>
        </Row>
        <Carousel itemsToShow={3}>
        {props.obj.map(item => (
            <ProductCard key ={item.id}
                img={item.images.icon}
                title={item.name}
                description={item.description}
                id={item.id}
            />
        ))}
        </Carousel>
    </Container>
);

export default class HomePage extends React.Component {
    state = {
        puzzles: [],
        boardGames: [],
        tests: []
    };
    async componentDidMount() {
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const items = await data.json();
        const myArray = items.data.items;
        this.setState({tests : myArray});
    }
    render() {
        return (
            <div className="body">
                <section id="puzzles" className="boardGames">
                    <CarouselSlider categoryName="Puzzles" obj={this.state.tests} />
                </section>
                <section id="boardGames" className="boardGames">
                    <CarouselSlider categoryName="Board Games" obj={this.state.tests} />
                </section>
                <section id="sports" className="sports">
                    <CarouselSlider categoryName="Sports" obj={this.state.tests} />
                </section>
                <section id="dolls" className="dolls">
                    <CarouselSlider categoryName="Dolls" obj={this.state.tests} />
                </section>
                <section id="educational" className="educational">
                    <CarouselSlider categoryName="Educational" obj={this.state.tests} />
                </section>
            </div>
        );

    }

}