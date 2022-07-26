import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

const Results = ({questions, answers}) => {

	const results = () => {
		return questions.map((question, index) => {
			return {
				...question,
				'isCorrect': answers[index]
			}
		});
	};

	return (
		<>
			{results.map(r => {
				return (
					<>
						<div>{r.wordId}</div>
						<div>{r.word}</div>
						<div>{r.answer}</div>
						<div>{r.isCorrect}</div>
					</>
				)
			})}
		</>
	)
}

export default Results;