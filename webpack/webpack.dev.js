const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const common = require('./webpack.config.js')

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].js',
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
			filename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new CleanWebpackPlugin({ dry: true, verbose: true }),
	],
	optimization: {
		minimize: false,
	}
})