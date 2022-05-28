const configFlutter = require('./config.json')
const { registerFiltersFlutter } = require('./filters')
const { registerFormatsFlutter } = require('./formats')
const { registerTransformsFlutter } = require('./transform')

module.exports = {
    configFlutter,
    registerFiltersFlutter,
    registerFormatsFlutter,
    registerTransformsFlutter,
}