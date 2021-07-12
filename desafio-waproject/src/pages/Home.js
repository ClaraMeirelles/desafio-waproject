import { useHistory } from "react-router-dom"

export default function Home() {
    const history = useHistory()
    const selectPages = (path) => {
        history.push(path)
    }
    return (
        <>
            <h1>Welcome to open tests</h1>
            <button
                onClick={() => selectPages('/test')}>
                Select test
            </button>
            <button
                onClick={() => selectPages('/results')}>
                View results
            </button>
        </>
    )
}
