import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import App from 'containers/App'

const history = createBrowserHistory()

render(
  <Router history={history}>
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById('root'),
)
