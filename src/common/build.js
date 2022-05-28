const { registerFilters } = require('./filters')
const { registerFormats } = require('./formats')
const { registerFileHeader } = require('./headers')
const { registerTransforms } = require('./transform')

module.exports = {
    registerFilters,
    registerFormats,
    registerFileHeader,
    registerTransforms,
}