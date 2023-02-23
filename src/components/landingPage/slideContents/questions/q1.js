import "../../landinPage.css"
import { useState,useContext } from "react";
import answerContext from "../../contextStrore/answerContext";
const Q1=(props)=>{
  const answerState=useContext(answerContext)
  const [optionStatus,setOptionStatus]=useState({})
  const answerClickHandler=(e)=>{
    setOptionStatus({[e.target.id]:true}
    )
    props.onclick(e.target.id)
  
}
    const options = [
        { id: "q2a", label: "A", option: "India" },
        { id: "q2b", label: "B", option: "Brazil" },
        { id: "q2c", label: "C", option: "hongKong" },
        { id: "q2d", label: "D", option: "china" },
      ];
    return (
        <div className="mt-5 questions relative">
        <h1 className="text-left text-2xl">What country has the highest life expectancy?</h1>
        <div
        id="q1A"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q1A ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">A</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q1A ? "text-white" : ""
            }`}
          >
            India
          </p>
        </div>
        <div
        id="q1B"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
             optionStatus.q1B ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">B</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q1B ? "text-white" : ""
            }`}
          >
            Brazil
          </p>
        </div>
        <div
        id="q1C"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q1C ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">C</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q1C ? "text-white" : ""
            }`}
          >
            HongKong
          </p>
        </div>
        <div
        id="q1D"
          className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
            optionStatus.q1D ? "bg-violet-400" : ""
          }`}
          onClick={answerClickHandler}
        >
          <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
            <h1 className="font-bold text-lg text-white">D</h1>
          </div>
          <p
            className={`font-sans tracking-wide text-lg ${
              optionStatus.q1D ? "text-white" : ""
            }`}
          >
            China
          </p>
        </div>
    </div>
    )
}
export default Q1;