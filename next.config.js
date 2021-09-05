const path = require('path')

module.exports = {
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}
