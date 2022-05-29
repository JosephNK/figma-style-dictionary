const StyleDictionary = require('style-dictionary')

module.exports = {
    registerFiltersSCSS : function () {
        StyleDictionary.registerFilter({
            name: 'filter-scss-font',
            matcher: function(token) {
                return (token.attributes.category === 'web')
            }
        })
    }
}

