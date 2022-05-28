const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFileHeader : function () {
        StyleDictionary.registerFileHeader({
            name: 'fileCommentsHeader',
            fileHeader: (defaultMessage) => {
                return [
                    ...defaultMessage,
                    ``,
                    `GENERATED CODE - DO NOT MODIFY BY HAND`,
                    `DesignSystem`,
                ]
            }
        })
    }
}