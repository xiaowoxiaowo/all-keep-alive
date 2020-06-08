module.exports = {
  root: true,

  env: {
    node: true,
    "jquery": true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'spaced-comment':0,    //取消//和/**/里的空格检测
    'eqeqeq': 0, //关闭必须使用===
    'eol-last': 0
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
