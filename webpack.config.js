/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const dirName = __dirname;

module.exports = {
	mode: 'development',
	entry: './src/main.tsx',
	output: {
		path: path.resolve(dirName, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx'],
		alias: {
			'@': path.join(dirName, './src'),
			'~': path.join(dirName, './node_modules')
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpe?g|gif|webp|svg)$/,
				loader: 'url-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template/index.html'
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: true,
			reportFilename: 'stat.html'
		})
	],
	devServer: {
		port: 8080,
		hot: true,
		proxy: [
			{
				context: ['/api'],
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false,
			}
		],
		client: {
			overlay: {
				warnings: false
			},
		},
	}
};