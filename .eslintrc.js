// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,//ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  parser: 'babel-eslint',//表明使用该 babel-eslint 模块作为解析器
  parserOptions: { //设置解析器选项
    sourceType: 'module' // 表明代码是ECMAScript 模块
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
