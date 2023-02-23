import { useState } from "react";
const QuizOptions = (props) => {
    const [selected,setSelected]=useState(false)
    const answerClickHandler=()=>{
        setSelected((prev)=>!prev)
    }
  return (
    <div
     className={`w-full border-2 rounded-full flex p-3 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${selected?"bg-violet-400":""}`}
     onClick={answerClickHandler}
     >
      <div class="w-[18px] h-[18px] p-[1rem] bg-green-300 rounded-full flex items-center justify-center mr-4">
        <h1 className="font-bold text-lg text-white">{props.label}</h1>
      </div>
      <p className={`font-sans tracking-wide text-lg ${selected?"text-white":""}`}>{props.option}</p>
    </div>
  );
};
export default QuizOptions;
