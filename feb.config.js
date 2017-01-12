module.exports = {
  project: {
    debug: true
  },
  webpack: {
    module: {
      loaders: [
        { test: /\.rgl$/, loader: 'rgl' }
      ]
    },
    externals: {
      'jquery': "jQuery",
      'regular': "Regular"
    },
    provide: {
      '$': 'jquery'
    }
  }
};