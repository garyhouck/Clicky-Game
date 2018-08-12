import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
<div className="jumbotron">
<img src="https://i.pinimg.com/originals/26/13/e9/2613e93b913a0f3fb7f5ab6650926287.png" />
<h4>{props.children}</h4>
</div>
)

export default Jumbotron;