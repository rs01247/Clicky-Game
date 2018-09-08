import React from 'react';
import Simp from "./Simp";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import simpsons from "../simpsons.json";

class Game extends React.Component {

    state = {
        simpsons,
        score: 0,
        topScore: 0,
    };

    // componentDidMount() {
    //     this.setState({ simpsons: this.isClicked(this.state.simpsons) });
    // }

    gameOver = () => {
        if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score }, () => console.log(this.state.topScore));
        };
        this.state.simpsons.forEach(simps => {
            simps.clicked = false;
        });
        this.setState({ score: 0 });
        return true;
    };


    isClicked = id => {
        this.state.simpsons.find((i, j) => {
            if (i.id === id) {
                if (simpsons[j].clicked === false) {
                    simpsons[j].clicked = true;
                    this.setState({ score: this.state.score + 1 }, () => {
                        console.log(this.state.score);
                    });
                    this.state.simpsons.sort(() => Math.random() - 0.5)
                    return true;
                }
                else {
                    this.gameOver();
                }
            };
        });
    };

    render() {
        return (
            <div>
                <Header />
                <Container score={this.state.score} topScore={this.state.topScore}>
                    {this.state.simpsons.map(simps => (
                        <Simp
                            isClicked={this.isClicked}
                            id={simps.id}
                            key={simps.id}
                            image={simps.image}
                        />
                    ))} 
                </Container>
                {/* <Footer /> */}
            </div>
        )
    };
};

export default Game;