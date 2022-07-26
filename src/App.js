import './App.css';
import Quizs from "./components/quizs/Quizs";
import DUMMY_QUIZS from "./dummyData";
import Results from "./components/results/Results";
import {Route, Routes} from "react-router-dom";
import WorkBooks from "./components/workbooks/WorkBooks";

function App() {
  return (
    <div className="App">
	    <Routes>
		    <Route path='/results' element={<Results />}/>
		    <Route path='/' element={<Quizs quizs={DUMMY_QUIZS}/>}/>
		    <Route path='/ㄴㄴ' element={<WorkBooks />}/>
	    </Routes>
    </div>
  );
}

export default App;
