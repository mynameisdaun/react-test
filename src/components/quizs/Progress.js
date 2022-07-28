import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Progress = ({value}) => {
	return (
		<CircularProgress variant="determinate" value={value} />
	)
}

export default Progress;