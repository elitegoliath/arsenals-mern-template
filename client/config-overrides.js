/* eslint-disable no-undef */
/* eslint-disable no-var */
/* config-overrides.js */
module.exports = function override(config, env) {
  // Use external version of React
  // config.externals = {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM',
  // }
  config.optimization.runtimeChunk = false
  config.optimization.splitChunks = {
      cacheGroups: { default: false }
  }

  config.output.filename = 'static/js/[name].js'
  // config.output.chunkFilename = 'static/js/[name].chunk.js'

  var miniCSSPlugin = config.plugins[5].options
  // miniCSSPlugin.filename = 'static/css/[name].css'
  // miniCSSPlugin.chunkFilename = 'static/css/[name].chunk.css'
  miniCSSPlugin.moduleFilename = (chunkData) => 'static/css/[name].css'

  return config
}