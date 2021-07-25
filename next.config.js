const path = require('path');

module.exports = {
  future: { webpack5: false },
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};
