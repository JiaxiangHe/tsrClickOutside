// Note: defined here because it will be used more than once.
var shouldUseRelativeAssetPaths = './';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const uiPath = '/build/';
const cssFilename = 'css/[name].css';

const entryPath = './'

const htmlPara = {
	removeComments: true,
	collapseWhitespace: true,
	removeRedundantAttributes: true,
	useShortDoctype: true,
	removeEmptyAttributes: true,
	removeStyleLinkTypeAttributes: true,
	keepClosingSlash: true,
	minifyJS: false,
	minifyCSS: false,
	minifyURLs: true
};

module.exports = {
    bail: true,
	entry: {
		demo: entryPath + "demo/src/index"
    },
    output: {
        filename: "[name].bundle.js",
		path: __dirname + '/demo/'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
			{
				test: /\.(less|css)$/i,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
			        use: ['css-loader', 'less-loader']
				})
			},
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: entryPath + 'demo/index.html',
			filename:'index.html',
			pagetitle:'ClickOutsideTest',
			minify: htmlPara,
			chunks: ['demo']
		}),
    	new webpack.LoaderOptionsPlugin({
				options: {
					postcss: function () {
					return [precss, autoprefixer];
				}
	    	}
  		}),
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new ExtractTextPlugin(cssFilename),
	    new ManifestPlugin({
	      fileName: 'asset-manifest.json'
	    })
	],
    watch:true,
};