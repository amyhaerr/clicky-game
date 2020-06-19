import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
    return (
        <header className="scoreB">
            <div className="row">
                <div className="col-md-6 col-left"><h4>{props.title}</h4></div>
                <div className="col-md-3 col-right"><h4>Current Score {props.score}</h4></div>
                <div className="col-md-3 col-right"><h4>Top Score {props.topScore}</h4></div>
               </div>
               <div className="row">
                   <div className="col-md-12 col-right">
                     <h5>Click on an Avatar image, but don't click on the same one more than once
                         </h5></div>
                </div> 
            </header>

    );
}

export default Scoreboard;