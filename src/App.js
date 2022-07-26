import './App.css';
import Questions from "./components/quizs/Quizs";
import questions, {answers} from "./dummyData";
import Results from "./components/results/Results";

function App() {
  return (
    <div className="App">
	    <Questions questions={questions}/>
	    <Results questions={questions} answers={answers}/>
    </div>
  );
}

export default App;
