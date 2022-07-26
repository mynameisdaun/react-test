import React from 'react';
import {quizType} from "../../model/quiz";

const Word = ({word, qType}) => {
	const displayedWord = qType === quizType.englishToKorean ? word.english : word.korean;
	return (
		<>
			<div>{displayedWord}</div>
		</>
	)
}

export default Word;