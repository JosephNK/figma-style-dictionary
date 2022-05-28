const StyleDictionary = require('style-dictionary')
const baseConfig = require('./config.json')

const { registerFilters, registerFormats, registerFileHeader, registerTransforms  } = require('./src/common/build')
const { configIOS } = require('./src/ios/build')
const { configAndorid } = require('./src/android/build')
const { configFlutter, registerFiltersFlutter, registerFormatsFlutter, registerTransformsFlutter } = require('./src/flutter/build')

console.log('Build started...')
console.log('\n==============================================')

/// Commons
registerFilters()
registerFormats()
registerFileHeader()
registerTransforms()

/// Flutter
registerFiltersFlutter()
registerFormatsFlutter()
registerTransformsFlutter()

StyleDictionary.extend({
    source: baseConfig.source,
    platforms: {
        ...baseConfig.platforms,
        ...configIOS,
        ...configAndorid,
        ...configFlutter
    },
}).buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')
