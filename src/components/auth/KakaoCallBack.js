import React, {useEffect} from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const KakaoCallBack = () => {
	const location = useLocation();
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const code = searchParams.get("code")
	console.log(location);
	console.log(params);

	useEffect( async () => {
		console.log(code);
		await fetch("http://localhost:8080/oauth/kakao/sign-in?code="+code);
		/*sign in*/
	}, []);
}

export default KakaoCallBack;