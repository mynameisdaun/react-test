import React from 'react';
import AdBoard from "../ad/AdBoard";
import {Box, CircularProgress, Divider, ListItem, ListItemText} from "@mui/material";
import {useLocation, useParams} from "react-router-dom";
import {DUMMY_WORKBOOK_1} from "../../dummyData";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {workBookNameSize} from "../../style/style-guide";
import Typography from "@mui/material/Typography";
import QuizIcon from '@mui/icons-material/Quiz';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkBookIcon from "./WorkBookIcon";

const WorkBookDetail = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};
	const location = useLocation();
	const params = useParams();
	const userId = params.userId;
	const workBookId = params.workBookId;
	const workbook = DUMMY_WORKBOOK_1;
	return (
		<Box height='90vh' width='95vw'>
			<AdBoard/>
			<Box height='80vh'>
				<Box
					sx={{
						display: 'flex',
						height: '10vh',
						alignItems: 'center',
						justifyContent: 'space-around',
						borderRadius: 1,
						bgcolor: 'background.paper',
						color: 'text.secondary',
					}}
				>
					<WorkBookIcon text='공부하기'><QuizIcon/></WorkBookIcon>
					<WorkBookIcon text='문제풀기'><PlayArrowIcon/></WorkBookIcon>
					<WorkBookIcon text='진도율'>
						<Box sx={{position: 'relative', display: 'inline-flex'}}>
							<CircularProgress variant="determinate" value={90}/>
							<Box
								sx={{
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									position: 'absolute',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography variant="caption" component="div"
								            color="text.secondary">
									{`${Math.round(90)}%`}
								</Typography>
							</Box>
						</Box>
					</WorkBookIcon>
				</Box>
				<List>
					{workbook.quizsList.map((quizs,index) =>
						<Box key={quizs.name}>
							<ListItem>
								<ListItemButton
									selected={selectedIndex === index}
									onClick={(event) => handleListItemClick(event, index)}
								>
									<ListItemText primary={quizs.name}
									              primaryTypographyProps={{
										              fontSize: workBookNameSize
									              }}/>
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

export default WorkBookDetail;
