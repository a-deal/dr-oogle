var path = require('path');
var webpack = require('webpack');
var mainPath =  path.resolve(__dirname, 'client', 'index.js');

module.exports = {
	devtool: 'source-map',
	entry: mainPath,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/,
				loader: 'babel',
				// include: path.join(__dirname, 'src'),
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{ test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
}
