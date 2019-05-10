'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.dev.cssSourceMap,
			usePostCSS: true
		})
	},
	// cheap-module-eval-source-map is faster for development
	devtool: config.dev.devtool,

	// these devServer options should be customized in /config/index.js
	devServer: {
		clientLogLevel: 'info',
		historyApiFallback: {
			rewrites: [{
				from: /.*/,
				to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
			}]
		},
		hot: true,
		compress: true,
		host: config.dev.host,
		port: config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ? { warnings: true, errors: true } : false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		quiet: true, //Print only startup messages
		watchOptions: {
			poll: config.dev.poll
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			title: 'T-Doc',
			inject: true
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	devWebpackConfig.devServer.port = config.dev.port

	// Add FriendlyErrorsPlugin
	devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
		compilationSuccessInfo: {
			messages: [`Start in here: http://${devWebpackConfig.devServer.host}:${config.dev.port}`]
		},
		onErrors: config.dev.notifyOnErrors
			? utils.createNotifierCallback()
			: undefined
	}))

	resolve(devWebpackConfig)
})
