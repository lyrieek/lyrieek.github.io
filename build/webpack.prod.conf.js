'use strict'
const webpack = require('webpack')
const utils = require('./utils')
const config = require('./config')
const special = require('./special.js')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackConfig = merge(baseConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			usePostCSS: true
		}).concat({
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader'
			]
		})
	},
	devtool: config.build.productionSourceMap ? config.build.devtool : false,
	output: {
		path: config.build.assetsRoot,
		filename: (chunkData) => chunkData.chunk.name === 'vue-bucket'
			? utils.assetsPath('js/vue-bucket/[name].[contenthash].js') : utils.assetsPath('js/[name].[contenthash].js'),
		chunkFilename: utils.assetsPath('js/[name].[contenthash].js')
	},
	optimization: {
		runtimeChunk: {
			name: "runtime"
		},
		splitChunks: {
			chunks: "all",
			// name(module, chunks, cacheGroupKey) {
			// 	return module + chunks + cacheGroupKey;
			// },
			minSize: 102400,
			maxSize: 0,
			name: true, //false
			automaticNameDelimiter: '-'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("'production'")
			}
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false
				}
			},
			sourceMap: config.build.productionSourceMap,
			parallel: true
		}),
		new MiniCssExtractPlugin({
			filename: utils.assetsPath('css/[name][[contenthash]].css')
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }]
			},
			canPrint: true
		}),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'src/index.html',
			inject: true,
			title: "Lyrieek",
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				minifyCSS: true,
				minifyJS: true
			},
			chunksSortMode: 'dependency'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new CleanWebpackPlugin(utils.resolve('dist'), {
			root: utils.resolve()
		})
	]
});

special.default(webpackConfig);

if (config.build.productionGzip) {
	const CompressionWebpackPlugin = require('compression-webpack-plugin')

	webpackConfig.plugins.push(
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp(
				'\\.(' + config.build.productionGzipExtensions.join('|') + ')$'
			),
			threshold: 10240,
			minRatio: 0.8
		})
	)
}

if (config.build.bundleAnalyzerReport) {
	const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
	webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
