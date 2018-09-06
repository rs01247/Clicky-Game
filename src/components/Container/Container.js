import React from "react";

const Container = props => (
    <div className="container">
        <div className="jumbotron bg-transparent text-center m-0 p-1">
            <p style={{fontWeight: "bold"}}>Click any character to begin the game, earn points by not clicking any more than once!</p>
            <h4>Score: 0 | Top Score: 0</h4>
        </div>
    </div>
);

export default Container;