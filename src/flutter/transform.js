const StyleDictionary = require('style-dictionary')

module.exports = {
    registerTransformsFlutter : function () {
        StyleDictionary.registerTransform({
            name: 'typography/flutter/gen',
            type: 'value',
            transitive: true,
            matcher: token => {
                return token.type === 'typography'
            },
            transformer: (token) => {
                const {value} = token
                return value
            }
        })
    }
}

