import React, {Fragment} from 'react';
import Choice from "./Choice";
import {Box} from "@mui/material";

const Choices = ({choices, onSelectChoice, qType}) => {
	return (
		<Box
			display='flex'
			height='inherit'
			width='inherit'
			flexDirection='column'
			justifyContent='space-around'
			alignItems='space-around'
		>
			{choices.map((choice) => <Choice key={choice.wordId} choice={choice} onSelectChoice={onSelectChoice} qType={qType}/>)}
		</Box>
	)
}

export default Choices;