
const path = require('path');
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addPostcssPlugins
} = require('customize-cra'); // show https://github.com/arackaf/customize-cra
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const port = 9529 //dev port

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false;
    // 配置打包后的文件位置
    config.output.path = resolve('docs');
    config.output.publicPath = '/';
    const paths = require('react-scripts/config/paths');
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');

    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024, //对10K以上的数据进行压缩
      }),
    )
  }
  return config;
}

const devServerConfig = () => config => {
  return {
    ...config,
    port: port,
    proxy: {
      // change xxx-api/login => mock/login
      [process.env.REACT_APP_BASE_API]: {
        // target: `http://localhost:${port}/mock`, // mock
        target: 'http://www.api.com', //api url
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.REACT_APP_BASE_API]: ''
        },
      }
    },
    // after: require('./mock/mock-server.js')
  }
}

module.exports = {
  webpack: override(
    // 配置antd 的按需引入
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }),
    // 配置路径访问快捷键 @/xxx
    addWebpackAlias({
      '@': resolve('src'),
    }),
    // // postCss 自动将px转为rem 需要配合 lib-flexible 使用
    // addPostcssPlugins([
    //   require('postcss-pxtorem')({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })
    // ]),
    // 压缩js等
    addCustomize()
  ),
 
  // 本地启动配置，可以设置代理
  devServer: overrideDevServer(
    devServerConfig()
  )
};