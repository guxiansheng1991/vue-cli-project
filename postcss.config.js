module.exports = {
    plugins: {
        // 配置px to vw
        'postcss-px-to-viewport': {
            unitToConvert: 'px',    // 需要转换的单位
            viewportWidth: 750,     // 设计图视口宽度
            unitPrecision: 5,       // 小数保留位数
            propList: ["*"],        // 支持转换的css属性名称
            viewportUnit: 'vw',     // 转为为vw宽度单位
            fontViewportUnit: 'vw', // 字体单位
            selectorBlackList: [/^\.ingore_/g],  // 选择器黑名单,转换时不会转换符合此处的选择器
            minPixelValue: 1,       // 最小的转换数值
            mediaQuery: false,      // 媒体查询里面的是否转换
            replace: true,          // 是否直接替换属性值而不是添加备用属性
            exclude: undefined,     // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: undefined,     // 设置此处值, 则只转换include内的文件
            landscape: false,       // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw',    // 横屏时使用的单位
            landscapeWidth: 1334     // 横屏时使用的视口宽度
        }
    }
}