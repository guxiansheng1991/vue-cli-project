const path = require('path');
module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
        if (process.env.NODE_ENV === 'production') {
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                'lodash': '_'
            });
        }
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/common.scss'),
            ],
        })
}