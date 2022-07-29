import React from 'react';
import {DUMMY_QUIZS_WITH_USER_ANSWER} from "../../dummyData";
import {Box, Divider, ListItem, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import {resultEnglishWordSize, resultKoreanWordSize} from "../../style/style-guide";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const Results = () => {
	//TODO: 결과는서버에서호출되어야한다
	const quizs = DUMMY_QUIZS_WITH_USER_ANSWER;
	const englishWordColor = (isCorrect) => isCorrect ? 'black' : 'red';
	return (
		<Box height='90vh' width='95vw' display='flex' flexDirection='column' justifyContent='starts'
		     border={'3px solid black'}>
			<Box height='20vh' border={'3px solid red'}>
				<p>대쉬보드..어떤 내용을 넣을까?</p>
				<Typography>{`정답률: ${Number.parseFloat(quizs.calculateAnswerRate()).toFixed(2) * 100}%`}</Typography>
			</Box>
			<Box height='70vh' border={'3px solid blue'}>
				<List>
					{quizs.quizs.map(
						quiz =>
							<Box key={quiz.word.wordId}>
								<ListItem>
									<ListItemButton>
										<ListItemText primary={quiz.word.english}
										              primaryTypographyProps={
											              {
												              color: englishWordColor(quiz.isCorrect()),
												              fontSize: resultEnglishWordSize,
												              marginBottom: 1
											              }}
										              secondary={quiz.word.korean}
										              secondaryTypographyProps={
											              {
												              fontSize: resultKoreanWordSize,
											              }}
										/>
									</ListItemButton>
								</ListItem>
								<Divider/>
							</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}

export default Results;