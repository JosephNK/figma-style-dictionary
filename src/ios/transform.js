const StyleDictionary = require('style-dictionary')
const Color = require("tinycolor2");

module.exports = {
    registerTransformsIosSwift : function () {
        StyleDictionary.registerTransform({
            name: 'color/UIColorSwift',
            type: 'value',
            transitive: true,
            matcher: token => {
                return token.type === 'color'
            },
            transformer: (token) => {
                const {value} = token
                const { r, g, b, a } = Color(value).toRgb();
                const rFixed = (r / 255.0).toFixed(3);
                const gFixed = (g / 255.0).toFixed(3);
                const bFixed = (b / 255.0).toFixed(3);
                return `UIColor(red: ${rFixed}, green: ${gFixed}, blue: ${bFixed}, alpha: ${a})`;
            }
        })
    }
}

