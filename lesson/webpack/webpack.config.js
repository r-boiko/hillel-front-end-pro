const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

const html = pages => (pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `./${page}.html`,
    filename: `${page}.html`,
  })
}))

const isDev = mode => mode === 'development';

const filename = (isDev, ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = (_, {mode}) => {
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
      analytics: './js/analytics.js'
    },
    output: {
      filename: filename(isDev(mode), 'js'),
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
    },
    devtool: isDev(mode) && 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      open: true,
      hot: true,
    },
    plugins: [
      ...html(['index', 'about']),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: filename(isDev(mode), 'css'),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
          }
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };
}
