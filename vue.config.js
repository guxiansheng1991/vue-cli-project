const path = require('path');

console.log('当前环境变量NODE_ENV:', process.env.NODE_ENV);

module.exports = {
    // 配置多页应用
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        introduce: {
            entry: 'src/introduce.js',
            template: 'public/introduce.html',
            filename: 'introduce.html'
        }
    },
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