import React from "react";
import "./Scoreboard.css";

function Scoreboard(props) {
  return (
    // <header className="scoreB">
    //     <div className="row">
    //         <div className="col-md-6 col-left"><h4>{props.title}</h4></div>
    //         <div className="col-md-3 col-right"><h4>Current Score {props.score}</h4></div>
    //         <div className="col-md-3 col-right"><h4>Top Score {props.topScore}</h4></div>
    //        </div>
    //        <div className="row">
    //            <div className="col-md-12 col-right">
    //              <h5>Click on an image, but don't click on the same one more than once
    //                  </h5></div>
    //         </div>
    //     </header>
    <nav>
      <ul>
        <li className="brand animated lightSpeedIn">
          <a href="/clicky-game/">{props.title}</a>
        </li>

        <li id="rw">{props.rightWrong}</li>

        <li id="cur-sco">Current Score: {props.score}</li>

        <li id="top-sco">Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Scoreboard;
