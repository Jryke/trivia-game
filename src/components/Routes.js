import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Intro from './Intro'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Intro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes