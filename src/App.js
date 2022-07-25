import './App.css';
import Questions from "./components/questions/Quesetions";
import questions from "./dummyData";

function App() {
  return (
    <div className="App">
	    <Questions questions={questions}/>
    </div>
  );
}

export default App;
