const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
	entry: path.join(__dirname, '../src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '...']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader'
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'public/robots.txt', to: 'robots.txt' }],
		})
	]
};

module.exports = config;