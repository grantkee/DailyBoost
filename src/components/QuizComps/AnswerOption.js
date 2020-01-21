import React from "react";
import "./Quizmain.css";
//Displays the answer options

function AnswerOption(props) {
	return (
		<li className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked={props.answerType === props.answer}
				id={props.answerType}
				value={props.answerType}
				disabled={props.answer}
				onChange={props.onAnswerSelected}
			/>
			<label className="radioCustomLabel" htmlFor={props.answerType}>
				{props.answerContent}
			</label>
		</li>
	);
}

export default AnswerOption;
