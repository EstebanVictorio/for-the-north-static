const express = require('express')
const server = express()
const port = 3000



server.use('/for-the-north-static/public',express.static('public'))
server.use('/for-the-north-static/static',express.static('static'))
server.use('/for-the-north-static/pages',express.static('pages'))


server.listen(3000, function () {
  console.log('> I love you 3000...')
}) 