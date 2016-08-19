var webpack = require('webpack');

var plugins = [];

if (process.env.NODE_ENV === 'production'){
    plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ];
}

module.exports = {
  entry: './src-dev/App.js',
  output: {
    filename: 'dist-dev/app.js'
  },
  plugins: plugins,
  resolve: {
    alias: {
        './conf' : __dirname + '/conf-' + process.env.NODE_ENV
    }
  },
  module: {
    /*preLoaders: [
      { test: /\.js$/, loader: "transform?envify" },
    ],*/
    
    loaders:[
      //{ test: /jquery\.js$/, loader: 'expose?$' },
      //{ test: /jquery\.js$/, loader: 'expose?jQuery' },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
	        plugins: ['transform-runtime'],
	        presets: ['es2015', 'stage-0', 'react'],
	    }
      },
    ]
  },
  devtool: process.env.NODE_ENV !== "production" ? 'source-map' : "#"
};