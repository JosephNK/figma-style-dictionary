const StyleDictionary = require('style-dictionary')
const Color = require("tinycolor2");

module.exports = {
    registerTransforms : function () {
        StyleDictionary.registerTransform({
            name: 'colors/hex8',
            type: 'value',
            transitive: true,
            matcher: token => {
                return token.type === 'color'
            },
            transformer: prop => {
                const str = Color(prop.value).toHex8().toUpperCase();
                return `Color(0x${str.slice(6)}${str.slice(0, 6)})`;
            },
        })
    }
}

