const StyleDictionary = require('style-dictionary')
const { transform } = require("@divriots/style-dictionary-to-figma");

module.exports = {
    registerFormats : function () {
        StyleDictionary.registerFormat({
            name: 'figmaTokensPlugin',
            formatter: ({ dictionary }) => {
                const transformedTokens = transform(dictionary.tokens)
                return JSON.stringify(transformedTokens, null, 2);
            },
        })
    }
}

