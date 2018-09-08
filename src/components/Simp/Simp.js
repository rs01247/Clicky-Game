import React from "react";
import "./Simp.css"

const Simp = props => {
    return (
        <div className="simp-card" onClick={() => props.isClicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
};

export default Simp;