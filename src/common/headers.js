const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFileHeader : function () {
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
        })
    }
}