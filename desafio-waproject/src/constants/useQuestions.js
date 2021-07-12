import { useState } from "react"

export const useQuestions = () => {
    const [questions, setQuestions] = useState({})
    console.log('questões useQuestion', questions)
    return {questions, setQuestions}
}