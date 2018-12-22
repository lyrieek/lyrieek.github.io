const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.default = function(config) {
	['color', 'font-icon', 'gitmoji', 'image-tool'].map((fileName) =>
		config.plugins.push(
			new HtmlWebpackPlugin({
				filename: '../'+fileName + '.html',
				template: 'src/demo/'+fileName + '.html',
				inject: true,
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					minifyCSS: true,
					minifyJS: true
				},
				chunks: [],
				chunksSortMode: 'dependency'
			})
		));
}
