import React from 'react';

const Choice = ({choice, onSelectChoice}) => {

	const onClickHandler = (event) => {
		onSelectChoice(event.target.textContent);
	}

	return (
		<div onClick={onClickHandler}>{choice}</div>
	)
}

export default Choice;