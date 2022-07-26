import React, {useCallback, useEffect, useState} from 'react';
import Word from "./Word";
import Choices from "./Choices";
import {useNavigate} from "react-router-dom";


const Quizs = (props) => {
	const [quizNumber, setQuizNumber] = useState(0);
	const [quizs, setQuizs] = useState(props.quizs);
	const quizComplete = quizNumber >= quizs.length - 1;
	let navigate = useNavigate();

	const moveToNextQuestion = useCallback(
		() => {
			setQuizNumber((prev) => prev + 1);
		}, []);

	const onSelectChoice = (choice) => {
		const userAnswerSaved = [...quizs];
		userAnswerSaved[quizNumber].saveUserChoice(choice);
		setQuizs(userAnswerSaved);
		moveToNextQuestion();
	}
	//TODO: 결과는 서버로 저장되어야 한다
	const handleClick = () => {
		const passedQuiz = [...quizs];
		console.log(passedQuiz);

		navigate("/results", {state: {quizs : passedQuiz}});
	}

	useEffect(() => {
		let interval;
		if(!quizComplete) {
			interval = setInterval(() => moveToNextQuestion(), 300);
		}
		return () => {
			if(!quizComplete) {
				clearInterval(interval);
			}
		}
	}, [quizComplete, moveToNextQuestion]);

	return (
		<>
			{
				!quizComplete &&
				<>
					<p>{quizNumber}</p>
					<Word word={quizs[quizNumber].word} qType={quizs[quizNumber].type}/>
					<Choices choices={quizs[quizNumber].createChoices()} onSelectChoice={onSelectChoice}
					         qType={quizs[quizNumber].type}/>
				</>
			}
			{
				quizComplete &&
				<button onClick={handleClick}>결과보러가기!</button>
			}
		</>
	)
}

export default Quizs;