import React from 'react';
import {useLocation} from "react-router-dom";

const MyPage = () => {
	const location = useLocation();
	console.log(location);
	return(
		<>
			<h1>MyPage</h1>
			<p>{`Hello ${'daun'}`}</p>
		</>
	)

}

export default MyPage;