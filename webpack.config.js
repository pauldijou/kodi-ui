var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#cheap-eval-source-map',

  entry: [
    'webpack/hot/dev-server',
    './scripts/app'
  ],

  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  devServer: {
    hot: true,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      // { test: /\.js$/, loaders: ['imports?define=>false'] },
      { test: /\.js$/, include: [path.resolve(__dirname, 'scripts')], loaders: ['react-hot', 'babel-loader?stage=0'] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
    ]
  }
};
