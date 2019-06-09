const webpack = require('webpack')
const config = require('./config/local')

console.log(config)

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [__dirname, 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(config),
    }),
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
  },
}
