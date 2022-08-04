import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


const WorkBookIcon = (props) => {
	return (
		<Box display='flex'
		     flexDirection='column'
		     justifyContent='center'
		     alignItems='center'>
			<Box height='7vh'
			     display='flex'
			     alignItems='center'
			>
				{props.children}
			</Box>
			<Box height='3vh'
			     display='flex'
			     alignItems='center'
			>
				<Typography variant="caption" component="div"
				            color="text.secondary">
					{props.text}
				</Typography>
			</Box>
		</Box>
	)
}

export default WorkBookIcon;