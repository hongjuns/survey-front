import CardSurvey from './components/CardSurvey';
import SurveyHome from './components/SurveyHome';
import SurveySuccess from './components/SurveySuccess';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SurveyHome />} />
            <Route path="/survey/:key" element={<CardSurvey />} />
            <Route path="/success" element={<SurveySuccess />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
