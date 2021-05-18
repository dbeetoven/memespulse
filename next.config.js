const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
cssModules: true
})
module.exports = {
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}

module.exports = {
    future: {
      webpack5: true,
    },
    webpack: function (config, options) {
      config.experiments = {};
      return config;
    },
  };
