import './App.css';
import Questions from "./components/questions/Quesetions";
const questions = [
	{
		word: 'justify',
		choices: [
			'정당화하다',
			'그냥하다',
			'정확하다'
		],
		answer:'정당화하다'
	},
	{
		word: 'haste',
		choices: [
			'서두름,급함',
			'싫어함',
			'빠른'
		],
		answer:'서두름,급함'
	}
];

function App() {
  return (
    <div className="App">
	    <Questions questions={questions}/>
    </div>
  );
}

export default App;
