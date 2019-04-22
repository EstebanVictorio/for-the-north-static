const path = require('path')

const home = (req, res) => {
  res.sendFile(path.resolve('./pages/index.html'))
}

const about = (req,res) => {
  res.sendFile(path.resolve('./pages/about.html'))
}

const blogPosts = (req,res) => {
  const { params } = req
  const { postname } = params
  res.sendFile(postname ? path.resolve(`./pages/posts/${postname}.html`) : 
  path.resolve('./pages/posts.html'))
}




module.exports = {
  home,
  about,
  blogPosts,
}