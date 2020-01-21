import React from 'react';
import "./Quizmain.css";

function Question (props){
    return (
        <h2 className="question">{props.content} </h2>
    )
}

export default Question