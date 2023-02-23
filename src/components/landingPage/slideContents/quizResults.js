import { useContext } from "react"
import answerContext from "../contextStrore/answerContext"
const QuizResults=()=>{
    const answerState=useContext(answerContext)
    return <div>
        <h1>your score is {answerState.score}</h1>
    </div>
}
export default QuizResults