const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'js/[name].[hash:7].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: process.env.NODE_ENV === 'production'? "./": "/"
	},
	resolve: {
		extensions: ['.js', '.jsx','.json'],
		alias: {
			// src: path.resolve(__dirname, 'src')
			src: resolve('src')
		}
	},
	// //4.0配置
	// optimization: {
	//    runtimeChunk: {
	//        name: "manifest"
	//    },
	//    splitChunks: {
	//       cacheGroups: {
	//         vendor: {
	//           test: /[\\/]node_modules[\\/]/,
	//           name: "vendors",
	//           priority: -20,
	//           chunks: "all"
	//         }
	//       }
  //     }
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/index.html'), // 以template.html作为模板文件生成html
			// favicon: './src/favicon.ico'
			// title: 'Production'
		}),
		// new MiniCssExtractPlugin({
		//     filename: "css/[name].[hash:7].css",
		//  }),
		// new OptimizeCssAssetsPlugin({
	  //     assetNameRegExp: /\.optimize\.css$/g,
	  //     cssProcessor: require('cssnano'),
	  //     cssProcessorOptions: { discardComments: { removeAll: true } },
	  //     canPrint: true
		// })

	],
	module: {
	    rules: [
	     {
		      test:/\.(js|jsx)$/,
		      loader: "babel-loader",
		      exclude:/node_modules/
	      },
	      // {
	      //   test: /\.css$/,
	      //   use: [
	      //     'style-loader',
	      //     // MiniCssExtractPlugin.loader,
	      //     "css-loader",
	      //     "postcss-loader"
	      //   ]
				// },
	      {
	      	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        use: {
		        loader: 'url-loader',
		        options: {
		        	limit: 10000,
		        	name: 'images/[name].[hash:7].[ext]',
		        	publicPath: '/'
		        }
	        }
	      },
	      {
	        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: {
  	        loader: 'url-loader',
  	        options: {
  	        	limit: 10000,
  	        	name: 'media/[name].[hash:7].[ext]',
  	        	publicPath: '/'
  	        }
          }
	      },
	      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	        use: {
		        loader: 'url-loader',
		        options: {
		        	limit: 10000,
		        	name: 'fonts/[name].[hash:7].[ext]',
		        	publicPath: '/'
		        }
	        }
	      },
	      {
	        test: /\.html$/,
	        loader: 'html-loader'
	      },
	      {
	        test: /\.(csv|tsv)$/,
	        use: [
	          'csv-loader'
	        ]
	      },
	      {
	        test: /\.xml$/,
	        use: [
	          'xml-loader'
	        ]
	      }
	    ]
  }
}