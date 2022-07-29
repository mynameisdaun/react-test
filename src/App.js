import './App.css';
import Quizs from "./components/quizs/Quizs";
import {DUMMY_QUIZS} from "./dummyData";
import Results from "./components/results/Results";
import {Route, Routes} from "react-router-dom";
import WorkBooks from "./components/workbooks/WorkBooks";
import MyPage from "./components/mypage/MyPage";
import SignIn from "./components/auth/Signin";
import MainNavigation from "./components/nav/MainNavigation";
import {createTheme} from "@mui/material/styles";
import {Box, Grid, ThemeProvider} from "@mui/material";
import * as React from "react";
import Badge from "@mui/material/Badge";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box height='100vh' alignItems='stretch' display='flex' flexDirection='column'>
				{/* header */}
				<Box height='10vh' display='flex' alignItems='center'
					justifyContent='center'
					alignContent='center'
					sx={{
						backgroundColor:'white'
					}}
				>
					<Box
						width='10vw'
						alignSelf='center'
					>
						<MainNavigation/>
					</Box>
					<Box
						width='80vw'
					>
					</Box>
					<Box
						width='10vw'
						display='flex'
						justifyContent='center'
					>
						<Badge color="primary">
							<NotificationsNoneRoundedIcon/>
						</Badge>
					</Box>
				</Box>
				{/* main */}
				<Box display='flex' justifyContent='center'>
					<Routes>
						<Route path='/results' element={<Results/>}/>
						<Route path='/quizs' element={<Quizs quizs={DUMMY_QUIZS}/>}/>
						<Route path='/workbooks' element={<WorkBooks/>}/>
						<Route path={'/:userId'} element={<MyPage/>}/>
						<Route path='/' element={<SignIn/>}/>
					</Routes>
				</Box>
			</Box>
		</ThemeProvider>
	)
		;
}

export default App;
