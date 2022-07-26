import React, {Fragment} from 'react';
import Choice from "./Choice";

const Choices = ({choices, onSelectChoice}) => {
	return (
		<>
			{choices.map((choice,index) => <Choice key={index} choice={choice} onSelectChoice={onSelectChoice} />)}
		</>
	)
}

export default Choices;