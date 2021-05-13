// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: "style-loader";

const config = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "../server/static"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template/index.html",
			filename: "../templates/index.html",
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "babel-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		plugins: [new TsconfigPathsPlugin()],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};
