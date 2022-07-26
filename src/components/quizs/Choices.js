import React, {Fragment} from 'react';
import Choice from "./Choice";

const Choices = ({choices, onSelectChoice, qType}) => {
	return (
		<>
			{choices.map((choice) => <Choice key={choice.wordId} choice={choice} onSelectChoice={onSelectChoice} qType={qType}/>)}
		</>
	)
}

export default Choices;