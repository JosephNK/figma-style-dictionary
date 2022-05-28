const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFilters : function () {
        StyleDictionary.registerFilter({
            name: 'filter-common-color',
            matcher: function(token) {
                return ((token.attributes.category === '1_brand')
                        || (token.attributes.category === '2_base'))
            }
        })
    }
}

