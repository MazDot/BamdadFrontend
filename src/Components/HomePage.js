import React from 'react';
import { ProductCard } from './ProductCard.js';
import { Row, Container } from 'react-bootstrap';

const CarouselProduct = (props) => (
    <Container className="carsousel">
        <Row className="categoryName">
            <h4>-- {props.categoryName} --</h4>
        </Row>
        <Row>
            {props.obj.map(item => (
                <ProductCard img={item.img}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </Row>
    </Container>

);

export default class HomePage extends React.Component {
    state = {
        puzzles: [],
        boardGames: []
    };
    componentDidMount() {
        this.setState({
            puzzles: [{
                id: 100,
                img: "https://images-na.ssl-images-amazon.com/images/I/81bPWskNWpL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
                title: "Jigsaw Puzzle",
                description: "A Stroll in Paris - 1000 Piece Jigsaw Puzzle"
            },
            {
                id: 101,
                img: "https://images-na.ssl-images-amazon.com/images/I/71bvJh2UYML.__AC_SY300_SX300_QL70_FMwebp_.jpg",
                title: "Kanoodle 3-D",
                description: "Educational Insights Kanoodle 3-D Brain Teaser Puzzle Game for Kids, Teens and Adults, Featuring 200 Challenges, Indoor Recess Game, Ages 7+"
            }
            ]
        });
        this.setState({
            boardGames: [{
                img: "https://images-na.ssl-images-amazon.com/images/I/81fEiLrmZ8L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                title: "Connect 4",
                description: "Hasbro Connect 4 Game"
            },
            {
                img: "https://images-na.ssl-images-amazon.com/images/I/91Chw0WQFHL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
                title: "Five Crowns",
                description: "SET Enterprises Five Crowns Card Game"
            }
            ]
        });
    }
    render() {
        return (
            <div className="body">
                <section id="puzzles" className="boardGames">
                    <CarouselProduct id="puzzles" categoryName="Puzzles" obj={this.state.puzzles} />
                </section>
                <section id="boardGames" className="boardGames">
                    <CarouselProduct categoryName="Board Games" obj={this.state.boardGames} />
                </section>
                <section id="sports" className="sports">
                    <CarouselProduct categoryName="Sports" obj={this.state.boardGames} />
                </section>
                <section id="dolls" className="dolls">
                    <CarouselProduct categoryName="Dolls" obj={this.state.boardGames} />
                </section>
            </div>
        );

    }

}