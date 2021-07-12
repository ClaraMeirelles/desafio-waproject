import { useHistory } from "react-router-dom"
import { useForm } from "../constants/useForm"
import { useQuestions } from '../constants/useQuestions.js'
import axios from "axios"
import Question from "../components/Question"

export default function TestPage() {

    const { form, onChange, clearInputs } = useForm({ amount: '', difficulty: '' })
    const { questions, setQuestions } = useQuestions()
    const history = useHistory()

    const submitForm = (e) => {
        e.preventDefault()
        axios.get(`https://opentdb.com/api.php?amount=${form.amount}&difficulty=${form.difficulty}`)
            .then((res) => {
                setQuestions(res.data.results)
                // history.push(`/question/1-${res.data.results.length+1}`)
            })

    }
    console.log('questões testPage', questions)
    return (
        <>
        <form onSubmit={submitForm}>
            <select name='difficulty' value={form.difficulty} onChange={onChange}>
                <option>Select your test difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <input name='amount' type='number' placeholder={'Choose the number of questions on your test'} onChange={onChange} required />
        </form>
         {questions.length>0 &&
        questions.map((question)=> {
           return <Question data={question} />
        })}
        </>
    )
}