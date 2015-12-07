import express from 'express'

//import App from './app.jsx'

const server = express()

server.use('/public', express.static('build'))

const html = `
<html>
<head>
</head>
<body>
  <div id="app"></div>
  <script src="public/client.js"></script>
</body>
</html>
`

server.use((req, res, next) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.write('<!DOCTYPE html>')
  res.write(html)
  res.end()
})

const port = process.env.PORT || 3000
server.listen(port)
console.log('Listening on port ' + port)
