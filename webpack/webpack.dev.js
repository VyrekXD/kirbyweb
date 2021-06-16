const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'app.js',
	},
	devServer: {
		open: true,
		port: 5000,
		contentBase: path.join(__dirname, './build'),
		historyApiFallback: true,
		publicPath: '/',
	},
	devtool: 'eval-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'app.css',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true
		}),
	]
});