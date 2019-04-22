const express = require('express')
const server = express()
const env = require('dotenv')
const pages = require('./routes/pages')

env.config()

const blogPostsRouter = express.Router()
blogPostsRouter.route('/').get(pages.blogPosts)
blogPostsRouter.route('/:postname').get(pages.blogPosts)


server.use('/public',express.static('public'))
server.use('/static',express.static('static'))

server.get('/', pages.home)
server.get('/about', pages.about)
server.use('/posts',blogPostsRouter)

const port = process.env.PORT || 3000
server.listen(port, function () {
  console.log(`> Started server on port ${port}...`)
})