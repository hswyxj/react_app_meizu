
import React from 'react'
import {
  BrowserRouter as
    // Router,
    Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from '@/pages/loginPage'
import homePage from '@/pages/homePage'

const BasicRouters = () => {
  return (
      <Switch>
        <Route exact path='/' component={homePage} />
        <Route exact path='/login' component={Login} />
      </Switch>
  )
}

export default BasicRouters;
