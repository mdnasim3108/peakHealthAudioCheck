import AnswerContext from "./answerContext"
import { useState } from "react"
const AnswerContextProvider=(props)=>{

    const [score,setScore]=useState(0);
    const answerState={
        update:()=>setScore((prev)=>prev+1),
        score:score,
    }
    return (
        <AnswerContext.Provider value={answerState}>
            {props.children}
        </AnswerContext.Provider>
    )
}
export default AnswerContextProvider;