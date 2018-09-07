import React, { Component } from 'react';
import Simp from "./Simp";
import Header from "./Header";
import Container from "./Container";
import simpsons from "../simpsons.json";

class Game extends React.Component {

    state = {
        simpsons,
        score: 0,
        topScore: 0,
    }

    gameOver = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score }, () => console.log(this.state.topScore));
        }
        this.state.simpsons.each(simpsons => {
            simpsons.clicked = false;
        });
        this.setState({ score: 0 });
        return true;
    }



    componentDidMount() {
        // this.setState({ simpsons: this.clickCount(this.state.simpsons) });
      }
    

    render() {
        return (
            <div>
                <Header />
                <Container score={this.state.score} topScore={this.state.topScore}>
                    {this.state.simpsons.map(simpsons => (
                        <Simp
                            clickCount={this.clickCount}
                            id={simpsons.id}
                            key={simpsons.id}
                            image={simpsons.image}
                        />
                    ))}
                </Container>
            </div>
        )
    }
}

export default Game;