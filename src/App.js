import CardSurvey from './components/CardSurvey';
import SurveyHpme from './components/SurveyHpme';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<SurveyHpme />} />
          <Route path="/survey/:key" element={<CardSurvey />} />
        </Routes>
    </div>
  );
}

export default App;
