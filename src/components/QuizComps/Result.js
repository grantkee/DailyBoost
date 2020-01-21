import React from "react";

function Result(props) {
	return (
		<div className="result">
			You Prefer <strong> {props.quizResult} </strong>!
		</div>
	);
}

export default Result;
