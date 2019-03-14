const express = require('express')
const server = express()
const pages = require('./routes/pages')
const port = 3000



server.use('/public',express.static('public'))
server.use('/static',express.static('static'))
server.get('/', pages.home)


server.listen(3000, function () {
  console.log('> Started server on port 3000...')
})