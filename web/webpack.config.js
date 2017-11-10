const path = require('path')
const webpack = require('webpack')

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(__dirname, '..', 'index-web.js'),
    path.resolve(__dirname, '..', 'src'),
    path.resolve(__dirname, '..', 'node_modules/react-native-animatable')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web/babel'],
      presets: ['react-native']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  entry: {
    app: path.join(__dirname, '../index-web.js')
  },

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ]
  },

  devServer: {
    inline: true,
    contentBase: 'web/public',
    historyApiFallback: true,
  },
}
