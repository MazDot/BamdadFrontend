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
                img={item.picURL}
                title={item.name}
                description={item.price}
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
                <ListGroup className="topNAV" horizontal>
                    <ListGroup.Item><a className="nav-link scrollto" href="#sports">Sport</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#vehicle">Vehicle</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#educational">Educational</a></ListGroup.Item>
                    <ListGroup.Item><a className="nav-link scrollto" href="#puzzles">Puzzle</a></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    </nav>

);

export default class HomePage extends React.Component {
    state = {
        puzzles: [],
        sports: [],
        educationals: [],
        vehicles:[]
    };
    async componentDidMount() {
        const puzzleData = await fetch('https://localhost:44390/api/product/categorySearch/Puzzle');
        const puzzleItems = await puzzleData.json();
        this.setState({puzzles : puzzleItems});
        const vehiclesData = await fetch('https://localhost:44390/api/product/categorySearch/Vehicle');
        const vehicleItems = await vehiclesData.json();
        this.setState({vehicles : vehicleItems});
        const sportsData = await fetch('https://localhost:44390/api/product/categorySearch/Sport');
        const sportsItems = await sportsData.json();
        this.setState({sports : sportsItems});
        const educationalData = await fetch('https://localhost:44390/api/product/categorySearch/Educational');
        const educationalItems = await educationalData.json();
        this.setState({educationals : educationalItems});

    }
    render() {
        return (
            <div className="homepageBody">
                <NavigationBar />
                <section id="puzzles" className="puzzles">
                    <CarouselSlider categoryName="Puzzles" obj={this.state.puzzles} />
                </section>
                <section id="vehicle" className="vehicle">
                    <CarouselSlider categoryName="Vehicle" obj={this.state.vehicles} />
                </section>
                <section id="sports" className="sports">
                    <CarouselSlider categoryName="Sports" obj={this.state.sports} />
                </section>
                <section id="educational" className="educational">
                    <CarouselSlider categoryName="Educational" obj={this.state.educationals} />
                </section>
            </div>
        );

    }

}