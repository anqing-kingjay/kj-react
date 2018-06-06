const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
	devtool: 'source-map',
	output: {
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"less-loader"
				]
			}
		]
	},
	//4.0配置
	optimization: {
		runtimeChunk: {
				name: "manifest"
		},
		splitChunks: {
			 cacheGroups: {
				 vendor: {
					 test: /[\\/]node_modules[\\/]/,
					 name: "vendors",
					 priority: -20,
					 chunks: "all"
				 }
			 }
		 }
 	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
		    filename: "css/[name].[hash:7].css",
		 }),
		new OptimizeCssAssetsPlugin({
	      assetNameRegExp: /\.optimize\.css$/g,
	      cssProcessor: require('cssnano'),
	      cssProcessorOptions: { discardComments: { removeAll: true } },
	      canPrint: true
		}),
		new UglifyJSPlugin({sourceMap: true}),
		new webpack.DefinePlugin({
			'process/env.NODE_ENV' : JSON.stringify('production')
		})
	]
})