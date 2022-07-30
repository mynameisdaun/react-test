import React from 'react';
import AdBoard from "../ad/AdBoard";
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom";

const WorkBookDetail = () => {
	const location = useLocation();
	console.log(location);
	return (
		<Box>
			<AdBoard />
			<Box height='70vh'
			     width='95vw'
			     board={'3px solid blue'}>
					<p>hello chanwool</p>
			</Box>
		</Box>

	)
}

export default WorkBookDetail;
