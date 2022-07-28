import React from 'react';
import {quizType} from "../../model/quiz";
import Typography from "@mui/material/Typography";
import {wordSize} from "../../style/style-guide";
import {Box} from "@mui/material";

const Word = ({word, qType}) => {
	const displayedWord = qType === quizType.englishToKorean ? word.english : word.korean;
	return (
		<Box sx={{
			display:'flex',
			justifyContent:'center'
		}}>
			<Typography sx={{ fontSize: wordSize }} color="text.primary" >
				{displayedWord}
			</Typography>
		</Box>
	)
}

export default Word;