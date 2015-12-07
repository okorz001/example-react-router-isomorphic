import createBrowserHistory from 'history/lib/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.jsx'

const createApp = React.createFactory(App)
const history = createBrowserHistory()

ReactDOM.render(createApp({history}), document.getElementById('app'))
