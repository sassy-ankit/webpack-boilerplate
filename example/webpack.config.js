var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractTextPlugin({
	filename: 'style.css'
});

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			},
			{
				test: /\.sass$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [extractPlugin]
};
