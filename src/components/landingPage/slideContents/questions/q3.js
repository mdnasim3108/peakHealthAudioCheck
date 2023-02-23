import "../../landinPage.css"
import { useState,useContext } from "react";
import answerContext from "../../contextStrore/answerContext";
const Q3=(props)=>{
  const [optionStatus,setOptionStatus]=useState({})
  const answerState=useContext(answerContext)
  const answerClickHandler=(e)=>{
    setOptionStatus({[e.target.id]:true}
    )
    props.onclick(e.target.id)

}
    const options = [
        { id: "q4a", label: "A", option: "Phosphorous" },
        { id: "q4b", label: "B", option: "Bromine" },
        { id: "q4c", label: "C", option: "Chlorine" },
        { id: "q4d", label: "D", option: "Helium" },
      ];
    return (
        <div className="mt-5 questions relative">
        <h1 className="text-left text-2xl">Which of the following is a non metal that remains liquid at room temperature?</h1>
        <div
        id="q3A"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q3A ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">A</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q3A ? "text-white" : ""
            }`}
          >
            Chlorine
          </p>
        </div>
        <div
        id="q3B"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
             optionStatus.q3B ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">B</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q3B ? "text-white" : ""
            }`}
          >
            Flourine
          </p>
        </div>
        <div
        id="q3C"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q3C ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">C</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q3C ? "text-white" : ""
            }`}
          >
            Bromine
          </p>
        </div>
        <div
        id="q3D"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q3D ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">D</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q3D ? "text-white" : ""
            }`}
          >
            Benzene
          </p>
        </div>
    </div>
    )
}
export default Q3;