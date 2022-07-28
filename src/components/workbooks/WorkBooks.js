import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const WorkBooks = () => {

	useEffect(() => {
		//TODO: 서버에서 저장된 유저의 문제집 불러오기
		//TODO: Loading Spinner 추가하기
	}, []);

	return (
		<>
			<p>문제집 선택하기</p>
			<Link to='/quizs' state={null}>문제 풀러가기</Link>
		</>
	)
}

export default WorkBooks;