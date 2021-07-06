import { useState } from "react"

export const useQuestions = () => {
    const [questions, setQuestions] = useState({})
    
    return {questions, setQuestions}
}