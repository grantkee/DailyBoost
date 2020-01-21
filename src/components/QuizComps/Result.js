import React from "react";
import "./Quizmain.css";

function Result(props) {
	return (
		<div className="result">
			You Prefer <strong> {props.quizResult} </strong>!
		</div>
	);
}

export default Result;
