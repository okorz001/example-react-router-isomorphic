import createBrowserHistory from 'history/lib/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'

import routes from './routes.jsx'

const createRouter = React.createFactory(Router)
const history = createBrowserHistory()

ReactDOM.render(createRouter({history, routes}), document.getElementById('app'))
