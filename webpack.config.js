var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: "app/main.js",
	output: {
		path: __dirname + "/dist",
		// libraryTarget: 'var',
		// library: "RTChat_LiarsDice",
		filename: "bundle.js"
	},
	resolve: { alias: {
		app: __dirname + '/app',
		views: 'app/views',
		utils: 'app/utils',
		styles: 'app/styles',
	} },
	externals: {
		// Use the jquery from RTChat so it's has bootstrap, etc.
		'jquery': "RTChat.jQuery",
		'rivets': "RTChat.Rivets",
	},
	plugins: [
		new webpack.ProvidePlugin({
			// These become available to all files.
			$: "jquery",
			_: "underscore",
			Rivets: "rivets",
		}),
	],
	module: {
		loaders: [
			{ test:  /\.json$/, loader: "hson" },
			{ test:  /\.s?css$/, loaders: ["style", "css?sourceMap", "sass"] },
			{ // ES6 support.
				test:  /\.js$/,
				loader: "babel",
				exclude: /node_modules/,
				query: { presets: ['es2015'] }
			},
		],
		preLoaders: [
			{ test: /\.js$/, loader: 'jshint', exclude: /node_modules/ },
		]
	},
	jshint: {
		esversion: 6,
	},
	devtool: 'source-map',
};

if (process.argv.indexOf('--minify') >= 0) {
	var CompressionPlugin = require("compression-webpack-plugin");

	module.exports.plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {warnings: false}
		}),
		new CompressionPlugin({
			test: /\.js$/,
			algorithm: "gzip",
			asset: "[path].gz[query]"
		})
	]);
}
