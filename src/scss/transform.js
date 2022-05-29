const StyleDictionary = require('style-dictionary')

module.exports = {
    registerTransformsSCSS : function () {
        StyleDictionary.registerTransform({
            name: 'typography/scss/gen',
            type: 'value',
            transitive: true,
            matcher: token => {
                return token.type === 'typography'
            },
            transformer: (token) => {
                const {value} = token
                console.log('value', value)
                return value
            }
        })
    }
}

