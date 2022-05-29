const configSCSS = require('./config.json')
const { registerFiltersSCSS } = require('./filters')
const { registerTransformsSCSS } = require('./transform')

module.exports = {
    configSCSS,
    registerFiltersSCSS,
    registerTransformsSCSS,
}