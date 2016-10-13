'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceMap = process.env.TEST
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })]
  : [ ];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.optimize.CommonsChunkPlugin("vendor"),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: false
  }),
  new webpack.NoErrorsPlugin(),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
    { from: 'src/favicon.ico', to: 'favicon.ico' }
  ]),
].concat(sourceMap);

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
    },
  }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : []);

module.exports = {
  entry: { 
    app: './src/main.ts',
    vendor: [
      'angular',
      'angular-material',
      'angular-animate',
      'angular-aria',
      'angular-messages',
      'angular-sanitize'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  /*  
  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',
  */
  devtool: 'source-map',
    
  resolve: { extensions: ['.ts', '.js'] },
  plugins: plugins,
  
  devServer: {
    historyApiFallback: { index: '/' }
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          tsconfig: path.resolve(__dirname,'src','tsconfig.json')
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      }
    ]
  }
}