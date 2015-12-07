import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'

import App from './app.jsx'

const server = express()

server.use('/public', express.static('build'))

const createApp = React.createFactory(App)

server.use((req, res, next) => {
  const body = ReactDOM.renderToString(createApp())

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

const port = process.env.PORT || 3000
server.listen(port)
console.log('Listening on port ' + port)
