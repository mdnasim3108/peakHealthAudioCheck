import QuizOptions from "../quizOptions";
import "../../landinPage.css";
import { useState,useContext } from "react";
import answerContext from "../../contextStrore/answerContext";
const Q5 = (props) => {
  const answerState=useContext(answerContext)
    const answerClickHandler=(e)=>{
        setOptionStatus({[e.target.id]:true}
        )
        props.onclick(e.target.id)

    }
  const options = [
    { id: "q1a", label: "A", option: "Graphite" },
    { id: "q1b", label: "B", option: "Silicon" },
    { id: "q1c", label: "C", option: "Charcoal" },
    { id: "q1d", label: "D", option: "Phosphorous" },
  ];
  const [optionStatus,setOptionStatus]=useState({})
  return (
    <div className="mt-5 questions relative">
      <h1 className="text-left text-2xl">
        Which of the following is used in pencils?
      </h1>
        <div
        id="q5A"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q5A ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">A</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
                optionStatus.q5A ? "text-white" : ""
            }`}
          >
            Graphite
          </p>
        </div>
        <div
        id="q5B"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q5B ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">B</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
                optionStatus.q5B ? "text-white" : ""
            }`}
          >
            Silicon
          </p>
        </div>
        <div
        id="q5C"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q5C ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">C</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
                optionStatus.q5C ? "text-white" : ""
            }`}
          >
            Charcoal
          </p>
        </div>
        <div
        id="q5D"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q5D ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">D</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
                optionStatus.q5D ? "text-white" : ""
            }`}
          >
            Phosphorous
          </p>
        </div>
    </div>
  );
};
export default Q5;
