import React from "react";
import "./Scorecard.css";

const Scorecard = props => (
    <div id="scoreCard">
    <ul>
    <li><h1 id="score">{props.title}</h1></li>
    <li id="scoreNumber"><h1>{props.number}</h1></li>
    <li id="message"><h2>{props.message}</h2></li>
    <li id="message2"><h1>{props.message2}</h1></li>
    </ul>
    </div>
)

export default Scorecard;