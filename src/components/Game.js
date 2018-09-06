import React, { Component } from 'react';
import Header from "./Header";
import Container from "./Container";
import simpsons from "../simpsons.json";

class Game extends Component {
    state = {
        simpsons,
        score: 0,
        topScore: 0,
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header />
                <Container />
            </div>
        )
    }
}

export default Game;