import React, {useCallback, useEffect, useState} from 'react';
import Word from "./Word";
import Choices from "./Choices";
import {Box, Card, Grid, Typography} from "@mui/material";
import Timer from "./Timer";
import Progress from "./Progress";


const Quizs = (props) => {
	const [quizNumber, setQuizNumber] = useState(0);
	const [quizs, setQuizs] = useState(props.quizs.quizs);
	const [timerConfig, setTimerConfig] = useState({play: true, time: 5});
	const [quizComplete, setQuizComplete] = useState(false);

	const moveToNextQuestion = () => {
		if (quizNumber === props.quizs.quizs.length - 1) {
			setQuizComplete(true);
			return;
		}
		setQuizNumber((prev) => prev + 1);
		setTimerConfig((prev) => {
			return {...prev, play: true, time: 5}
		});
	}

	const onSelectChoice = (choice) => {
		setTimerConfig(prev => {
			return {play: false, time: 5}
		});
		setQuizNumber((prev) => prev + 1);
		moveToNextQuestion();
	}

	const onTimeOut = () => {
		setTimerConfig(prev=> {
			return {play: false, time: 5}
		});
		moveToNextQuestion();
	}

	return (
		<>
			{
				!quizComplete &&
				<Box
					height='90vh'
					width='95vw'
					display='flex'
					flexDirection='column'
				>
					<Box
						height='10vh'
						display='flex'
						alignItems='center'
						justifyContent='space-between'
					>
						<Timer onTimeOut={onTimeOut} timerConfig={timerConfig}/>
						<Progress value={(quizNumber+1)/props.quizs.quizs.length*100}/>
					</Box>
					<Box
						height='40vh'
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Word word={quizs[quizNumber].word} qType={quizs[quizNumber].type}/>
					</Box>
					<Box
						height='40vh'
						width='inherit'
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Choices choices={quizs[quizNumber].createChoices()} onSelectChoice={onSelectChoice}
						         qType={quizs[quizNumber].type}/>
					</Box>
				</Box>
			}
			{
				quizComplete &&
				<button>결과보러가기!</button>
			}
		</>
	)
}

export default Quizs;