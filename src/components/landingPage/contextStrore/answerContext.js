import React from "react"
const answerContext=React.createContext({
    score:0,
    updateScore:()=>{}
})
export default answerContext;