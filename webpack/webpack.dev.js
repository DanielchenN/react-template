const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../src'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
