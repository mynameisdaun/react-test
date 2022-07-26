import './App.css';
import Quizs from "./components/quizs/Quizs";
import {chapter1} from "./dummyData";
import Results from "./components/results/Results";
import {Route, Routes} from "react-router-dom";
import WorkBooks from "./components/workbooks/WorkBooks";
import MyPage from "./components/mypage/MyPage";
import SignIn from "./components/auth/Signin";
import MenuDrawer from "./components/nav/MenuDrawer";
import {createTheme} from "@mui/material/styles";
import {Box, ThemeProvider} from "@mui/material";
import * as React from "react";
import Badge from "@mui/material/Badge";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import WorkBookDetail from "./components/workbooks/WorkBookDetail";
import KakaoCallBack from "./components/auth/KakaoCallBack";

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box height='100vh' alignItems='stretch' display='flex' flexDirection='column'>
				{/* header */}
				<Box height='10vh' display='flex' alignItems='center' justifyContent='center' alignContent='center'
				     sx={{backgroundColor: 'white'}}
				>
					{/* menu drawer*/}
					<Box width='10vw' alignSelf='center'>
						<MenuDrawer/>
					</Box>
					{/* name space */}
					<Box width='80vw'/>
					{/* notification */}
					<Box width='10vw' display='flex' justifyContent='center'>
						<Badge color='primary'>
							<NotificationsNoneRoundedIcon/>
						</Badge>
					</Box>
				</Box>
				{/* main */}
				<Box display='flex' justifyContent='center'>
					<Routes>
						<Route path='/results' element={<Results/>}/>
						<Route path='/quizs' element={<Quizs quizs={chapter1}/>}/>
						<Route path='/sign-in' element={<SignIn/>}/>
						<Route path='/:userId/workbooks' element={<WorkBooks/>}/>
						<Route path='/:userId/workbooks/:workBookId' element={<WorkBookDetail />}/>
						<Route path='/:userId' element={<MyPage/>}/>
						<Route path='/oauth/kakao/callback' element={<KakaoCallBack />}/>
						<Route path='/' element={<SignIn/>}/>
					</Routes>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
