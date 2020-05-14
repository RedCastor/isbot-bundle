const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: {
    'isbot': ['./node_modules/isbot/index.js'],
  },
  filename: '[name]',
  paths: {
    root: process.cwd(),
    dist: path.resolve(__dirname, 'dist'),
  }
};

module.exports = {
  mode: 'production',
  entry: config.entry,
  output: {
      library: 'isBot',
      libraryTarget: 'umd',
      filename: `${config.filename}.umd.js`,
  path: config.paths.dist,
  publicPath: './',
  },
  resolve: {
    aliasFields: ['browser'],
  },
  optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin ({
      root: config.paths.root,
      verbose: false,
    })
  ],
};
