import QuizOptions from "../quizOptions";
import { useState,useContext } from "react";
import answerContext from "../../contextStrore/answerContext";
const Q2=(props)=>{
  const [optionStatus,setOptionStatus]=useState({})
  const answerState=useContext(answerContext)
  const answerClickHandler=(e)=>{
    setOptionStatus({[e.target.id]:true}
    )
    props.onclick(e.target.id)
    
}
    const options = [
        { id: "q3a", label: "A", option: "Oxygen" },
        { id: "q3b", label: "B", option: "Carbon diOxide" },
        { id: "q3c", label: "C", option: "Hydrogen sulphide" },
        { id: "q3d", label: "D", option: "cNitrogen" },
      ];
    return (
        <div className="mt-5 questions relative">
        <h1 className="text-left text-2xl">Brass gets discoloured in air because of the presence of which of the following gases in air?</h1>
        <div
        id="q2A"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q2A ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">A</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q2A ? "text-white" : ""
            }`}
          >
            Oxygen
          </p>
        </div>
        <div
        id="q2B"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
             optionStatus.q2B ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">B</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q2B ? "text-white" : ""
            }`}
          >
            Carbon Di oXide
          </p>
        </div>
        <div
        id="q2C"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q2C ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">C</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q2C ? "text-white" : ""
            }`}
          >
            Hydrogen Disulphide
          </p>
        </div>
        <div
        id="q2D"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q2D ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">D</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q2D ? "text-white" : ""
            }`}
          >
            Benzene
          </p>
        </div>
    </div>
    )
}
export default Q2;