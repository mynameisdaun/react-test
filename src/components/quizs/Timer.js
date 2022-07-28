import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/material";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import Typography from "@mui/material/Typography";

const Timer = (props) => {
	//TODO: 시간 하드코딩으로 된거 개선할 수 있을까?
	const interval = 1000;
	const [second, setSecond] = useState(props.timerConfig.time);
	const [timerInterval, setTimerInterval] = useState(0);

	const tick = () => {
		if(second >= 0.1) {
			setSecond((prev) => prev - interval/1000);
		} else {
			props.onTimeOut();
			setSecond(props.timerConfig.time);
		}
	}

	useEffect(() => {
		setSecond(props.timerConfig.time);
	},[props.timerConfig])

	const customInterval = useInterval(
		() => {
			tick();
		}, //isPlay ? 100 : null
		props.timerConfig.play ? interval : null
	);

	useEffect(() => {
		if(second <= 0.1) {
			clearInterval(timerInterval);
		}
	},[second])

	useEffect(()=> {
		if(props.timerConfig.play) {
			setTimerInterval(customInterval);
		}
	}, [props.timerConfig.play])

	return (
		<Box
			display='flex'
			alignItems='center'
		>
			<TimerOutlinedIcon/>
			<Typography variant='h5' marginLeft={0.5}>
				{Number.parseFloat(second).toFixed(1)}
			</Typography>
		</Box>
	)
}

function useInterval(callback, delay) {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	},[callback])

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if(delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default Timer;