const StyleDictionary = require('style-dictionary')
const baseConfig = require('./config.json')
const Color = require('tinycolor2')
const { transform } = require('@divriots/style-dictionary-to-figma');

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFileHeader({
    name: 'myCustomHeader',
    fileHeader: (defaultMessage) => {
        // defaultMessage are the 2 lines above that appear in the default file header
        // you can use this to add a message before or after the default message 👇

        // the fileHeader function should return an array of strings
        // which will be formatted in the proper comment style for a given format
        return [
            ...defaultMessage,
            `hello?`,
            `is it me you're looking for?`,
        ]
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////

StyleDictionary.registerFilter({
    name: 'filter-color',
    matcher: function(prop) {
        return prop.attributes.category === 'Foundation'
            && ((prop.attributes.type === '1_brand')
                || (prop.attributes.type === '2_base'))
    }
})

StyleDictionary.registerFilter({
    name: 'filter-font',
    matcher: function(prop) {
        // console.log('prop', prop.attributes)
        return prop.attributes.category === 'Foundation'
            && ((prop.attributes.type === 'web')
                || (prop.attributes.type === 'mobile'))
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////

StyleDictionary.registerTransform({
    name: 'colors/hex8flutter',
    type: 'value',
    transitive: true,
    matcher: token => {
        // console.log('token', token)
        //return prop.attributes.category === 'Foundation' && (prop.attributes.type === '2_base')
        return token.type === 'color'
    },
    transformer: prop => {
        const str = Color(prop.value).toHex8().toUpperCase();
        return `Color(0x${str.slice(6)}${str.slice(0, 6)})`;
    },
})

StyleDictionary.registerTransform({
    name: 'typography/shorthand',
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

//////////////////////////////////////////////////////////////////////////////////////////////////

StyleDictionary.registerFormat({
    name: 'figmaTokensPlugin',
    formatter: ({ dictionary }) => {
        const transformedTokens = transform(dictionary.tokens)
        return JSON.stringify(transformedTokens, null, 2);
    },
})

StyleDictionary.registerFormat({
    name: 'flutter/typography',
    formatter: ({dictionary}) => {
        // console.log('dictionary.tokens', dictionary.allProperties)
        return `
         ${dictionary.allProperties
                    .map((prop) => {
                        // console.log('prop.value', prop.value)
                        const transformedTokens = transform(prop.value)
                        // console.log('transformedTokens', transformedTokens)
                        return `
                         .${prop.name} {
                             font-family: ${prop.value.fontFamily},
                             font-size: ${prop.value.fontSize},
                             font-weight: ${prop.value.fontWeight},
                             line-height: ${prop.value.lineHeight}
                         };`}).join('\n')}
         `
    },
})

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()

console.log('\n==============================================');
console.log('\nBuild completed!');