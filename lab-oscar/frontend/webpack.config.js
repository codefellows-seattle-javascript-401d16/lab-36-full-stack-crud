'use strict';

//load environment
require('dotevn').config();

const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const {DefinePlugin, EnvironmentPlugin} = require('webpack');

//boolean that equals true if NODE_ENV === 'production'
const production = process.env.NODE_ENV === 'production';

//default plugins
let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
]

//production plugins
if(production){
  plugins = plugins.concat([
    new CleanPlugin(),
    new UglifyPlugin(),
  ]);
}

//export configuration file
module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,
  },
  //force webpack-dev-server to support single page apps
  //making it server index.html when it can't find a filename
  //for the route
  devServer: {historyApiFallback: true},
  devtool: production ? undefined : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader', //works like cp (terminal command)
            options: {
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}
