module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080', './client/index.js'],

  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  }

};
