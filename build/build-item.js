const webpack = require('webpack')
const path = require('path')
const special = require('./special.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js'
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false
				}
			},
			sourceMap: true,
			parallel: true
		})
	]
};

special.default(webpackConfig);

webpack(webpackConfig, (err, stats) => {
	if (err) throw err

	console.log(('Build complete.\n'))
	console.log(('Build Finish!'))
})
