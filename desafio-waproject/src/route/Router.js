import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import TestPage from '../pages/TestPage'
import QuestionPage from '../pages/QuestionPage.js'
// import ResultsPage from '../pages/ResultsPage'
export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} >
                    <Home />
                </Route>
                <Route exact path={'/test'} >
                    <TestPage />
                </Route>
                <Route exact path={'/question/:number'} >
                    <QuestionPage />
                </Route>
                {/* <Route exact path={'/results'} >
                    <ResultsPage />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}