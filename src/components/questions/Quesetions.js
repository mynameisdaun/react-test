import React, {useEffect, useState} from 'react';
import Word from "./Word";
import Choices from "./Choices";

const Questions = ({questions}) => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev+1);
		},800);
		return () => clearInterval(interval);
	});

	return (
		<>
			<p>{counter}</p>
			<Word word={questions[questionNumber].word}/>
			<Choices choices={questions[questionNumber].choices} />
		</>
	)
}

export default Questions;