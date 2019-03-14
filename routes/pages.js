const path = require('path')

const home = (req, res) => {
  res.sendFile(path.resolve('./index.html'))
}



module.exports = {
  home,
}