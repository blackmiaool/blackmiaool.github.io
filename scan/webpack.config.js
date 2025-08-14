const path = require('path');

module.exports = {
  mode: 'production', // 必须为 production 才能启用 Tree Shaking
  entry: './transform.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'transform.output.js'
  },
  optimization: {
    usedExports: true,    // 启用 Tree Shaking
    concatenateModules: true, // 内联所有模块
    minimize: false,      // 关闭压缩（可选）
    innerGraph: true,     // 深度分析依赖
    sideEffects: true,    // 启用副作用分析
    // 强制单文件输出
    splitChunks: false
  },
  // 确保没有模块被排除
  externals: [],
  // 确保 ES6 模块语法能被正确处理
  experiments: {
    outputModule: false
  },
  // 强制所有模块被视为有副作用（除非明确标记）
  module: {
    rules: [
      {
        test: /\.js$/,
        sideEffects: true // 或 false 如果你能确定哪些模块无副作用
      }
    ]
  }
};