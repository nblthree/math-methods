module.exports = {
  presets: [
    ['@babel/env'],
    [
      'minify',
      {
        keepFnName: true,
        builtIns: false
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-export-default-from']
  ]
}
