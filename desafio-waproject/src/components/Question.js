import { useEffect, useState } from "react"


export default function Question(props) {
    const [answers, setAnswers] = useState()

    useEffect(()=> {
        setAnswers([...props.data.incorrect_answers, props.data.correct_answer])
    },[])
return(
    <>
    <h1>{props.data.category}</h1>
    <p>{props.data.question}</p>
    <form>
        {answers.map((answer)=> {
            <li>{answer}</li>
        })}
    </form>
    </>
)
}

// {"category":"Entertainment: Music"
// ,"type":"multiple",
// "difficulty":"easy",
// "question":"Who is the lead singer of Pearl Jam?",
// "correct_answer":"Eddie Vedder",
// "incorrect_answers":["Ozzy Osbourne","Stone Gossard","Kurt Cobain"]}