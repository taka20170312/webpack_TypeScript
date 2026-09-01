/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('dns');

const desktop = {
  mode: 'development',
  entry: {
    app_app1_desktop: [
      path.join(__dirname, 'js/desktop_main.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png||jpg||gif)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
    library: 'app_app1',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      DEVICE_TYPE: JSON.stringify('desktop')
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
};

const mobile = {
  mode: 'development',
  entry: {
    app_app1_mobile: [
      path.join(__dirname, 'js/mobile_main.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png||jpg||gif)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
    library: 'app_app1',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      DEVICE_TYPE: JSON.stringify('mobile')
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
};

module.exports = [
  desktop,
  mobile
];
