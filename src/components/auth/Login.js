import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';

const Login = () => {
	const [enteredId, setEnteredId] = useState('');
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		navigate(`/${enteredId}`)
	}

	const changeHandler = (event) => {
		setEnteredId(event.target.value);
	}
	return (
		<>
			<form onSubmit={submitHandler}>
				<label htmlFor="id">ID</label>
				<input id='id' type='text' value={enteredId} onChange={changeHandler}/>
				<Button type='submit' variant='contained'>문제 풀러 가기!</Button>
			</form>
		</>
	)
}

export default Login;