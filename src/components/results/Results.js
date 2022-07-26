import React from 'react';
import {useLocation} from "react-router-dom";

const Results = () => {
	//결과는서버에서호출되어야한다
	const location = useLocation();
	console.log(location);
	const quizs = location.state.quizs;
	return (
		<>
			<p>ResultsPage</p>
			<p>틀린문제를 복습하세요!</p>
			<div>
				{quizs.map(
					quiz => <div key={quiz.word.wordId}>
								<div>{quiz.word.english}</div>
								<div>{quiz.word.korean}</div>
								<div>{`정답여부 : ${quiz.isCorrect()}`}</div>
							</div>)
				}
			</div>
		</>
	)
}

export default Results;