import React, {Fragment} from 'react';
import Choice from "./Choice";
import {Box, Grid} from "@mui/material";

const Choices = ({choices, onSelectChoice, qType}) => {
	return (
		<Box
			display='grid'
			gridTemplateColumns='repeat(12, 1fr)'
			gap={4}
			justifyContent="space-around"
			alignItems="space-around"
		>
			{choices.map((choice) =>
				<Box
					gridColumn='span 6'
				>
					<Choice key={choice.wordId} choice={choice} onSelectChoice={onSelectChoice} qType={qType}/>
				</Box>)
			}
		</Box>
	)
}

export default Choices;