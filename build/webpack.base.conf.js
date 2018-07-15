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
  entry: {//������� 
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
  resolve: {//����˵��������Ӱ��webpackģ����͹��� ���̽���ʱ�� ��������ٶ�  
      //����webpack���Ѱ��ģ���Ӧ���ļ�
    extensions: ['.js', '.vue', '.json'],//���ļ�������׺��ʱ�� webpack���Զ����Ϻ�׺ȥ������hi�����ļ��Ƿ���� Ĭ���� .js   .json   
    //��Ѱ��.js ��.vue ���.json �ٲ��оͱ�����
    alias: {
      'vue$': 'vue/dist/vue.esm.js',//���������components:"./src/components"  ��import a from "components/abc.vue" �͵�������·���� 
      //import Vue from 'vue'  �����Ҳ�����$��ʲô��˼�� Ŷ $��������С��Χֻ�����Թؼ��ֽ�β�ĵ������ ���ǻ���̫��   ����.vue�ļ��� Ϊʲ��дentensions�� ����Ϊ��������� ����alias
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
    setImmediate: false,//boolean | "mock" | "empty"  Ĭ��true
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
