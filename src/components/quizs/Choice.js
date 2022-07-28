import React from 'react';
import {quizType} from "../../model/quiz";
import {choiceSize} from "../../style/style-guide";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

const Choice = ({choice, qType, onSelectChoice}) => {
	const displayedChoice = qType === quizType.englishToKorean ? choice.korean : choice.english;

	const clickHandler = (event) => {
		console.log("just clicked!");
		onSelectChoice(choice.wordId);
	}
	return (
		<Box height='7.5vh'
		     width='40vw'
		     display='flex'
		     justifyContent='center'
		     onClick={clickHandler}
		>
			<Button variant={"outlined"} fullWidth={true} sx={{borderRadius:3}}>
				<Typography  sx={{ fontSize: choiceSize }} color="text.primary" gutterBottom >
					{displayedChoice}
				</Typography>
			</Button>
		</Box>
	)
}

export default Choice;