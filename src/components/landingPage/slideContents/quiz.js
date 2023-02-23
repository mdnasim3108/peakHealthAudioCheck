import { useState,useContext } from "react";
import Question1 from "./questions/q1";
import Question2 from "./questions/q2";
import Question3 from "./questions/q3";
import Question4 from "./questions/q4";
import Question5 from "./questions/q5";
import QuizResults from "./quizResults";
import answerContext from "../contextStrore/answerContext";
const Quiz = (props) => {
  const answerState=useContext(answerContext)
  const [isSelected, setIsSelected] = useState(false);
  const answers=["q1A","q2B","q3C","q4D","q5A"]
  const [selected,setSelected]=useState("");
  const [question, setQuestion] = useState(0);
  const selectedHandler = (option) => {
    setIsSelected(true);
    setSelected(option)
  };
  const questions = [
    <Question1 onclick={selectedHandler} />,
    <Question2 onclick={selectedHandler} />,
    <Question3 onclick={selectedHandler} />,
    <Question4 onclick={selectedHandler} />,
    <Question5 onclick={selectedHandler} />,
  ];
  const displayQuestions = 
    <div className="py-10 md:px-5 px-0 md:mt-5">
      <h1 className="font-bold font-sans text-2xl">Check Your burnout score</h1>
      {question < questions.length && questions[question]}
      <div className=" mt-5">
        <span className="text-lg text-gray-500 font-serif">
          {question + 1}/5
        </span>
        <div className="text-right">
          <button
            className={`border-2 rounded-full ${
              isSelected ? "bg-green-500" : "bg-gray-300"
            } px-5 py-2 text-white `}
            disabled={!isSelected}
            onClick={() => {
              if(question===questions.length-1){
                props.move()
                if(answers.includes(selected)) answerState.update()
                console.log(answerState.score)
                return
              } 
              setQuestion((prev) => {
                return prev + 1;
              });
              setIsSelected(false);
              console.log(answerState.score)
            }}
          >
            {question === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  
  
  return question===questions.length?<QuizResults/>:displayQuestions;
};
export default Quiz;
