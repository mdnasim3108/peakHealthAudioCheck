import './App.css';
import AnswerContextProvider from './components/landingPage/contextStrore/answerContextProvider';
import LandingPage from './components/landingPage/landingPage';
function App() {
  return (
    <AnswerContextProvider>
    <div className="App h-[100vh]">
        <LandingPage/>
    </div>
    </AnswerContextProvider>
  );
}

export default App;
