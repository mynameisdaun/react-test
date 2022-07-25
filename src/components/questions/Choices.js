import React from 'react';
import Choice from "./Choice";

const Choices = ({choices}) => {
	return (
		<>
			{choices.map((choice, index) => <Choice key={choice+index} choice={choice}/>)}
		</>
	)
}

export default Choices;