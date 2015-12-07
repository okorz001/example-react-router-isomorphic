import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RoutingContext } from 'react-router'

import routes from './app.jsx'

const server = express()

server.use('/public', express.static('build'))

// Use RoutingContext instead on server
const createRouter = React.createFactory(RoutingContext)

server.use((req, res, next) => {
  match({routes, location: req.url}, (err, redirect, props) => {
    const body = ReactDOM.renderToString(createRouter(props))

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
      <section id="app">${body}</section>
      <script src="public/client.js"></script>
    </body>
    </html>
    `

    res.set('Content-Type', 'text/html; charset=utf-8')
    res.send(html)
  })
})

const port = process.env.PORT || 3000
server.listen(port)
console.log('Listening on port ' + port)
