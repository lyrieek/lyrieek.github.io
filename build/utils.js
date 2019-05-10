'use strict'
const path = require('path')
const config = require('../config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

//从项目根目录获取文件
exports.resolve = function(dir) {
	if (!dir) {
		return path.join(__dirname, '..');
	}
	return path.join(__dirname, '..', dir)
}

exports.assetsPath = function(_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory

	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
	options = options || {}

	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	const postcssLoader = {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions) {
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		if (process.env.NODE_ENV !== 'production') {
			return ['vue-style-loader'].concat(loaders)
		} else {
			// https://github.com/webpack-contrib/mini-css-extract-plugin/issues/126
			// return [MiniCssExtractPlugin.loader].concat(loaders)
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', {
			indentedSyntax: true
		}),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
	const output = []
	const loaders = exports.cssLoaders(options)

	for (const extension in loaders) {
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loaders[extension]
		})
	}

	return output
}

exports.createNotifierCallback = () => {
	const notifier = require('node-notifier')

	return (severity, errors) => {
		if (severity !== 'error') return

		const error = errors[0]
		const filename = error.file && error.file.split('!').pop()

		notifier.notify({
			title: packageConfig.name,
			message: severity + ': ' + error.name,
			subtitle: filename || '',
			icon: path.join(__dirname, 'logo.png')
		})
	}
}
