var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

// helper fn for making an absolute path relative to our cwd
var absolute = function(args) {
  console.log(path.resolve(__dirname, args));
  return path.resolve(__dirname, args);
};

module.exports = function(baseHref) {
  return {
    entry: {
      // bundle named 'app' looks in src/index.js
      app: './bits2',

      // bundle named 'vendor' has a bunch of vendor plugins
      vendor: [
        'whatwg-fetch',
        'promise-polyfill',
        'jquery',
        'lodash',
        'lodash-inflection',
        'moment',
        'angular',
        'angular-toastr',
        'angular-ui-router',
        'angular-messages',
        'q',
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/font-awesome/css/font-awesome.css',
        './node_modules/angular-toastr/dist/angular-toastr.css'
      ],
    },

    // specific bundles are ...
    output: {
      // put in __dirname/dist ...
      path: absolute('dist'),
      // in the public/js subdir, and named with a hash
      filename: 'public/js/[name].[chunkhash].js'
    },

    module: {
      rules: [
        {
          // use buble for JS files (downsteps es6 -> es3), ignore node modules
          test: /\.js/,
          use: 'buble-loader',
          exclude: /node_modules/
        },
        {
          // converts html files to a string
          test: /\.html/,
          use: 'html-loader'
        },
        {
          // less loader converts to css, css loader converts to a string, style loader appends that string to document.body
          test: /\.(css|less)/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            publicPath: '/../..' + baseHref,
            use: [
              'css-loader',
              'less-loader'
            ]
          })
        },
        {
          // font files are not processed and just placed in public/fonts
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader?name=public/fonts/[name].[ext]'
        },
        {
          // image files are not processed and just placed in public/images
          test: /\.(png|jpeg|gif|ico)$/,
          use: 'file-loader?name=public/images/[name].[ext]'
        }
      ]
    },
    resolve: {
      // resolve.alias does a simple rewrite when it sees a require() or import '' which matches it
      alias: {
        // act/services/foo -> __dirname/src/app/services/foo
        // it looks like a namespace!
        'act': absolute('bits2'),

        // hack for weird moment bug
        'moment$': 'moment/moment.js',
      }
    },
    devtool: 'source-map',
    plugins: [
      // cleans the dist folder
      new CleanWebpackPlugin(['dist/public']),

      // automagically creates an index file for us
      // wires up all of our entry points
      new HtmlWebpackPlugin({
        title: 'Roles/Permissions using Bit Manipulation',
        template: './bits2/index.ejs',
        baseHref: baseHref
      }),

      // 'optimizes' entry bundles so that code is not replicated across them
      // we define our vendor bundle to have a bunch of files that we don't change
      // so they can sit in that, be cached, and not clutter up our app bundle
      new webpack.optimize.CommonsChunkPlugin('vendor'),

      // pulls out css from style loader and puts it into a separate css file
      new ExtractTextPlugin('public/styles/[name].[contenthash].css')
    ],

    // for the dev server (npm run dev),
    devServer: {
      // if a file is requested and is not found, just return index.html
      historyApiFallback: true
    }
  }
};