'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  /*test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }*/
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {//这是入口 
    app: './src/main.js',
    test:'./src/test.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {//官网说法是用来影响webpack模块解释规则 缩短解释时间 提升打包速度  
      //配置webpack如何寻找模块对应的文件
    extensions: ['.js', '.vue', '.json'],//在文件不带后缀的时候 webpack会自动带上后缀去产生过hi访问文件是否存在 默认是 .js   .json   
    //先寻找.js 后.vue 最后.json 再不行就报错了
    alias: {
      'vue$': 'vue/dist/vue.esm.js',//假如这个是components:"./src/components"  你import a from "components/abc.vue" 就等于那条路径了 
      //import Vue from 'vue'  但是我不明白$是什么意思？ 哦 $符号来缩小范围只命中以关键字结尾的导入语句 但是还不太懂   就是.vue文件了 为什不写entensions呢 是因为有相关配置 所以alias
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            options: vueLoaderConfig
                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
        
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
      
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,//boolean | "mock" | "empty"  默认true
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  externals:{
      vue:"Vue"
  }
}
