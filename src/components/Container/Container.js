import React from "react";

const Container = props => (
    <div className="container">
        <div className="jumbotron bg-transparent text-center m-0 p-1">
            <p style={{fontWeight: "bold"}}>Click any character to begin the game, earn points by not clicking any more than once!</p>
            <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
        </div>
        {props.children}
    </div>
);

export default Container;