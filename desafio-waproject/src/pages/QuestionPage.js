import { useQuestions } from "../constants/useQuestions";
import Question from '../components/Question.js'

export default function QuestionPage() {
    const {questions} = useQuestions()
    console.log('pg questões',questions)
    return(
        <>
        Questão
        {/* {questions &&
        questions.map((question)=> {
           return <Question data={question} />
        })} */}
        </>
    )
}

