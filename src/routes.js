import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Index from './client/app/index.jsx'
import Anahera from './client/app/Anahera.jsx'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}></Route>
    <Route path="anahera" component={Anahera}></Route>
  </Router>
)
