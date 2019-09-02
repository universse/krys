const { rewireEmotion } = require('react-app-rewire-emotion')

module.exports = function override (config, env) {
  config = rewireEmotion(config, env, {
    hoist: true,
    sourceMap: true,
    autoLabel: true,
    labelFormat: '[filename]--[local]'
  })
  // delete config.node
  // config.target = 'electron-renderer';
  return config
}
