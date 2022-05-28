const fs = require('fs');
const __appRootPath = require('app-root-path').path
const __styleDictionaryLibCommonPath = __appRootPath + '/node_modules/style-dictionary/lib/common';
const {
    fileHeader,
    formattedVariables,
    getTypeScriptType,
    iconsWithPrefix,
    minifyDictionary,
    sortByReference,
    createPropertyFormatter,
    sortByName,
    setSwiftFileProperties
} = require(__styleDictionaryLibCommonPath + '/formatHelpers');
const _template = require('lodash/template');
const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFormatsFlutter : function () {
        StyleDictionary.registerFilter({
            name: 'filter-font',
            matcher: function(token) {
                return ((token.attributes.category === 'web')
                    || (token.attributes.category === 'mobile'))
            }
        })

        StyleDictionary.registerFormat({
            name: 'flutter/typography',
            formatter: ({dictionary, options, file}) => {
                const template = _template(
                    fs.readFileSync(__styleDictionaryLibCommonPath + '/templates/flutter/class.dart.template')
                );

                let allTokens;
                const { outputReferences } = options;
                const formatProperty = function (prop) {
                    let name = prop.name
                    let value = prop.value
                    let fontFamily = value.fontFamily
                    let fontWeight = value.fontWeight
                    let fontSize = value.fontSize
                    let lineHeight = value.lineHeight // AUTO, 24
                    let letterSpacing = value.letterSpacing // 0
                    let paragraphSpacing = value.paragraphSpacing // 0
                    let textCase = value.textCase // 'none'
                    let textDecoration = value.textDecoration // 'none'

                    if (fontWeight === "Bold") {
                        fontWeight = 'FontWeight.bold'
                    } else {
                        fontWeight = 'FontWeight.normal'
                    }

                    return `${name} = const TextStyle(
                    fontFamily: '${fontFamily}',
                    fontWeight: ${fontWeight},
                    fontSize: ${fontSize},
                    );`
                };

                if (outputReferences) {
                    allTokens = [...dictionary.allTokens].sort(sortByReference(dictionary));
                } else {
                    allTokens = [...dictionary.allTokens].sort(sortByName)
                }

                return template({allTokens, file, options, formatProperty, fileHeader});
            }
        })
    }
}

