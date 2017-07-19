const path = require("path");

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './src'),
  devtool: 'inline-source-map',
  entry: {
    index: "./renderer/renderer.ts"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.html', '.js', '.vue', '.ts']
  },
  module: {
    rules:[{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude:["node_modules/*"]
    },
    {
      test: /\.ts$/,
      loaders: [
        'ts-loader',
        'babel-loader',
      ],
      exclude: ["node_modules/*"]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    },
    {
      test: /\.html$/,
      loader: "html-loader",
      exclude:["node_modules/*"]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({template: '../index.html'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};