'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const { VueLoaderPlugin } = require('vue-loader')


const createLintingRule = () => ({
	test: /\.(js|vue)$/,
	loader: 'eslint-loader',
	enforce: 'pre',
	include: [utils.resolve('src'), utils.resolve('test')],
	options: {
		formatter: require('eslint-friendly-formatter'),
		emitWarning: !config.dev.showEslintErrorsInOverlay
	}
})

const sourceMapEnabled = process.env.NODE_ENV === 'production'
	? config.build.productionSourceMap
	: config.dev.cssSourceMap

module.exports = {
	mode: process.env.NODE_ENV,
	context: path.resolve(__dirname, '../'),
	entry: {
		app: './src/main.js',
		vue: ['vue']
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].min.js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js',
			'@': utils.resolve('src')
		}
	},
	module: {
		rules: [
			...(config.dev.useEslint ? [createLintingRule()] : []), {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: utils.cssLoaders({
						sourceMap: sourceMapEnabled,
						extract: process.env.NODE_ENV === 'production'
					}),
					cssSourceMap: sourceMapEnabled,
					cacheBusting: config.dev.cacheBusting,
					transformToRequire: {
						video: ['src', 'poster'],
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					}
				}
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				include: [utils.resolve('src'), utils.resolve('test'), utils.resolve('node_modules/webpack-dev-server/client')]
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			}, {
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
