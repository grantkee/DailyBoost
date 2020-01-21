import React from "react";

//receives two props, counter and total from a container component.

function QuestionCount(props) {
	return (
		<div className="questionCount">
			Question <span>{props.counter}</span> of <span>{props.total}</span>
		</div>
	);
}

export default QuestionCount;
