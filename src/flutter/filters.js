const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFiltersFlutter : function () {
        StyleDictionary.registerFilter({
            name: 'filter-flutter-font',
            matcher: function(token) {
                return (token.attributes.category === 'mobile')
            }
        })
    }
}

