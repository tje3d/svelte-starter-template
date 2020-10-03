const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sveltePreprocess = require('svelte-preprocess')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
const dev = !prod

module.exports = {
	entry: {
		bundle: ['./src/main.ts'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
			src: path.resolve(__dirname, 'src'),
		},
		extensions: ['.mjs', '.js', '.svelte', '.ts'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: '[hash].js',
		chunkFilename: '[hash].[id].js',
		globalObject: 'this',
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader-hot',
					options: {
						dev,
						hotReload: true,
						hotOptions: {
							// whether to preserve local state (i.e. any `let` variable) or
							// only public props (i.e. `export let ...`)
							noPreserveState: false,
							// optimistic will try to recover from runtime errors happening
							// during component init. This goes funky when your components are
							// not pure enough.
							optimistic: true,

							// See docs of svelte-loader-hot for all available options:
							//
							// https://github.com/rixo/svelte-loader-hot#usage
						},

						preprocess: sveltePreprocess({
							typescript: {
								transpileOnly: true,
								tsconfigFile: './tsconfig.json',
							},
						}),
					},
				},
			},

			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
				],
			},

			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},

			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					// prod ? MiniCssExtractPlugin.loader : 'style-loader',
					MiniCssExtractPlugin.loader,
					// 'postcss-loader',
					'css-loader',
				],
			},

			{
				test: /\.styl$/,
				use: [
					MiniCssExtractPlugin.loader,
					// prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'postcss-loader',
					'stylus-loader',
				],
			},

			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[hash].[ext]',
							esModule: false,
						},
					},
				],
			},

			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[hash].[ext]',
							esModule: false,
						},
					},
				],
			},

			{
				test: /\.svg$/,
				loader: 'svg-inline-loader?classPrefix',
			},
		],
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[hash].css',
		}),

		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'assets', 'public', 'index.html'),
		}),
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		hot: true,
		overlay: true,
		port: 8080,
		host: '0.0.0.0',
		disableHostCheck: true,
		https: true,
		historyApiFallback: true,
	},
}
