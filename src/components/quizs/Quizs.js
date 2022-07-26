import React, {useCallback, useEffect, useState} from 'react';
import Word from "./Word";
import Choices from "./Choices";

const Questions = ({questions}) => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [answers, setAnswers] = useState([]);

	const moveToNextQuestion = useCallback(
		() => {
			if (questionNumber < questions.length - 1) {
				setQuestionNumber((prev) => prev + 1);
			}
		}, [questions, questionNumber]);


	const onSelectChoice = (choice) => {
		setAnswers((prev) => [...prev,
			{
				'isCorrect': questions[questionNumber].answer === choice,
				'id': questions[questionNumber].id,
				'choice': choice
			}]);
		moveToNextQuestion();
	}

	useEffect(() => {
		const interval = setInterval(() => moveToNextQuestion(), 3000);
		return () => clearInterval(interval);
	}, [moveToNextQuestion]);

	return (
		<>
			<p>{questionNumber}</p>
			<Word word={questions[questionNumber].word}/>
			<Choices choices={questions[questionNumber].choices} onSelectChoice={onSelectChoice}/>
		</>
	)
}

export default Questions;