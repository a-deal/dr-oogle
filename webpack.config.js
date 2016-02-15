var path = require('path');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:8080','./client/index.js'],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [ 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader!cssnext-loader' ),
      },
    ],
  }

};
