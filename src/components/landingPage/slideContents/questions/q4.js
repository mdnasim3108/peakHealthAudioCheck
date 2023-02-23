import "../../landinPage.css"
import { useState,useContext } from "react";
import answerContext from "../../contextStrore/answerContext";
const Q4=(props)=>{
  const [optionStatus,setOptionStatus]=useState({})
  const answerState=useContext(answerContext)
  const answerClickHandler=(e)=>{
    setOptionStatus({[e.target.id]:true}
    )
    props.onclick(e.target.id)
}
    const options = [
        { id: "q4a", label: "A", option: "copper" },
        { id: "q4b", label: "B", option: "magnesium" },
        { id: "q4c", label: "C", option: "iron" },
        { id: "q4d", label: "D", option: "calcium" },
      ];
    return (
        <div className="mt-5 questions relative">
        <h1 className="text-left text-2xl">Chlorophyll is a naturally occurring chelate compound in which central metal is</h1>
        <div
        id="q4A"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q4A ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">A</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q4A ? "text-white" : ""
            }`}
          >
            Oxygen
          </p>
        </div>
        <div
        id="q4B"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
             optionStatus.q4B ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">B</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q4B ? "text-white" : ""
            }`}
          >
            Carbon Di oXide
          </p>
        </div>
        <div
        id="q4C"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q4C ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">C</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q4C ? "text-white" : ""
            }`}
          >
            Hydrogen Disulphide
          </p>
        </div>
        <div
        id="q4D"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q4D ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">D</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q4D ? "text-white" : ""
            }`}
          >
            Benzene
          </p>
        </div>
    </div>
    )
}
export default Q4;