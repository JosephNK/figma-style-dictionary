const StyleDictionary = require('style-dictionary')

module.exports = {
    registerTransformsFlutter : function () {
        StyleDictionary.registerTransform({
            name: 'typography/flutter/shorthand',
            type: 'value',
            transitive: true,
            matcher: token => {
                return token.type === 'typography'
            },
            transformer: (token) => {
                const {value} = token
                // console.log('token.value', token.value)
                //return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
                return value
            }
        })
    }
}

