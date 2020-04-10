const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    app: './index.js',
    vender: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react']
      }
    },
    {
      test: /.(png|jpg|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    },
    {
      test: /.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, 'dist')
  }
}
