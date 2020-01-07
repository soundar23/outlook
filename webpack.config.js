// import webpack from 'webpack';
var path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// //import {BundleAnalyzerPlugin}  from 'webpack-bundle-analyzer';

// const envVariable = {
//   'envConfig': null
// };

// export default {
//   //debug: true,
//   devtool: 'cheap-module-source-map',
//   //noInfo: false,
//   entry: [
//     'eventsource-polyfill', // necessary for hot reloading with IE
//     'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({template: './src/index.html'})
//   ],
//   devServer: {
//     contentBase: path.resolve(__dirname, 'src')
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.EnvironmentPlugin(envVariable),
//     new webpack.NoEmitOnErrorsPlugin(),
//   //   new BundleAnalyzerPlugin({
//   //     analyzerMode: 'static'
//   // })

//   ],


  module.exports= {
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      publicPath:'/',
      historyApiFallback:true,
      port: 3006
    }, 
    plugins: [
          new HtmlWebpackPlugin({template: './public/index.html'})
        ],
    entry: [
          // 'eventsource-polyfill', // necessary for hot reloading with IE
          // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
          path.resolve(__dirname, 'src/index')
        ],
        target: 'web',
        output: {
          path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
          publicPath: '/',
          filename: 'bundle.js'
        },
    module:{rules: [{
        test: /\.json$/,
        loader: 'json-loader'
      },
      {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/' ,query: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins:[["@babel/plugin-proposal-decorators", { "legacy": true }],["@babel/plugin-proposal-class-properties", { "loose": true }]]
    }},
      {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/', query: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins:[["@babel/plugin-proposal-decorators", { "legacy": true }],["@babel/plugin-proposal-class-properties", { "loose": true }]]
        
    }},
      {
        test: /(\.css)$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url-loader?limit=10000'
      }
    ]}
  };
