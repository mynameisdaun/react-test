import React from 'react';
import {quizType} from "../../model/quiz";
import {quizChoiceSize} from "../../style/style-guide";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";

const Choice = ({choice, qType, onSelectChoice}) => {
	const displayedChoice = qType === quizType.englishToKorean ? choice.korean : choice.english;

	const clickHandler = (event) => {
		onSelectChoice(choice.wordId);
	}
	return (
		<Box height='7.5vh'
		     width='inherit'
		     display='flex'
		     justifyContent='center'
		     onClick={clickHandler}
		>
			<Button variant={"outlined"} fullWidth={true} sx={{borderRadius:3}}>
				<Typography sx={{ fontSize: quizChoiceSize }} color="text.primary" gutterBottom >
					{displayedChoice}
				</Typography>
			</Button>
		</Box>
	)
}

export default Choice;