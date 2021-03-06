import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Intro from './Intro'
import Quiz from './Quiz'
import Results from './Results'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/quiz' component={Quiz} />
        <Route path='/results' component={Results} />
        <Route path='/' component={Intro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes