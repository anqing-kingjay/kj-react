const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					"css-loader",
					"postcss-loader",
					'less-loader'
				]
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		compress: true,
		hot: true,
		historyApiFallback: true,
		port: 8086,
		proxy: {
			// '/manage':{
			// 	target: 'http://admintest.happymmall.com',
			// 	changeOrigin: true
			// },
			// '/user/logout.do' : {
			// 	target: 'http://admintest.happymmall.com',
			// 	changeOrigin: true
			// }
		}
	},
	plugins: [
		// //此处关掉这个插件，不然css的热加载功能将失效
	  	new ExtractTextPlugin({disable: true}),
	  	new webpack.NamedModulesPlugin(),
	  	new webpack.HotModuleReplacementPlugin(),
	],
})
