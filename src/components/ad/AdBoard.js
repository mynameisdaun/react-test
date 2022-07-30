import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const AdBoard = () => {
	return (
		<Box height='20vh'
		     width='95vw'
		     border={'3px solid blue'}
		     alignItems='center'
		     justifyContent='center'
		     display='flex'
		>
			<Typography color='green' fontSize='8vw'>여기엔 <br/>다양한 광고를 넣겠습니다</Typography>
		</Box>
	)
}

export default AdBoard