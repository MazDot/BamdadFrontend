import React from 'react';
import { ProductCard } from './ProductCard.js';
import { Row, Container, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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

const NavigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="col-md-2">
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
            <div className="homepageBody">
                <NavigationBar />
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