import React from "react";
import "./Card.css";

const Cards = props => (
    <div className="card" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.title} src={props.image}/>
            <div className="overlay">
                <div className="text">
                </div>
            </div>
        </div>
    </div>

);

export default Cards;