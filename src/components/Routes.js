import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Intro from './Intro'
import Quiz from './Quiz'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/quiz' component={Quiz} />
        <Route path='/' component={Intro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes