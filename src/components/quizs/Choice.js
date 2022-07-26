import React from 'react';
import {quizType} from "../../model/quiz";

const Choice = ({choice, qType, onSelectChoice}) => {
	const displayedChoice = qType === quizType.englishToKorean ? choice.korean : choice.english;

	const onClickHandler = (event) => {
		onSelectChoice(choice.wordId);
	}

	return (
		<div onClick={onClickHandler}>{displayedChoice}</div>
	)
}

export default Choice;